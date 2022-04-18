import auth from '@react-native-firebase/auth';

/**
 * Attempts to register a user account given an email and a password.
 * @param email (string) The email the user wants to register an account with
 * @param password (string) The password the user wants to register an account with
 * @throws {auth/email-already-in-use} Thrown if there already exists an account with the given email address.
 * @throws {auth/invalid-email} Thrown if the email address is not valid.
 * @throws {auth/operation-not-allowed} Thrown if email/password accounts are not enabled. Enable email/password accounts in the Firebase Console, under the Auth tab.
 * @throws {auth/weak-password} Thrown if the password is not strong enough.
 */
const doRegister = async (email: string, password: string) => {
  await auth().createUserWithEmailAndPassword(email, password);
};

export default doRegister;
