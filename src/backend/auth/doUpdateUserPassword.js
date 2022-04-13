import auth from '@react-native-firebase/auth';

/**
 * Updates the user's account login password.
 * @param newPassword (string) The new password that should be set for the user's account
 * @throws {auth/weak-password} Thrown if the password is not strong enough.
 * @throws {auth/requires-recent-login} Thrown if the user's last sign-in time does not meet the security threshold.
 */
const doUpdateUserPassword = async newPassword => {
  await auth().currentUser.updatePassword(newPassword);
};

export default doUpdateUserPassword;
