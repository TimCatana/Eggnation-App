import {SUCCESS, ERROR} from '../../constants/ResultsConstants';
import {Result} from '../../constants/typeAliases';
import {
  S_E_INVALID_CREDENTIALS,
  S_E_INVALID_PASSWORD,
  S_E_NOT_CONNECTED_TO_INTERNET,
  S_E_RS_EMAIL_IN_USE,
  S_E_UNEXPECTED_ERROR,
} from '../../constants/Strings';
import printDevLogs from '../printDevLogs';
import doRegister from '../../backend/auth/doRegister';
import doSubscribeToMailingList from '../../backend/cloud-functions/doSubscribeToMailingList';

/**
 * Attempts to register a new user account given an email and a password.
 * @param email (string) The users email address.
 * @param password (string) The users password.
 * @param isSubbedToMailingList (boolean) If the user opted to sign up for the mailing list
 * @error auth/email-already-in-use Thrown if there already exists an account with the given email address.
 * @error SHOULD NEVER BE THROWN auth/invalid-email Thrown if the email address is not valid.
 * @error SHOULD NEVER BE THROWN auth/weak-password Thrown if the password is not strong enough.
 * @error NOT CHECKED auth/operation-not-allowed Thrown if email/password accounts are not enabled. Enable email/password accounts in the Firebase Console, under the Auth tab.
 * @note all other errors are unexpected
 * @onSuccessReturn {status: SUCCESS, message: string}
 * @onErrorReturn {status: ERROR, message: string}
 */
const registerUserUC = async (
  email: string,
  password: string,
  isSubbedToMailingList: boolean,
): Promise<Result> => {
  try {
    await doRegister(email, password);
    // Cloud Function automatically adds user to database
    await _addUserToMailingList(isSubbedToMailingList, email);
    return {status: SUCCESS, message: ''};
  } catch (e: any) {
    return _getErrorResponse(e);
  }
};

/**
 * Adds the user to the mailing list if they opted in for it.
 * @param isSubbedToMailingList (boolean) If the user opted to sign up for the mailing list
 * @param email (string) The users email address.
 * @note Errors should be caught here, they should not propagate up since the registration already was successful so I want to return a success
 */
const _addUserToMailingList = async (
  isSubbedToMailingList: boolean,
  email: string,
) => {
  if (isSubbedToMailingList) {
    try {
      await doSubscribeToMailingList(email);
    } catch (e: any) {
      if (__DEV__) {
        console.error(`failed to sub to mailing list --> ${e}`);
      }
    }
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
    case 'auth/weak-password':
      return {status: ERROR, message: S_E_INVALID_PASSWORD};
    case 'auth/email-already-in-use':
      return {status: ERROR, message: S_E_RS_EMAIL_IN_USE};
    default:
      return {status: ERROR, message: S_E_UNEXPECTED_ERROR};
  }
};

export default registerUserUC;
