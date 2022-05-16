import {SUCCESS, ERROR} from '../../constants/ResultsConstants';
import {
  AvailablePrizesArray,
  ContestPrizeArray,
  Result,
} from '../../constants/typeAliases';
import {
  DV_LOCAL_COUNT,
  MGL_RNG_RANGE,
  MGL_WIN_CHANCE,
  PCT_NONE,
} from '../../constants/Constants';
import {
  S_CPT_PRIZE_DESC,
  S_CPT_PRIZE_ID,
  S_CPT_PRIZE_TIER,
  S_CPT_PRIZE_TITLE,
  S_CPT_PRIZE_TYPE,
  S_E_HS_CONNECTIVITY_NOTICE,
} from '../../constants/Strings';
import printDevLogs from '../printDevLogs';
import doIncrementGlobalCount from '../../backend/database/realtime/doIncrementGlobalCount';
import doGetWonPrize from '../../backend/database/firestore/doGetWonPrize';
import doCheckInternetConnection from '../../backend/network-info/doCheckInternetConnection';
import doGetAllContestPrizes from '../../backend/database/firestore/doGetAllContestPrizes';
import doGetAllAvailablePrizes from '../../backend/database/firestore/deGetAllAvailablePrizes';
import doGetUserId from '../../backend/auth/doGetUserId';
import doAddWonPrizeToUserAccount from '../../backend/database/firestore/doAddWonPrizeToUserAccount';
import doDeleteAvailablePrize from '../../backend/database/firestore/doDeleteAvailablePrize';
import doDeleteContestPrize from '../../backend/database/firestore/doDeleteContestPrize';

/**
 * @note All helper function errors BUBBLE UP to the 'mainGameLogicUC' function. DO NOT wrap content in helper functions in a try-catch
 * Does the main game logic.
 * @phase1 check internet connection.
 * @phase2 check if to do contest prize logic or rng logic
 * @CONTESTPRIZELOGIC
 * @phaseA check if contest prizes exist.
 *         contest prizes do not exist --> user loses
 *         contest prizes do exist --> do win prize logic
 * @RNGLOGIC
 * @phaseA generate a random number
 * @phaseB if rng is the losing number --> user loses
 *         if rng is the winning number --> check if available prizes exist
 * @phaseC check if available prizes exist.
 *         available prizes do not exist --> user loses
 *         available prizes do exist --> do win prize logic
 * @WINPRIZELOGIC
 * @phase3 get user Id
 * @phase4 choose a random prize from the fetched prizes
 * @phase5 add prize to user account in database
 * @phase6 delete prize from database
 * @error All errors are unexpected.
 * @onSuccessReturn {status: SUCCESS, data: {isWon: true, isConnected: boolean}, message: string}
 * @onErrorReturn {status: ERROR, data: {isWon: false, isConnected: boolean}, message: string}
 */
const mainGameLogicUC = async (
  localCount: number,
  decrementAndGetLocalCount: () => Promise<void>,
): Promise<Result> => {
  try {
    /**
     * @Phase1 Check internet connection.
     */
    const isConnected = await doCheckInternetConnection();
    if (!isConnected) {
      return {
        status: ERROR,
        data: {isWon: false, isConnected: false},
        message: S_E_HS_CONNECTIVITY_NOTICE,
      };
    }

    /**
     * @phase2 decrement counter
     */
    await decrementAndGetLocalCount();
    doIncrementGlobalCount();

    /**
     * @phase3 get user id
     */
    const userId = doGetUserId();
    if (!userId) {
      return {
        status: ERROR,
        data: {isWon: false, isConnected: true},
        message: '',
      };
    }

    /**
     * @Phase4 If localCount is 1, then do the contestPrize logic
     *         If localCount is not 1, then do the rng logic
     */
    if (localCount === 1) {
      return _contestPrizeLogic(userId);
    } else if (localCount === parseInt(DV_LOCAL_COUNT) - 5) {
      return _storePromotionPrizeLogic(userId);
    } else {
      return _rngLogic(userId);
    }
  } catch (e: any) {
    return _getErrorResponse(e);
  }
};

/**
 * Get all of the contest prizes and check if the user is a winner.
 * The user only wins if contest prizes exist.
 * The first people to reach a localCount of 1 win.
 * @returns { status: SUCCESS || ERROR, data: {isWon: boolean, isConnected: true}, message: string }
 */
const _contestPrizeLogic = async (userId: string): Promise<Result> => {
  const contestPrizes = await doGetAllContestPrizes();

  if (contestPrizes.length === 0) {
    return {
      status: SUCCESS,
      data: {isWon: false, isConnected: true},
      message: '',
    };
  }

  return await _winPrizeLogic(userId, contestPrizes, false);
};

