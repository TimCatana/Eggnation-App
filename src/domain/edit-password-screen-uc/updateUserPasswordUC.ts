import {SUCCESS, ERROR} from '../../constants/ResultsConstants';
import {Result} from '../../constants/typeAliases';
import {
  S_E_EPS_WEAK_PASSWORD,
  S_E_INVALID_CREDENTIALS,
  S_E_INVALID_EMAIL,
  S_E_INVALID_PASSWORD,
  S_E_NOT_CONNECTED_TO_INTERNET,
  S_E_UNEXPECTED_ERROR,
  S_S_EPS_PASSWORD_UPDATED,
} from '../../constants/Strings';
import printDevLogs from '../printDevLogs';
import doGetUserEmail from '../../backend/auth/deGetUserEmail';
import doReauthenticate from '../../backend/auth/doReauthenticate';
import doUpdateUserPassword from '../../backend/auth/doUpdateUserPassword';

/**
 * Attempts to update the user's login password.
 * The user must re-authenticate themselves by entering their current password first
 * as a security measure.
 * @param newPassword (string) The new login password the user wants to use
 * @param password (string) The current login password used to reauthenticate the user
 * @REAUTHENTICATION Below are errors thrown by the re-authentication function
 * @error auth/user-mismatch Thrown if the credential given does not correspond to the user.
 * @error auth/user-not-found Thrown if the credential given does not correspond to any existing user.
 * @error auth/invalid-credential Thrown if the provider's credential is not valid. This can happen if it has already expired when calling link, or if it used invalid token(s). See the Firebase documentation for your provider, and make sure you pass in the correct parameters to the credential method.
 * @error auth/invalid-email Thrown if the email used in a auth.EmailAuthProvider.credential is invalid.
 * @error auth/wrong-password Thrown if the password used in a auth.EmailAuthProvider.credential is not correct or when the user associated with the email does not have a password.
 * @error auth/invalid-verification-code Thrown if the credential is a auth.PhoneAuthProvider.credential and the verification code of the credential is not valid.
 * @error auth/invalid-verification-id Thrown if the credential is a auth.PhoneAuthProvider.credential and the verification ID of the credential is not valid.
 * @UPDATEPASSWORD Below are errors thrown by the update password function
 * @error auth/weak-password SHOULD NEVER BE THROWN Thrown if the password is not strong enough.
 * @error auth/requires-recent-login NOT CHECKED Thrown if the user's last sign-in time does not meet the security threshold.
 * @note all other errors are unexpected
 * @onSuccessReturn {status: SUCCESS, message: string}
 * @onErrorReturn {status: ERROR, message: string}
 */
const updateUserPasswordUC = async (
  newPassword: string,
  password: string,
): Promise<Result> => {
  const email = doGetUserEmail();

  if (!email) {
    return {status: ERROR, message: S_E_UNEXPECTED_ERROR};
  }

  try {
    await doReauthenticate(email, password);
  } catch (e: any) {
    return _getReauthenticateErrorResponse(e);
  }

  try {
    await doUpdateUserPassword(newPassword);
  } catch (e: any) {
    return _getUpdatePasswordErrorResponse(e);
  }

  try {
    await doReauthenticate(email, newPassword);
  } catch (e: any) {
    return {status: SUCCESS, message: S_S_EPS_PASSWORD_UPDATED};
  }

  return {status: SUCCESS, message: S_S_EPS_PASSWORD_UPDATED};
};

/**
 * Get's the correct error message to return to the UI.
 * Prints dev logs if in DEV mode.
 * @param error The error
 * @returns {status: ERROR, message: string}
 */
const _getReauthenticateErrorResponse = (error: any): Result => {
  if (__DEV__) {
    printDevLogs(
      'domain/edit-password-screen-uc/updateUserPasswordUC.ts',
      'updateUserPasswordUC/doReauthenticate',
      `${error}`,
    );
  }

  switch (error.code) {
    case 'auth/network-request-failed':
      return {status: ERROR, message: S_E_NOT_CONNECTED_TO_INTERNET};
    case 'auth/user-mismatch':
      return {status: ERROR, message: S_E_INVALID_CREDENTIALS};
    case 'auth/user-not-found':
      return {status: ERROR, message: S_E_INVALID_CREDENTIALS};
    case 'auth/invalid-credential':
      return {status: ERROR, message: S_E_INVALID_CREDENTIALS};
    case 'auth/invalid-email':
      return {status: ERROR, message: S_E_INVALID_EMAIL};
    case 'auth/wrong-password':
      return {status: ERROR, message: S_E_INVALID_PASSWORD};
    default:
      return {status: ERROR, message: S_E_UNEXPECTED_ERROR};
  }
};

/**
 * Get's the correct error message to return to the UI.
 * Prints dev logs if in DEV mode.
 * @param error The error
 * @returns {status: ERROR, message: string}
 */
const _getUpdatePasswordErrorResponse = (error: any): Result => {
  if (__DEV__) {
    printDevLogs(
      'domain/edit-password-screen-uc/updateUserPasswordUC.ts',
      'updateUserPasswordUC/doUpdateUserPassword',
      `${error}`,
    );
  }

  switch (error.code) {
    case 'auth/network-request-failed':
      return {status: ERROR, message: S_E_NOT_CONNECTED_TO_INTERNET};
    case 'auth/weak-password':
      return {status: ERROR, message: S_E_EPS_WEAK_PASSWORD};
    default:
      return {status: ERROR, message: S_E_UNEXPECTED_ERROR};
  }
};

export default updateUserPasswordUC;
