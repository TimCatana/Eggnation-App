import auth from '@react-native-firebase/auth';

/**
 * Deletes the user's account.
 * @throws {eggnation/user-is-null} SHOULD NEVER BE THROWN Thrown if user is null
 * @throws {auth/requires-recent-login} Thrown if the user's last sign-in time does not meet the security threshold.
 */
const doDeleteUser = async () => {
  const user = auth().currentUser;

  if (user === null) {
    throw new Error('eggnation/user-is-null');
  } else {
    await user.delete();
  }
};

export default doDeleteUser;
