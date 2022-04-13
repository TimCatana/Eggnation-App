import deGetAllAvailablePrizes from '../../backend/database/firestore/deGetAllAvailablePrizes';
import doDeleteAvailablePrize from '../../backend/database/firestore/doDeleteAvailablePrize';
import doAddWonPrizeToUserAccount from '../../backend/database/firestore/doAddWonPrizeToUserAccount';
import doGetUserId from '../../backend/auth/doGetUserId';
import doCheckInternetConnection from '../../backend/network-info/doCheckInternetConnection';
import {SUCCESS, ERROR} from '../../frontend/util/ResultsConstants';
import {MGL_RNG_RANGE, MGL_WIN_CHANCE} from '../../frontend/util/Constants';

/**
 * TODO - add documentation
 * @returns
 */
const mainGameLogicUC = async () => {
  try {
    const rng = Math.floor(Math.random() * MGL_RNG_RANGE);
    console.log(rng);

    // TODO - check if internet connected or not
    const isConnected = await doCheckInternetConnection();
    if(!isConnected) {
      console.log("No Internet Connection")
      return {status: ERROR, message: 'You need to be connected to the internet'};
    }

    if (rng % MGL_WIN_CHANCE !== 0) {
      console.log('lost');
      return {status: SUCCESS, data: {isWon: false}, message: 'Did not win'};
    } else {
      /**
       * @Phase1 Get the user ID
       */
      const userId = doGetUserId();
      if (!userId) {
        return {status: ERROR, message: 'Something went wrong'};
      }

      /**
       * @Phase2 Get all of the available prizes
       */
      const prizes = await deGetAllAvailablePrizes();
      if (prizes.length === 0) {
        return {
          status: SUCCESS,
          data: {isWon: false},
          message: 'No prizes available',
        };
      }

      /**
       * @Phase3 Get a random prize from the fetched available prizes
       */
      const prize = prizes[Math.floor(Math.random() * prizes.length)];

      /**
       * @Phase4 Add the random prize to the user's account
       */
      await doAddWonPrizeToUserAccount(userId, prize);

      // TODO - uncomment after
      /**
       * @Phase5 Delete the available prize from the available prize collection
       */
      // await doDeleteAvailablePrize(prize.prizeId)

      console.log('won');
      return {status: SUCCESS, data: {isWon: true}, message: 'Did win'};
    }
  } catch (e) {
    console.log(`error in main game logic... need to show UI error --> ${e}`);
    return {status: ERROR, message: 'Did win'};
  }
};

export default mainGameLogicUC;
