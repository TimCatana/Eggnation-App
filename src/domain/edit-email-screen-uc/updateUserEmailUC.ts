import doUpdateUserEmail from '../../backend/auth/doUpdateUserEmail';
import doGetUserEmail from '../../backend/auth/deGetUserEmail';
import doReauthenticate from '../../backend/auth/doReauthenticate';
import { SUCCESS, ERROR } from '../../constants/ResultsConstants';
import printDevLogs from '../printDevLogs';
import {Result} from '../../types/typeAliases';

/**
 * Attempts to update the user's login email.
 * The user must re-authenticate themselves by entering their current password first
 * as a security measure.
 * @param newEmail The new login email the user wants to use
 * @param password The current login password used to reauthenticate the user
 * @REAUTHENTICATION Below are errors thrown by the re-authentication function
 * @error auth/user-mismatch Thrown if the credential given does not correspond to the user.
 * @error auth/user-not-found Thrown if the credential given does not correspond to any existing user.
 * @error auth/invalid-credential Thrown if the provider's credential is not valid. This can happen if it has already expired when calling link, or if it used invalid token(s). See the Firebase documentation for your provider, and make sure you pass in the correct parameters to the credential method.
 * @error auth/invalid-email Thrown if the email used in a auth.EmailAuthProvider.credential is invalid.
 * @error auth/wrong-password Thrown if the password used in a auth.EmailAuthProvider.credential is not correct or when the user associated with the email does not have a password.
 * @error auth/invalid-verification-code Thrown if the credential is a auth.PhoneAuthProvider.credential and the verification code of the credential is not valid.
 * @error auth/invalid-verification-id Thrown if the credential is a auth.PhoneAuthProvider.credential and the verification ID of the credential is not valid.
 * @UPDATEEMAIL Below are errors thrown by the update password function
 * @error auth/weak-password SHOULD NEVER BE THROWN Thrown if the password is not strong enough.
 * @error auth/requires-recent-login NOT CHECKEDThrown if the user's last sign-in time does not meet the security threshold.
 * @note all other errors are unexpected
 * @onSuccessReturn {status: SUCCESS, message: string}
 * @onErrorReturn {status: ERROR, message: string}
 */
const updateUserEmailUC = async (
  newEmail: string,
  password: string,
): Promise<Result> => {
  const email = doGetUserEmail();

  if (!email) {
    return {status: ERROR, data: null, message: 'An unexpected error occurred'};
  }

  try {
    await doReauthenticate(email, password);
  } catch (e: any) {
    return _getReauthenticateErrorResponse(e);
  }

  try {
    await doUpdateUserEmail(newEmail);
  } catch (e: any) {
    return _getUpdateEmailErrorResponse(e);
  }

  return {status: SUCCESS, data: null, message: 'Email updated successfully!'};
};

/**
 * Get's the correct error message to return to the UI.
 * Prints dev logs if in DEV mode.
 * @param error The error
 * @returns {status: ERROR, data: null message: string}
 */
const _getReauthenticateErrorResponse = (error: any): Result => {
  if (__DEV__) {
    printDevLogs(
      'domain/edit-email-screen-uc/updateUserEmailUC.js',
      'updateUserEmailUC/doReauthenticate',
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
    case 'auth/user-mismatch':
      return {status: ERROR, data: null, message: 'Invalid credentials!'};
    case 'auth/user-not-found':
      return {status: ERROR, data: null, message: 'Invalid credentials!'};
    case 'auth/invalid-credential':
      return {status: ERROR, data: null, message: 'Invalid credentials!'};
    case 'auth/invalid-email':
      return {status: ERROR, data: null, message: 'Email address is invalid!'};
    case 'auth/wrong-password':
      return {status: ERROR, data: null, message: 'Invalid password!'};
    default:
      return {
        status: ERROR,
        data: null,
        message: 'An unexpected error occurred!',
      };
  }
};

/**
 * Get's the correct error message to return to the UI.
 * Prints dev logs if in DEV mode.
 * @param error The error
 * @returns {status: ERROR, data: null message: string}
 */
const _getUpdateEmailErrorResponse = (error: any): Result => {
  if (__DEV__) {
    printDevLogs(
      'domain/edit-email-screen-uc/updateUserEmailUC.js',
      'updateUserEmailUC/doUpdateUserEmail',
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
      return {status: ERROR, data: null, message: 'Email address is invalid!'};
    case 'auth/email-already-in-use':
      return {
        status: ERROR,
        data: null,
        message: 'Email address already in use!',
      };
    default:
      return {
        status: ERROR,
        data: null,
        message: 'An unexpected error occurred!',
      };
  }
};

export default updateUserEmailUC;
