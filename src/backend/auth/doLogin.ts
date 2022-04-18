import auth from '@react-native-firebase/auth';

/**
 * Attempts to login the user using an email and a password.
 * If the account does not exist, the user is notified about invalid credentials.
 * If the account exists, user token becomes not null, and the game stack is shown.
 * @param email (string) The email login credential
 * @param password (string) The password login credential
 * @throws {auth/invalid-email} Thrown if the email address is not valid.
 * @throws {auth/user-disabled} Thrown if the user corresponding to the given email has been disabled.
 * @throws {auth/user-not-found} Thrown if there is no user corresponding to the given email.
 * @throws {auth/wrong-password} Thrown if the password is invalid for the given email, or the account corresponding to the email does not have a password set.
 */
const doLogin = async (email: string, password: string) => {
  await auth().signInWithEmailAndPassword(email, password);
};

export default doLogin;
