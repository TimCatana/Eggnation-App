import auth from '@react-native-firebase/auth';

/**
 * Sends a forgot password email to a given email address.
 * @param email (string) The email to send the forgot password email to
 * @throws {auth/invalid-email} Thrown if the email address is not valid.
 * @throws {auth/missing-android-pkg-name} An Android package name must be provided if the Android app is required to be installed.
 * @throws {auth/missing-continue-uri} A continue URL must be provided in the request.
 * @throws {auth/missing-ios-bundle-id} An iOS Bundle ID must be provided if an App Store ID is provided.
 * @throws {auth/invalid-continue-uri} The continue URL provided in the request is invalid.
 * @throws {auth/unauthorized-continue-uri} The domain of the continue URL is not whitelisted. Whitelist the domain in the Firebase console.
 * @throws {auth/user-not-found} Thrown if there is no user corresponding to the email address.
 */
const doSendForgotPasswordEmail = async email => {
  await auth().sendPasswordResetEmail(email);
};

export default doSendForgotPasswordEmail;
