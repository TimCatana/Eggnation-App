import doDeleteUser from '../../backend/auth/doDeleteUser';
import {ERROR, SUCCESS} from '../../frontend/util/ResultsConstants';

/**
 * TODO - add documentation
 * @returns 
 */
const deleteUserUC = () => {
  try {
    doDeleteUser();
    // Cloud Function automatically deletes user from database
    return {status: SUCCESS, message: ''};
  } catch (e) {
    return getErrorResponse(e);
  }
};

/**
 * @error auth/requires-recent-login Thrown if the user's last sign-in time does not meet the security threshold. Use `auth.User#reauthenticateWithCredential` to resolve. This does not apply if the user is anonymous.
 */
const getErrorResponse = error => {
  if (error.code === ' auth/requires-recent-login') {
    return {status: ERROR, message: 'email already in use!'};
  } else {
    return {status: ERROR, message: 'an unexpected error occurred!'};
  }
};

export default deleteUserUC;
