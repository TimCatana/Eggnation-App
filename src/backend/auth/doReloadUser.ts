import auth from '@react-native-firebase/auth';

/**
 * Refreshes the user's token.
 * @throws {eggnation/user-is-null} SHOULD NEVER BE THROWN Thrown if user is null
 */
const doReloadUser = async () => {
  const user = auth().currentUser;

  if (user === null) {
    throw new Error('eggnation/user-is-null');
  } else {
    await user.reload();
  }
};

export default doReloadUser;
