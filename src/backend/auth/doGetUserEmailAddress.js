import auth from '@react-native-firebase/auth';

/**
 * Returns the email address of the currently logged in user.
 * @returns (string) The email address status of the currently logged in user
 *          OR
 *          (null) The user is not logged in (should never occur the way I'm doing it)
 */
const doGetUserEmailAddress = () => {
  return auth().currentUser.email;
};

export default doGetUserEmailAddress;
