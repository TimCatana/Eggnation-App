import auth from '@react-native-firebase/auth';

/**
 * Returns the unique user id of the currently logged in user.
 * @returns (string) The unique user id of the currently logged in user
 *          OR
 *          (null) The user is not logged in (should never occur the way I'm doing it)
 */
const doGetUserId = () => {
  return auth().currentUser.uid;
};

export default doGetUserId;
