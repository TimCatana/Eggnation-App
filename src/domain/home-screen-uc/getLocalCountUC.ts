import {SUCCESS, ERROR} from '../../constants/ResultsConstants';
import {Result} from '../../constants/typeAliases';
import {KC_LOCAL_COUNT, DV_LOCAL_COUNT} from '../../constants/Constants';
import printDevLogs from '../printDevLogs';
import doGetAsyncValue from '../../backend/async-storage/doGetAsyncValue';
import doSetAsyncValue from '../../backend/async-storage/doSetAsyncValue';

/**
 * Attempts to get the local count from Async Storage.
 * @onSuccessReturn {status: STATUS, data: number, message: string}
 * @onErrorReturn {status: STATUS, data: number, message: string}
 */
const getLocalCountUC = async (): Promise<Result> => {
  try {
    const count = await doGetAsyncValue(KC_LOCAL_COUNT);

    if (count === null) {
      await doSetAsyncValue(KC_LOCAL_COUNT, DV_LOCAL_COUNT);
      return {status: SUCCESS, data: parseInt(DV_LOCAL_COUNT), message: ''};
    } else {
      return {status: SUCCESS, data: parseInt(count), message: ''};
    }
  } catch (e: any) {
    return _getErrorResponse(e);
  }
};

/**
 * Get's the correct error message to return to the UI.
 * Prints dev logs if in DEV mode.
 * @param error The error
 * @returns {status: ERROR, data: number, message: string}
 */
const _getErrorResponse = (error: any): Result => {
  if (__DEV__) {
    printDevLogs(
      'domain/home-screen-uc/getLocalCountUC.ts',
      'getLocalCountUC',
      `${error}`,
    );
  }

  return {status: ERROR, data: parseInt(DV_LOCAL_COUNT), message: ''};
};

export default getLocalCountUC;
