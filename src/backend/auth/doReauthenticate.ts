import auth from '@react-native-firebase/auth';

/**
 * Attempts to reauthenticate the user given their email and a password.
 * @param email (string) The email login credential
 * @param password (string) The password login credential
 * @throws {eggnation/user-is-null} SHOULD NEVER BE THROWN Thrown if user is null
 * @throws {auth/user-mismatch} Thrown if the credential given does not correspond to the user.
 * @throws {auth/user-not-found }Thrown if the credential given does not correspond to any existing user.
 * @throws {auth/invalid-credential} Thrown if the provider's credential is not valid. This can happen if it has already expired when calling link, or if it used invalid token(s). See the Firebase documentation for your provider, and make sure you pass in the correct parameters to the credential method.
 * @throws {auth/invalid-email} Thrown if the email used in a auth.EmailAuthProvider.credential is invalid.
 * @throws {auth/wrong-password} Thrown if the password used in a auth.EmailAuthProvider.credential is not correct or when the user associated with the email does not have a password.
 * @throws {auth/invalid-verification-code} Thrown if the credential is a auth.PhoneAuthProvider.credential and the verification code of the credential is not valid.
 * @throws {auth/invalid-verification-id} Thrown if the credential is a auth.PhoneAuthProvider.credential and the verification ID of the credential is not valid.
 */
const doReauthenticate = async (email: string, password: string) => {
  const user = auth().currentUser;

  if (user === null) {
    throw new Error('eggnation/user-is-null');
  }

  const authCredential = auth.EmailAuthProvider.credential(email, password);
  await user.reauthenticateWithCredential(authCredential);
};

export default doReauthenticate;
