import doGetAsyncValue from '../../backend/async-storage/doGetAsyncValue';
import doSetAsyncValue from '../../backend/async-storage/doSetAsyncValue';
import {ERROR, SUCCESS} from '../../frontend/util/ResultsConstants';
import {KC_LOCAL_COUNT, DV_LOCAL_COUNT} from '../../frontend/util/Constants';

/**
 * TODO - add documentation
 * @returns
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
    return {status: ERROR, data: parseInt(DV_LOCAL_COUNT), message: ''};
  }
};

export default getLocalCountUC;
