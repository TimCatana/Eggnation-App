import auth from '@react-native-firebase/auth';

/**
 * Logs the user out of their account.
 */
const doLogout = async () => {
  await auth().signOut();
};

export default doLogout;
