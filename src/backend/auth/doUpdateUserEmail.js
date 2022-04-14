import auth from '@react-native-firebase/auth';

// TODO - this should be done on the server to prevent sending them emails saying that their email has been changed
/**
 * Set's a new email address for the user's account.
 * @param newEmail (string) The new email that should be set for the user's account
 */
const doUpdateUserEmail = async newEmail => {
  await auth().currentUser.updateEmail(newEmail);
};

export default doUpdateUserEmail;
