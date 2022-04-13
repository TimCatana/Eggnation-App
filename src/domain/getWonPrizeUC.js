import doGetWonPrize from '../backend/database/firestore/doGetWonPrize';
import {SUCCESS, ERROR} from '../frontend/util/ResultsConstants';
import doGetUserId from '../backend/auth/doGetUserId';

/**
 * @returns
 */
const getWonPrizeUC = async prizeId => {
  try {
    const userId = doGetUserId();

    if (!userId) {
      return {status: ERROR, message: ''};
    }

    console.log('Running getwonprize');
    await doGetWonPrize(userId, prizeId);
    return {status: SUCCESS, message: ''};
  } catch (e) {
    return {status: ERROR, message: ''};
  }
};

export default getWonPrizeUC;
