import doSendVerificationEmail from '../../backend/auth/doSendVerificationEmail';
import {SUCCESS, ERROR} from '../../constants/ResultsConstants';
import {Result} from '../../types/typeAliases';
import printDevLogs from '../printDevLogs';

/**
 * Attempts to send a verification email to the user.
 * The user must be logged in in order for this to work.
 * @error auth/missing-android-pkg-name NOT CHECKED An Android package name must be provided if the Android app is required to be installed.
 * @error auth/missing-continue-uri NOT CHECKED A continue URL must be provided in the request.
 * @error auth/missing-ios-bundle-id NOT CHECKED An iOS bundle ID must be provided if an App Store ID is provided.
 * @error auth/invalid-continue-uri NOT CHECKED The continue URL provided in the request is invalid.
 * @error auth/unauthorized-continue-uri NOT CHECKED The domain of the continue URL is not whitelisted. Whitelist the domain in the Firebase console.
 * @note all other errors are unexpected
 * @onSuccessReturn {status: SUCCESS, data: null, message: string}
 * @onErrorReturn {status: ERROR, data: null, message: string}
 */
const sendVerificationEmailUC = async (): Promise<Result> => {
  try {
    await doSendVerificationEmail();
    return {
      status: SUCCESS,
      data: null,
      message:
        "Email sent successfully! If you can't find it, check your spam folder.",
    };
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
      'domain/settings-screen-uc/sendVerificationEmailUC.js',
      'sendVerificationEmailUC',
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
    default:
      return {
        status: ERROR,
        data: null,
        message: 'An unexpected error occurred!',
      };
  }
};

export default sendVerificationEmailUC;
