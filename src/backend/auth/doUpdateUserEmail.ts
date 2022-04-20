import auth from '@react-native-firebase/auth';

// TODO - this should be done on the server to prevent sending them emails saying that their email has been changed
/**
 * Set's a new email address for the user's account.
 * @param newEmail (string) The new email that should be set for the user's account
 * @throws {eggnation/user-is-null} SHOULD NEVER BE THROWN Thrown if user is null
 */
const doUpdateUserEmail = async (newEmail: string) => {
  const user = auth().currentUser;

  if (user === null) {
    throw new Error('eggnation/user-is-null');
  } else {
    await user.updateEmail(newEmail);
  }
};

export default doUpdateUserEmail;
