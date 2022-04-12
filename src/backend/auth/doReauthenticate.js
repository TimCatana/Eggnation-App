import auth from '@react-native-firebase/auth';

/**
 * Attempts to reauthenticate the user given their email and a password.
 * If the credentials are valid good.
 * If the credentials are invalid, an error is thrown and handled in the use case.
 * @param email (string) The email login credential
 * @param password (string) The password login credential
 */
const doReauthenticate = async (email, password) => {
  const authCredential = auth.EmailAuthProvider.credential(email, password);
  await auth().currentUser.reauthenticateWithCredential(authCredential);
};

export default doReauthenticate;
