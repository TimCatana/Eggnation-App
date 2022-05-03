import doGetUserId from '../../backend/auth/doGetUserId';
import doGetAllWonPrizes from '../../backend/database/firestore/doGetAllWonPrizes';
import {SUCCESS, ERROR} from '../../constants/ResultsConstants';
import {Result} from '../../constants/typeAliases';
import {S_E_WPS_FAILED_TO_FETCH_PRIZES} from '../../constants/Strings';
import printDevLogs from '../printDevLogs';

/**
 * Attempts to fetch won prizes from the database.
 * @onSuccessReturn {status: SUCCESS,
 *                   data:  { prizeId: string,
 *                            prizeTitle: string,
 *                            prizeDesc: string,
 *                            prizeType: string,
 *                            prizeTier: string,
 *                            prizeWonDate: string,
 *                            prizeClaimed: boolean,
 *                            prizeWinnerId: string }[] ,
 *                   message: string}
 * @onErrorReturn {status: ERROR, data: [], message: string}
 */
const getWonPrizesUC = async (): Promise<Result> => {
  try {
    const userId = doGetUserId();

    if (!userId) {
      return {status: ERROR, data: [], message: S_E_WPS_FAILED_TO_FETCH_PRIZES};
    }

    const wonPrizes = await doGetAllWonPrizes(userId);

    if (wonPrizes.length === 0) {
      return {status: SUCCESS, data: [], message: ''};
    }

    return {status: SUCCESS, data: wonPrizes, message: ''};
  } catch (e: any) {
    return _getErrorResponse(e);
  }
};

/**
 * Get's the correct error message to return to the UI.
 * Prints dev logs if in DEV mode.
 * @param error (error) The error
 * @returns {status: ERROR, data: [], message: string}
 */
const _getErrorResponse = (error: any): Result => {
  if (__DEV__) {
    printDevLogs(
      'domain/won-prizes-screen-uc/getWonPrizesUC.ts',
      'getWonPrizesUC',
      `${error}`,
    );
  }

  return {status: ERROR, data: [], message: S_E_WPS_FAILED_TO_FETCH_PRIZES};
};

export default getWonPrizesUC;
