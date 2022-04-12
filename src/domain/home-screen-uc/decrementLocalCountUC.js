import doGetAsyncValue from '../../backend/async-storage/doGetAsyncValue';
import doSetAsyncValue from '../../backend/async-storage/doSetAsyncValue';
import {ERROR, SUCCESS} from '../../frontend/util/ResultsConstants';
import { KC_LOCAL_COUNT } from '../../frontend/util/Constants';

/**
 * TODO - add documentation
 * @returns 
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
    return {status: ERROR, message: ''};
  }
};

// const _getErrorResponse = error => {
//   if (error.code === ' auth/user-mismatch') {
//     return {status: ERROR, message: 'invalid credentials!'};
//   } else if (error.code === 'auth/user-not-found') {
//     return {status: ERROR, message: 'invalid credentials!'};
//   } else {
//     return {status: ERROR, message: 'an unexpected error occurred!'};
//   }
// };

export default decrementLocalCountUC;
