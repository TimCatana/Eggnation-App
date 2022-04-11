import doGetUserId from '../backend/auth/accessors/doGetUserId';
import doGetAllWonPrizes from '../backend/database/firestore/doGetAllWonPrizes';
import {SUCCESS, FAILURE} from '../frontend/util/ResultsConstants';

export const getWonPrizesUC = async () => {
  try {
    const userId = doGetUserId();

    if (!userId) {
      console.log(`something is horribly wrong because userId is null`);
      return {status: FAILURE, data: [], message: 'Failed to fetch prizes'};
    }

    const wonPrizes = await doGetAllWonPrizes(userId);

    if (wonPrizes.length === 0) {
      return {
        status: SUCCESS,
        data: [],
        message: "You haven't won anything yet!",
      };
    }

    return {status: SUCCESS, data: wonPrizes, message: ''};
  } catch (e) {
    console.log(`error deleting user... need to show UI error --> ${e}`);
    return {status: FAILURE, data: [], message: 'failed to fetch prizes'};
  }
};
