import doGetAsyncValue from '../../backend/async-storage/doGetAsyncValue';
import doSetAsyncValue from '../../backend/async-storage/doSetAsyncValue';
import {ERROR, SUCCESS} from '../../frontend/util/ResultsConstants';
import {KC_LOCAL_COUNT} from '../../frontend/util/Constants';
import printDevLogs from '../printDevLogs';

/**
 * Attempts to decrement the local counter by 1.
 * @onSuccessReturn {status: STATUS, message: string}
 * @onErrorReturn {status: STATUS, message: string}
 */
const decrementLocalCountUC = async () => {
  try {
    const count = await doGetAsyncValue(KC_LOCAL_COUNT);

    if (count === null) {
      return {status: ERROR, message: ''};
    }

    await doSetAsyncValue(KC_LOCAL_COUNT, `${count - 1}`);

    return {status: SUCCESS, message: ''};
  } catch (e) {
    return _getErrorResponse(e);
  }
};

/**
 * Get's the correct error message to return to the UI.
 * Prints dev logs if in DEV mode.
 * @param error The error
 * @returns {status: ERROR, message: string}
 */
const _getErrorResponse = error => {
  if (__DEV__) {
    printDevLogs(
      'domain/home-screen-uc/decrementLocalCountUC.js',
      'decrementLocalCountUC',
      `${error}`,
    );
  }

  return {status: ERROR, message: ''};
};

export default decrementLocalCountUC;
