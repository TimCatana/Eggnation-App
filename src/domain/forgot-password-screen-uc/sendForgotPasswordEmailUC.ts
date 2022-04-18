import doSendForgotPasswordEmail from '../../backend/auth/doSendForgotPasswordEmail';
import {SUCCESS, ERROR} from '../../constants/ResultsConstants';
import {Result} from '../../types/typeAliases';
import printDevLogs from '../printDevLogs';

/**
 * Sends a password reset email to the given email address.
 * @param email The users email address.
 * @error auth/network-request-failed Thrown if the email address is not valid.
 * @error SHOULD NEVER BE THROWN auth/invalid-email Thrown if the email address is not valid.
 * @error auth/user-not-found There is no user corresponding to the email address.
 * @error NOT CHECKED auth/missing-android-pkg-name An Android package name must be provided if the Android app is required to be installed.
 * @error NOT CHECKED auth/missing-continue-uri A continue URL must be provided in the request.
 * @error NOT CHECKED auth/missing-ios-bundle-id An iOS Bundle ID must be provided if an App Store ID is provided.
 * @error NOT CHECKED auth/invalid-continue-uri The continue URL provided in the request is invalid.
 * @error NOT CHECKED auth/unauthorized-continue-uri The domain of the continue URL is not whitelisted. Whitelist the domain in the Firebase console.
 * @note all other errors are unexpected
 * @onSuccessReturn {status: SUCCESS, message: string}
 * @onErrorReturn {status: ERROR, message: string}
 */
const sendForgotPasswordEmailUC = async (email: string): Promise<Result> => {
  try {
    await doSendForgotPasswordEmail(email);
    return {
      status: SUCCESS,
      data: null,
      message:
        "Email sent successfully! If you can't find it, check your spam folder",
    };
  } catch (e: any) {
    return _getErrorResponse(e);
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
      'domain/forgot-password-screen-uc/sendForgotPasswordEmailUC.js',
      'sendForgotPasswordEmailUC',
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
      return {status: ERROR, data: null, message: 'Invalid email address!'};
    case 'auth/user-not-found':
      return {
        status: ERROR,
        data: null,
        message: 'Email not found! Did you register an account yet?',
      };
    default:
      return {
        status: ERROR,
        data: null,
        message: 'An unexpected error occurred!',
      };
  }
};

export default sendForgotPasswordEmailUC;
