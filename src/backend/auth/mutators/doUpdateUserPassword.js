import auth from '@react-native-firebase/auth';

/**
 * Set's a new password for the user's account.
 * @param newPassword (string) The new password that should be set for the user's account
 */
const doUpdateUserPassword = async newPassword => {
  await auth().currentUser.updatePassword(newPassword);
};

export default doUpdateUserPassword;
