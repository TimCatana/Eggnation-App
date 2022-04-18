import deGetAllAvailablePrizes from '../../backend/database/firestore/deGetAllAvailablePrizes';
import { SUCCESS, ERROR } from '../../constants/ResultsConstants';
import printDevLogs from '../printDevLogs';
import {Result} from '../../types/typeAliases';

/**
 * Attempts to fetch available prizes from the database.
 * @onSuccessReturn {status: SUCCESS,
 *                   data: { prizeId: string,
 *                           prizeTitle: string,
 *                           prizeDesc: string,
 *                           prizeType: string,
 *                           prizeTier: string }[],
 *                   message: string}
 * @onErrorReturn {status: ERROR, data: [], message: string}
 */
const getAvailablePrizesUC = async (): Promise<Result> => {
  try {
    const availablePrizes = await deGetAllAvailablePrizes();

    if (availablePrizes.length === 0) {
      return {
        status: SUCCESS,
        data: [],
        message: 'No Prizes Available. More Coming Soon!',
      };
    }

    return {status: SUCCESS, data: availablePrizes, message: ''};
  } catch (e: any) {
    return _getErrorResponse(e);
  }
};

/**
 * Get's the correct error message to return to the UI.
 * Prints dev logs if in DEV mode.
 * @param error The error
 * @returns {status: ERROR, data: [], message: string}
 */
const _getErrorResponse = (error: any): Result => {
  if (__DEV__) {
    printDevLogs(
      'domain/available-prizes-screen-uc/getAvailablePrizesUC.js',
      'getAvailablePrizesUC',
      `${error}`,
    );
  }

  return {status: ERROR, data: [], message: 'failed to fetch prizes'};
};

export default getAvailablePrizesUC;
