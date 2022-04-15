import doGetAsyncValue from '../../backend/async-storage/doGetAsyncValue';
import doSetAsyncValue from '../../backend/async-storage/doSetAsyncValue';
import dayjs from 'dayjs';
import {ERROR, SUCCESS} from '../../frontend/util/ResultsConstants';
import {
  KC_LOCAL_COUNT,
  KC_LAST_RESET_TIME,
  DV_LOCAL_COUNT,
  DV_LAST_RESET_TIME,
  MGL_RESET_TIME_IN_HOURS,
} from '../../frontend/util/Constants';

/**
 * Checks to see if it's time to reset the local count.
 * Reset's the local count if enough time passed since last reset.
 * Does not reset the local count if not enough time passed since last reset.
 * @onSuccessReturn {status: STATUS, message: string}
 * @onErrorReturn {status: STATUS, message: string}
 */
const checkIfTimeToResetCountUC = async () => {
  try {
    const storedTime = await doGetAsyncValue(KC_LAST_RESET_TIME);

    if (!storedTime) {
      await doSetAsyncValue(KC_LAST_RESET_TIME, DV_LAST_RESET_TIME);
      return {status: SUCCESS, message: ''};
    }

    const currentTime = dayjs();
    const timeDifference = currentTime.diff(dayjs(storedTime), 'hours'); // stored time is returned as a string from async storage. It is converted to a dayjs string using dayjs(storedTime)

    if (timeDifference >= MGL_RESET_TIME_IN_HOURS) {
      await doSetAsyncValue(KC_LOCAL_COUNT, DV_LOCAL_COUNT);
      await doSetAsyncValue(KC_LAST_RESET_TIME, DV_LAST_RESET_TIME);
    }

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
      'domain/home-screen-uc/checkIfTimeToResetCountUC.js',
      'checkIfTimeToResetCountUC',
      `${error}`,
    );
  }

  return {status: ERROR, message: ''};
};

export default checkIfTimeToResetCountUC;
