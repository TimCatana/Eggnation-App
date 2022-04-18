import auth from '@react-native-firebase/auth';

/**
 * Returns the unique user id of the currently logged in user.
 * @returns (string) The unique user id of the currently logged in user
 *          OR
 *          (null) The user is not logged in (should never occur the way I'm doing it)
 */
const doGetUserId = (): string | null => {
  const user = auth().currentUser;

  if (user === null) {
    return null;
  } else {
    return user.uid;
  }
};

export default doGetUserId;
