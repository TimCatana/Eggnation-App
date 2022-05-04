import {SUCCESS, ERROR} from '../../constants/ResultsConstants';
import {Result} from '../../constants/typeAliases';
import {KC_LOCAL_COUNT} from '../../constants/Constants';
import printDevLogs from '../printDevLogs';
import doGetAsyncValue from '../../backend/async-storage/doGetAsyncValue';
import doSetAsyncValue from '../../backend/async-storage/doSetAsyncValue';

/**
 * Attempts to decrement the local counter by 1.
 * @onSuccessReturn {status: STATUS, message: string}
 * @onErrorReturn {status: STATUS, message: string}
 */
const decrementLocalCountUC = async (): Promise<Result> => {
  try {
    const count = await doGetAsyncValue(KC_LOCAL_COUNT);

    if (count === null) {
      return {status: ERROR, message: ''};
    }

    await doSetAsyncValue(KC_LOCAL_COUNT, `${parseInt(count) - 1}`);

    return {status: SUCCESS, message: ''};
  } catch (e: any) {
    return _getErrorResponse(e);
  }
};

/**
 * Get's the correct error message to return to the UI.
 * Prints dev logs if in DEV mode.
 * @param error The error
 * @returns {status: ERROR, message: string}
 */
const _getErrorResponse = (error: any): Result => {
  if (__DEV__) {
    printDevLogs(
      'domain/home-screen-uc/decrementLocalCountUC.ts',
      'decrementLocalCountUC',
      `${error}`,
    );
  }

  return {status: ERROR, message: ''};
};

export default decrementLocalCountUC;
