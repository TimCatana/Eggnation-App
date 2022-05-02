import doGetUserId from '../../backend/auth/doGetUserId';
import doSendMeEmail from '../../backend/cloud-functions/doSendMeEmail';
import doUpdatePrizeClaimedValue from '../../backend/database/firestore/doUpdatePrizeClaimedValue';
import doGetWonPrize from '../../backend/database/firestore/doGetWonPrize';
import {ERROR, SUCCESS} from '../../constants/ResultsConstants';
import {Result} from '../../types/typeAliases';
import printDevLogs from '../printDevLogs';

/**
 * @returns
 * TODO Finish this
 */
const claimPrizeUC = async (
  prizeId: string,
  country: string,
  region: string,
  address: string,
  postalCode: string,
): Promise<Result> => {
  const userId = doGetUserId();
  if (!userId) {
    return {
      status: ERROR,
      data: null,
      message: 'Failed to claim prize. If error persists please contact us',
    };
  }

  try {
    const prize = await doGetWonPrize(userId, prizeId);

    if (!prize) {
      return {
        status: ERROR,
        data: null,
        message: 'Failed to claim prize. If error persists please contact us',
      };
    }

    if (prize.prizeClaimed) {
      return {
        status: ERROR,
        data: null,
        message: 'This prize has already been claimed.',
      };
    }

    await doSendMeEmail(prizeId, country, region, address, postalCode);
    await doUpdatePrizeClaimedValue(userId, prizeId);
    return {status: SUCCESS, data: null, message: ''};
  } catch (e) {
    return _getErrorResponse(e);
  }
};

/**
 * Get's the correct error message to return to the UI.
 * Prints dev logs if in DEV mode.
 * @param error The error
 * @returns {status: ERROR, data: null, message: string}
 */
const _getErrorResponse = (error: any): Result => {
  if (__DEV__) {
    printDevLogs(
      'domain/claim-prize-screen-uc/claimPrizeUC.js',
      'claimPrizeUC',
      `${error}`,
    );
  }

  return {
    status: ERROR,
    data: null,
    message: 'Failed to claim prize. If error persists please contact us',
  };
};

export default claimPrizeUC;
