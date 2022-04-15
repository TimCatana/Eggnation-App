import doCheckInternetConnection from '../../backend/network-info/doCheckInternetConnection';
import doGetAllContestPrizes from '../../backend/database/firestore/doGetAllContestPrizes';
import doGetAllAvailablePrizes from '../../backend/database/firestore/deGetAllAvailablePrizes';
import doGetUserId from '../../backend/auth/doGetUserId';
import doAddWonPrizeToUserAccount from '../../backend/database/firestore/doAddWonPrizeToUserAccount';
import doDeleteAvailablePrize from '../../backend/database/firestore/doDeleteAvailablePrize';
import doDeleteContestPrize from '../../backend/database/firestore/doDeleteContestPrize';
import {SUCCESS, ERROR} from '../../frontend/util/ResultsConstants';
import {MGL_RNG_RANGE, MGL_WIN_CHANCE} from '../../frontend/util/Constants';

/**
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
 * @onSuccessReturn {status: SUCCESS, data: {isWon: true}, message: string}
 * @onErrorReturn {status: ERROR, data: {isWon: false}, message: string}
 */
const mainGameLogicUC = async localCount => {
  try {
    /**
     * @Phase1 Check internet connection.
     */
    const isConnected = await doCheckInternetConnection();
    if (!isConnected) {
      return {
        status: ERROR,
        data: {isWon: false},
        message: 'You need to be connected to the internet',
      };
    }

    /**
     * @Phase2 If localCount is 1, then do the contestPrize logic
     *         If localCount is not 1, then do the rng logic
     */
    if (localCount === 1) {
      return _contestPrizeLogic();
    } else {
      return _rngLogic();
    }
  } catch (e) {
    return _getErrorResponse(e);
  }
};

/**
 * Get all of the contest prizes and check if the user is a winner.
 * The user only wins if contest prizes exist.
 * The first people to reach a localCount of 1 win.
 * @returns { status: SUCCESS || ERROR, data: {isWon: boolean}, message: string }
 */
const _contestPrizeLogic = async () => {
  const contestPrizes = await doGetAllContestPrizes();

  if (contestPrizes.length === 0) {
    return {
      status: SUCCESS,
      data: {isWon: false},
      message: '',
    };
  }

  return await _winPrizeLogic(contestPrizes);
};

/**
 * Do a random number generation to see if the user won.
 * If rng % winChance === 0 then the user wins.
 * If the user wins, then do available prize logic.
 * If the available prize logic fails, then the user technically loses.
 * @returns { status: SUCCESS || ERROR, data: {isWon: boolean}, message: string }
 */
const _rngLogic = async () => {
  const rng = Math.floor(Math.random() * MGL_RNG_RANGE);

  if (rng % MGL_WIN_CHANCE !== 0) {
    console.log('lost');
    return {status: SUCCESS, data: {isWon: false}, message: ''};
  } else {
    return _availablePrizeLogic();
  }
};

/**
 * Get all of the available prizes and check if the user is a winner.
 * The user only wins if available prizes exist.
 * If any error occurs with getting the prize from the available prizes collection
 * to the user's collection, then the user is considered to have lost.
 * If the available prize manages to get to the user's collection, then the user
 * is considered to have won.
 * @returns { status: SUCCESS || ERROR, data: {isWon: boolean}, message: string }
 */
const _availablePrizeLogic = async () => {
  const prizes = await doGetAllAvailablePrizes();

  if (prizes.length === 0) {
    return {
      status: SUCCESS,
      data: {isWon: false},
      message: '',
    };
  }

  return await _winPrizeLogic();
};

/**
 * Does the win prize logic.
 * @phase1 get user Id
 * @phase2 choose a random prize from the fetched prizes
 * @phase3 add prize to user account in database
 * @phase4 delete prize from database
 * @param prizes (contestPrize or availablePrize) that the user has won.
 * @param isAvailablePrizes (boolean Determines whether to doDeleteAvailablePrize or doDeleteContestPrize
 * @returns
 */
const _winPrizeLogic = async (prizes, isAvailablePrizes) => {
  /**
   * @phase1
   */
  const userId = doGetUserId();
  if (!userId) {
    return {
      status: ERROR,
      data: {isWon: false},
      message: '',
    };
  }

  /**
   * @phase2
   */
  const prize = prizes[Math.floor(Math.random() * prizes.length)];

  /**
   * @phase3
   */
  await doAddWonPrizeToUserAccount(userId, prize);

  // TODO - uncomment after
  /**
   * @phase4
   */
  // isAvailablePrizes
  //   ? await doDeleteAvailablePrize(prize.prizeId)
  //   : await doDeleteContestPrize(prize.prizeId);

  console.log('won');
  return {status: SUCCESS, data: {isWon: true}, message: 'Did win'};
};

/**
 * Get's the correct error message to return to the UI.
 * Prints dev logs if in DEV mode.
 * @param error The error
 * @returns {status: ERROR, data: int, message: string}
 */
const _getErrorResponse = error => {
  if (__DEV__) {
    printDevLogs(
      'domain/home-screen-uc/mainGameLogicUC.js',
      'mainGameLogicUC',
      `${error}`,
    );
  }

  return {status: ERROR, message: ''};
};

export default mainGameLogicUC;
