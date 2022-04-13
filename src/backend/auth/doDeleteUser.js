import auth from '@react-native-firebase/auth';

/**
 * Deletes the user's account.
 * @throws {auth/requires-recent-login} Thrown if the user's last sign-in time does not meet the security threshold.
 */
const doDeleteUser = async () => {
  await auth().currentUser.delete();
};

export default doDeleteUser;
