import doRegister from '../../backend/auth/doRegister';
import {ERROR, SUCCESS} from '../../frontend/util/ResultsConstants';
import printDevLogs from '../printDevLogs';

/**
 * Attempts to register a new user account given an email and a password.
 * @param email The users email address.
 * @param password The users password.
 * @error auth/email-already-in-use Thrown if there already exists an account with the given email address.
 * @error SHOULD NEVER BE THROWN auth/invalid-email Thrown if the email address is not valid.
 * @error SHOULD NEVER BE THROWN auth/weak-password Thrown if the password is not strong enough.
 * @error NOT CHECKED auth/operation-not-allowed Thrown if email/password accounts are not enabled. Enable email/password accounts in the Firebase Console, under the Auth tab.
 * @note all other errors are unexpected
 * @onSuccessReturn {status: SUCCESS, message: string}
 * @onErrorReturn {status: ERROR, message: string}
 */
const registerUserUC = async (email, password) => {
  try {
    await doRegister(email, password);
    // Cloud Function automatically adds user to database
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
      'domain/login-screen-uc/loginUserUC.js',
      'loginUserUC',
      `${error}`,
    );
  }

  switch (error.code) {
    case 'auth/network-request-failed':
      return {status: ERROR, message: "You're not connected to the internet!"};
    case 'auth/invalid-email':
      return {status: ERROR, message: 'Invalid credentials!'};
    case 'auth/weak-password':
      return {status: ERROR, message: 'Invalid password!'};
    case 'auth/email-already-in-use':
      return {status: ERROR, message: 'Email already in use!'};
    default:
      return {status: ERROR, message: 'An unexpected error occurred!'};
  }
};

export default registerUserUC;
