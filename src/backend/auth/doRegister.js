import auth from '@react-native-firebase/auth';

/**
 * Registers a user account given an email and a password.
 * @param email (string) The email the user wants to register an account with
 * @param password (string) The password the user wants to register an account with
 */
const doRegister = async (email, password) => {
  await auth().createUserWithEmailAndPassword(email, password);
};

export default doRegister;
