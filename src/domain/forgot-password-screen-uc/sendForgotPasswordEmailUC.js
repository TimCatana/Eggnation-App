import doSendForgotPasswordEmail from '../../backend/auth/doSendForgotPasswordEmail';
import {ERROR, SUCCESS} from '../../frontend/util/ResultsConstants';

/**
 * @param email The users email address.
 * @error auth/user-not-found Thrown if there is no user corresponding to the email address.
 * @error SHOULD NEVER BE THROWN auth/invalid-email Thrown if the email address is not valid.
 * @error NOT CHECKED auth/missing-android-pkg-name An Android package name must be provided if the Android app is required to be installed.
 * @error NOT CHECKED auth/missing-continue-uri A continue URL must be provided in the request.
 * @error NOT CHECKED auth/missing-ios-bundle-id An iOS Bundle ID must be provided if an App Store ID is provided.
 * @error NOT CHECKED auth/invalid-continue-uri The continue URL provided in the request is invalid.
 * @error NOT CHECKED auth/unauthorized-continue-uri The domain of the continue URL is not whitelisted. Whitelist the domain in the Firebase console.
 * @onSuccessReturn {status: SUCCESS, message: string}
 * @onErrorReturn {status: ERROR, message: string}
 */
const sendForgotPasswordEmailUC = async email => {
  try {
    await doSendForgotPasswordEmail(email);
    return {status: SUCCESS, message: ''};
  } catch (e) {
    return getErrorResponse(e);
  }
};

const getErrorResponse = error => {
  if (error.code === 'auth/user-not-found') {
    return {status: ERROR, message: 'email not found! did you register an account yet?'};
  } else if (error.code === 'auth/invalid-email') {
    return {status: ERROR, message: 'invalid email!'};
  } else {
    return {status: ERROR, message: 'an unexpected error occurred!'};
  }
};

export default sendForgotPasswordEmailUC;
