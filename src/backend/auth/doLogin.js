import auth from '@react-native-firebase/auth';

/**
 * Attempts to login the user using an email and a password.
 * If the account does not exist, the user is notified about invalid credentials.
 * If the account exists, user token becomes not null, and the game stack is shown.
 * @param email (string) The email login credential
 * @param password (string) The password login credential
 */
const doLogin = async (email, password) => {
  await auth().signInWithEmailAndPassword(email, password);
};

export default doLogin;
