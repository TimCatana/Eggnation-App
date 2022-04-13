import doLogin from '../../backend/auth/doLogin';
import {SUCCESS, ERROR} from '../../frontend/util/ResultsConstants';
import printDevLogs from '../printDevLogs';

/**
 * Attempts to login the user given an email and a password.
 * @param email The users email address.
 * @param password The users password.
 * @error auth/network-request-failed Thrown if the email address is not valid.
 * @error SHOULD NEVER BE THROWN auth/invalid-email Thrown if the email address is not valid.
 * @error auth/wrong-password Thrown if the password is invalid for the given email, or the account corresponding to the email does not have a password set.
 * @error auth/user-not-found Thrown if there is no user corresponding to the given email.
 * @error auth/user-disabled Thrown if the user corresponding to the given email has been disabled.
 * @note all other errors are unexpected
 * @onSuccessReturn {status: SUCCESS, message: string}
 * @onErrorReturn {status: ERROR, message: string}
 * */
const loginUserUC = async (email, password) => {
  try {
    await doLogin(email, password);
    return {status: SUCCESS, message: ''};
  } catch (e) {
    console.log('error');
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
    case 'auth/wrong-password':
      return {status: ERROR, message: 'Invalid credentials!'};
    case 'auth/user-not-found':
      return {status: ERROR, message: 'Invalid credentials!'};
    case 'auth/user-disabled':
      return {status: ERROR, message: "Account disabled. Can't login"};
    default:
      return {status: ERROR, message: 'An unexpected error occurred!'};
  }
};

export default loginUserUC;
