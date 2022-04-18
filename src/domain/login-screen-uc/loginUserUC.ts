import doLogin from '../../backend/auth/doLogin';
import {SUCCESS, ERROR} from '../../constants/ResultsConstants';
import {Result} from '../../types/typeAliases';
import printDevLogs from '../printDevLogs';

/**
 * Attempts to login the user given an email and a password.
 * @param email (string) The users email address.
 * @param password (string) The users password.
 * @error auth/network-request-failed Thrown if the email address is not valid.
 * @error SHOULD NEVER BE THROWN auth/invalid-email Thrown if the email address is not valid.
 * @error auth/wrong-password Thrown if the password is invalid for the given email, or the account corresponding to the email does not have a password set.
 * @error auth/user-not-found Thrown if there is no user corresponding to the given email.
 * @error auth/user-disabled Thrown if the user corresponding to the given email has been disabled.
 * @note all other errors are unexpected
 * @onSuccessReturn {status: SUCCESS, data: null, message: string}
 * @onErrorReturn {status: ERROR, data: null, message: string}
 * */
const loginUserUC = async (
  email: string,
  password: string,
): Promise<Result> => {
  try {
    await doLogin(email, password);
    return {status: SUCCESS, data: null, message: ''};
  } catch (e: any) {
    return _getErrorResponse(e);
  }
};

/**
 * Get's the correct error message to return to the UI.
 * Prints dev logs if in DEV mode.
 * @param error The error
 * @returns {status: ERROR, data: null, message: string}
 */
const _getErrorResponse = (error: any): Result => {
  if (__DEV__) {
    printDevLogs(
      'domain/login-screen-uc/loginUserUC.js',
      'loginUserUC',
      `${error}`,
    );
  }

  switch (error.code) {
    case 'auth/network-request-failed':
      return {
        status: ERROR,
        data: null,
        message: "You're not connected to the internet!",
      };
    case 'auth/invalid-email':
      return {status: ERROR, data: null, message: 'Invalid credentials!'};
    case 'auth/wrong-password':
      return {status: ERROR, data: null, message: 'Invalid credentials!'};
    case 'auth/user-not-found':
      return {status: ERROR, data: null, message: 'Invalid credentials!'};
    case 'auth/user-disabled':
      return {
        status: ERROR,
        data: null,
        message: "Account disabled. Can't login",
      };
    default:
      return {
        status: ERROR,
        data: null,
        message: 'An unexpected error occurred!',
      };
  }
};

export default loginUserUC;
