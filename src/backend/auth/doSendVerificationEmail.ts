import auth from '@react-native-firebase/auth';

/**
 * Sends a verification email to the currently logged in user's email.
 * @throws {eggnation/user-is-null} SHOULD NEVER BE THROWN Thrown if user is null
 * @throws {auth/missing-android-pkg-name} An Android package name must be provided if the Android app is required to be installed.
 * @throws {auth/missing-continue-uri} A continue URL must be provided in the request.
 * @throws {auth/missing-ios-bundle-id} An iOS bundle ID must be provided if an App Store ID is provided.
 * @throws {auth/invalid-continue-uri} The continue URL provided in the request is invalid.
 * @throws {auth/unauthorized-continue-uri} The domain of the continue URL is not whitelisted. Whitelist the domain in the Firebase console.
 */
const doSendVerificationEmail = async () => {
  const user = auth().currentUser;

  if (user === null) {
    throw new Error('eggnation/user-is-null');
  } else {
    await user.sendEmailVerification();
  }
};

export default doSendVerificationEmail;