/**
 * Do a random number generation to see if the user won.
 * If rng % winChance === 0 then the user wins.
 * If the user wins, then do available prize logic.
 * If the available prize logic fails, then the user technically loses.
 * @returns { status: SUCCESS || ERROR, data: {isWon: boolean, isConnected: true}, message: string }
 */
const _rngLogic = async (userId: string): Promise<Result> => {
  const rng = Math.floor(Math.random() * MGL_RNG_RANGE);

  if (rng % MGL_WIN_CHANCE !== 0) {
    return {
      status: SUCCESS,
      data: {isWon: false, isConnected: true},
      message: '',
    };
  } else {
    return _availablePrizeLogic(userId);
  }
};

/**
 * Get all of the available prizes and check if the user is a winner.
 * The user only wins if available prizes exist.
 * If any error occurs with getting the prize from the available prizes collection
 * to the user's collection, then the user is considered to have lost.
 * If the available prize manages to get to the user's collection, then the user
 * is considered to have won.
 * @returns { status: SUCCESS || ERROR, data: {isWon: boolean, isConnected: true}, message: string }
 */
const _availablePrizeLogic = async (userId: string): Promise<Result> => {
  const prizes = await doGetAllAvailablePrizes();

  if (prizes.length === 0) {
    return {
      status: SUCCESS,
      data: {isWon: false, isConnected: true},
      message: '',
    };
  }

  return await _winPrizeLogic(userId, prizes, true);
};

/**
 * Does the win prize logic.
 * @phase1 get user Id
 * @phase2 choose a random prize from the fetched prizes
 * @phase3 add prize to user account in database
 * @phase4 delete prize from database
 * @param prizes (contestPrize or availablePrize) that the user has won.
 * @param isAvailablePrizes (boolean Determines whether to doDeleteAvailablePrize or doDeleteContestPrize
 * @returns { status: SUCCESS || ERROR, data: {isWon: boolean, prize: AvailablePrize, isConnected: true}, message: string }
 */
const _winPrizeLogic = async (
  userId: string,
  prizes: ContestPrizeArray | AvailablePrizesArray,
  isAvailablePrizes: boolean,
): Promise<Result> => {
  /**
   * @phase1
   */
  const prize = prizes[Math.floor(Math.random() * prizes.length)];

  /**
   * @phase2
   */
  await doAddWonPrizeToUserAccount(userId, prize);

  /**
   * @phase3
   */
  isAvailablePrizes
    ? await doDeleteAvailablePrize(prize.prizeId)
    : await doDeleteContestPrize(prize.prizeId);

  return {
    status: SUCCESS,
    data: {isWon: true, prize: prize, isConnected: true},
    message: 'Did win',
  };
};

/**
 * Get all of the contest prizes and check if the user is a winner.
 * The user only wins if contest prizes exist.
 * The first people to reach a localCount of 1 win.
 * @returns { status: SUCCESS || ERROR, data: {isWon: boolean, isConnected: true}, message: string }
 */
const _storePromotionPrizeLogic = async (userId: string): Promise<Result> => {
  const result = await doGetWonPrize(userId, S_CPT_PRIZE_ID);

  if (result) {
    return {
      status: SUCCESS,
      data: {isWon: false, isConnected: true},
      message: '',
    };
  }

  const couponPrize = {
    prizeId: S_CPT_PRIZE_ID,
    prizeTitle: S_CPT_PRIZE_TITLE,
    prizeDesc: S_CPT_PRIZE_DESC,
    prizeType: S_CPT_PRIZE_TYPE,
    prizeTier: S_CPT_PRIZE_TIER,
    prizeClaimType: PCT_NONE,
  };

  await doAddWonPrizeToUserAccount(userId, couponPrize);

  return {
    status: SUCCESS,
    data: {
      isWon: true,
      prize: couponPrize,
      isConnected: true,
    },
    message: '',
  };
};

/**
 * Get's the correct error message to return to the UI.
 * Prints dev logs if in DEV mode.
 * @param error The error
 * @returns {status: ERROR,data: {isWon: boolean,  isConnected: true}, message: string}
 */
const _getErrorResponse = (error: any): Result => {
  if (__DEV__) {
    printDevLogs(
      'domain/home-screen-uc/mainGameLogicUC.js',
      'mainGameLogicUC',
      `${error}`,
    );
  }

  return {status: ERROR, data: {isWon: false, isConnected: true}, message: ''};
};

export default mainGameLogicUC;
