import doGetUserId from '../../backend/auth/doGetUserId';
import doGetAllWonPrizes from '../../backend/database/firestore/doGetAllWonPrizes'
import {SUCCESS, ERROR} from '../../frontend/util/ResultsConstants';

const getWonPrizesUC = async () => {
  try {
    const userId = doGetUserId();

    if (!userId) {
      console.log(`something is horribly wrong because userId is null`);
      return {status: ERROR, data: [], message: 'Failed to fetch prizes'};
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
    return {status: ERROR, data: [], message: 'failed to fetch prizes'};
  }
};

export default getWonPrizesUC;
