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
 * TODO - add documentation
 * @returns
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
    return {status: ERROR, message: ''};
  }
};

export default checkIfTimeToResetCountUC;
