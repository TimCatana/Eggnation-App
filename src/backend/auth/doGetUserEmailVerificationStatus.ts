import auth from '@react-native-firebase/auth';

/**
 * Returns the email verification status of the currently logged in user.
 * @returns (boolean) The email verification status of the currently logged in user
 *          OR
 *          (null) The user is not logged in (should never occur the way I'm doing it)
 */
const doGetUserEmailVerificationStatus = (): boolean | null => {
  const user = auth().currentUser;

  if (user === null) {
    return null;
  } else {
    return user.emailVerified;
  }
};

export default doGetUserEmailVerificationStatus;
