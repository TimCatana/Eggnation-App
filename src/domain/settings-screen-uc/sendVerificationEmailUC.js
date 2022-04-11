import doSendVerificationEmail from '../../backend/auth/doSendVerificationEmail';
import {SUCCESS, ERROR} from '../../frontend/util/ResultsConstants';

const sendVerificationEmailUC = async () => {
  try {
    await doSendVerificationEmail();
    return {status: SUCCESS, message: ''};
  } catch (e) {
    return getErrorResponse(e);
  }
};

/**
 * @error auth/missing-android-pkg-name An Android package name must be provided if the Android app is required to be installed.
 * @error auth/missing-continue-uri A continue URL must be provided in the request.
 * @error auth/missing-ios-bundle-id An iOS bundle ID must be provided if an App Store ID is provided.
 * @error auth/invalid-continue-uri The continue URL provided in the request is invalid.
 * @error auth/unauthorized-continue-uri The domain of the continue URL is not whitelisted. Whitelist the domain in the Firebase console.
 */
const getErrorResponse = error => {
  if (error.code === 'auth/missing-android-pkg-name') {
    return {status: ERROR, message: 'an unexpected error occurred!'};
  } else if (error.code === 'auth/missing-continue-uri') {
    return {status: ERROR, message: 'an unexpected error occurred!'};
  } else if (error.code === 'auth/missing-ios-bundle-id') {
    return {status: ERROR, message: 'an unexpected error occurred!'};
  } else if (error.code === 'auth/invalid-continue-uri') {
    return {status: ERROR, message: 'an unexpected error occurred!'};
  } else if (error.code === 'auth/unauthorized-continue-uri') {
    return {status: ERROR, message: 'an unexpected error occurred!'};
  } else {
    return {status: ERROR, message: 'an unexpected error occurred!'};
  }
};

export default sendVerificationEmailUC;
