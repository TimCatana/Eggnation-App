import auth from '@react-native-firebase/auth';

/**
 * Returns the email verification status of the currently logged in user.
 * @returns (boolean) The email verification status of the currently logged in user
 *          OR
 *          (null) The user is not logged in (should never occur the way I'm doing it)
 */
const doGetUserEmailVerificationStatus = () => {
  return auth().currentUser.emailVerified;
};

export default doGetUserEmailVerificationStatus;
