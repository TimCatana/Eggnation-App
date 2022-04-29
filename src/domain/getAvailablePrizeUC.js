import doGetAvailablePrize from '../backend/database/firestore/doGetAvailablePrize';
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

    await doGetAvailablePrize(userId, prizeId);
    return {status: SUCCESS, message: ''};
  } catch (e) {
    return {status: ERROR, message: ''};
  }
};

export default getWonPrizeUC;