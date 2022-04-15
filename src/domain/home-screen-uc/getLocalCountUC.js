import doGetAsyncValue from '../../backend/async-storage/doGetAsyncValue';
import doSetAsyncValue from '../../backend/async-storage/doSetAsyncValue';
import {ERROR, SUCCESS} from '../../frontend/util/ResultsConstants';
import {KC_LOCAL_COUNT, DV_LOCAL_COUNT} from '../../frontend/util/Constants';

/**
 * Attempts to get the local count from Async Storage.
 * @onSuccessReturn {status: STATUS, data: int, message: string}
 * @onErrorReturn {status: STATUS, data: int, message: string}
 */
const getLocalCountUC = async () => {
  try {
    const count = await doGetAsyncValue(KC_LOCAL_COUNT);

    if (count === null) {
      await doSetAsyncValue(KC_LOCAL_COUNT, DV_LOCAL_COUNT);
      return {status: SUCCESS, data: parseInt(DV_LOCAL_COUNT), message: ''};
    } else {
      return {status: SUCCESS, data: parseInt(count), message: ''};
    }
  } catch (e) {
    return _getErrorResponse(e);
  }
};

/**
 * Get's the correct error message to return to the UI.
 * Prints dev logs if in DEV mode.
 * @param error The error
 * @returns {status: ERROR, data: int, message: string}
 */
const _getErrorResponse = error => {
  if (__DEV__) {
    printDevLogs(
      'domain/home-screen-uc/getLocalCountUC.js',
      'getLocalCountUC',
      `${error}`,
    );
  }

  return {status: ERROR, data: parseInt(DV_LOCAL_COUNT), message: ''};
};

export default getLocalCountUC;
