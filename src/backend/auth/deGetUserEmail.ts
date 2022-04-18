import auth from '@react-native-firebase/auth';

/**
 * Returns the email of the currently logged in user.
 * @returns (string) The email of the currently logged in user
 *          OR
 *          (null) The user is not logged in (should never occur the way I'm doing it)
 */
const doGetUserEmail = (): string | null => {
  const user = auth().currentUser;

  if (user === null) {
    return null;
  } else {
    return user.email;
  }
};

export default doGetUserEmail;
