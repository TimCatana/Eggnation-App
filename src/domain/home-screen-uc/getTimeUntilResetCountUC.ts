import dayjs from 'dayjs';
import {SUCCESS, ERROR} from '../../constants/ResultsConstants';
import {Result} from '../../constants/typeAliases';
import {
  KC_LAST_RESET_TIME,
  DV_LAST_RESET_TIME,
} from '../../constants/Constants';
import printDevLogs from '../printDevLogs';
import doGetAsyncValue from '../../backend/async-storage/doGetAsyncValue';
import doSetAsyncValue from '../../backend/async-storage/doSetAsyncValue';

/**
 * Checks to see if it's time to reset the local count.
 * Reset's the local count if enough time passed since last reset.
 * Does not reset the local count if not enough time passed since last reset.
 * @onSuccessReturn {status: STATUS, message: string}
 * @onErrorReturn {status: STATUS, message: string}
 */
const getTimeUntilResetCountUC = async (): Promise<Result> => {
  try {
    const storedTime = await doGetAsyncValue(KC_LAST_RESET_TIME);

    if (!storedTime) {
      await doSetAsyncValue(KC_LAST_RESET_TIME, DV_LAST_RESET_TIME);
      return {status: SUCCESS, message: ''};
    }

    const currentTime = dayjs();
    const timeDifference = currentTime.diff(dayjs(storedTime), 'hours'); // stored time is returned as a string from async storage. It is converted to a dayjs string using dayjs(storedTime)

    return {status: SUCCESS, data: timeDifference, message: ''};
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
      'domain/home-screen-uc/checkIfTimeToResetCountUC.ts',
      'checkIfTimeToResetCountUC',
      `${error}`,
    );
  }

  return {status: ERROR, message: ''};
};

export default getTimeUntilResetCountUC;
