import auth from '@react-native-firebase/auth';

/**
 * Set's a new email address for the user's account.
 * TODO - this should be done on the server to prevent sending them emails saying that their email has been changed
 * @param newEmail (string) The new email that should be set for the user's account
 */
const doGetUserEmail = async newEmail => {
  auth().currentUser.updateEmail(newEmail);
};

export default doGetUserEmail;
