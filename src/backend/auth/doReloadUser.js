import auth from '@react-native-firebase/auth';

/**
 * Refreshes the user's token.
 */
const doReloadUser = async () => {
  await auth().currentUser.reload();
};

export default doReloadUser;
