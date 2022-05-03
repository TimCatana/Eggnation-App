import doLogin from '../../backend/auth/doLogin';
import {SUCCESS, ERROR} from '../../constants/ResultsConstants';
import {
  S_E_INVALID_CREDENTIALS,
  S_E_LS_ACCOUNT_DISABLED,
  S_E_NOT_CONNECTED_TO_INTERNET,
  S_E_UNEXPECTED_ERROR,
} from '../../constants/Strings';
import {Result} from '../../constants/typeAliases';
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
 * @onSuccessReturn {status: SUCCESS, message: string}
 * @onErrorReturn {status: ERROR, message: string}
 * */
const loginUserUC = async (
  email: string,
  password: string,
): Promise<Result> => {
  try {
    await doLogin(email, password);
    return {status: SUCCESS, message: ''};
  } catch (e: any) {
    return _getErrorResponse(e);
  }
};

/**
 * Get's the correct error message to return to the UI.
 * Prints dev logs if in DEV mode.
 * @param error (error) The error
 * @returns {status: ERROR, message: string}
 */
const _getErrorResponse = (error: any): Result => {
  if (__DEV__) {
    printDevLogs(
      'domain/login-screen-uc/loginUserUC.ts',
      'loginUserUC',
      `${error}`,
    );
  }

  switch (error.code) {
    case 'auth/network-request-failed':
      return {status: ERROR, message: S_E_NOT_CONNECTED_TO_INTERNET};
    case 'auth/invalid-email':
      return {status: ERROR, message: S_E_INVALID_CREDENTIALS};
    case 'auth/wrong-password':
      return {status: ERROR, message: S_E_INVALID_CREDENTIALS};
    case 'auth/user-not-found':
      return {status: ERROR, message: S_E_INVALID_CREDENTIALS};
    case 'auth/user-disabled':
      return {status: ERROR, message: S_E_LS_ACCOUNT_DISABLED};
    default:
      return {status: ERROR, message: S_E_UNEXPECTED_ERROR};
  }
};

export default loginUserUC;
