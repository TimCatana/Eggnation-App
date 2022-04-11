import deGetAllAvailablePrizes from '../backend/database/firestore/deGetAllAvailablePrizes';
import doDeleteAvailablePrize from '../backend/database/firestore/doDeleteAvailablePrize';
import doAddWonPrizeToUserAccount from '../backend/database/firestore/doAddWonPrizeToUserAccount';
import doGetUserId from '../backend/auth/accessors/doGetUserId';
import {SUCCESS} from '../frontend/util/ResultsConstants';

export const mainGameLogicUC = async () => {
  try {
    const rng = Math.floor(Math.random() * 1000001); // TODO - make this a constant

    console.log(rng);

    // TODO - check if internet connected or not

    if (rng % 100000 !== 0) {
      console.log('lost');
      return {status: SUCCESS, data: false, message: 'Did not win'};
    } else {
      // get userId
      const userId = doGetUserId();

      if (!userId) {
        console.log('Something is horribly wrong since uerId is null');
        return {status: FAILURE, data: false, message: 'Did not win'};
      }

      // get all available prizes
      const prizes = await deGetAllAvailablePrizes();

      if (prizes.length === 0) {
        return {status: SUCCESS, data: false, message: 'No prizes available'};
      }

      // get a random prize
      const prize = prizes[Math.floor(Math.random() * prizes.length)];

      // add prize to user account
      await doAddWonPrizeToUserAccount(userId, prize);

      // TODO - uncomment after
      // await doDeleteAvailablePrize(prize.prizeId)

      console.log('won');
      return {status: SUCCESS, data: true, message: 'Did win'};
    }
  } catch (e) {
    console.log(`error in main game logic... need to show UI error --> ${e}`);
    return false;
  }
};
