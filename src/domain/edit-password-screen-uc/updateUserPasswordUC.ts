import doGetUserEmail from '../../backend/auth/deGetUserEmail';
import doReauthenticate from '../../backend/auth/doReauthenticate';
import doUpdateUserPassword from '../../backend/auth/doUpdateUserPassword';
import { SUCCESS, ERROR } from '../../constants/ResultsConstants';
import {Result} from '../../types/typeAliases';
import printDevLogs from '../printDevLogs';

/**
 * Attempts to update the user's login password.
 * The user must re-authenticate themselves by entering their current password first
 * as a security measure.
 * @param newPassword The new login password the user wants to use
 * @param password The current login password used to reauthenticate the user
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
    return {
      status: ERROR,
      data: null,
      message: 'An unexpected error occurred!',
    };
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

  return {
    status: SUCCESS,
    data: null,
    message: 'Password updated successfully!',
  };
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
      'domain/edit-password-screen-uc/updateUserPasswordUC.js',
      'updateUserPasswordUC/doReauthenticate',
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
 * @returns {status: ERROR, message: string}
 */
const _getUpdatePasswordErrorResponse = (error: any): Result => {
  if (__DEV__) {
    printDevLogs(
      'domain/edit-password-screen-uc/updateUserPasswordUC.js',
      'updateUserPasswordUC/doUpdateUserPassword',
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
    case 'auth/weak-password':
      return {
        status: ERROR,
        data: null,
        message: 'Please enter a stronger password!',
      };
    default:
      return {
        status: ERROR,
        data: null,
        message: 'An unexpected error occurred!',
      };
  }
};

export default updateUserPasswordUC;
