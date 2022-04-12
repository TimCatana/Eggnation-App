import auth from '@react-native-firebase/auth';

/**
 * Sends a verification email to the currently logged in user's email.
 */
const doSendVerificationEmail = async () => {
  await auth().currentUser.sendEmailVerification();
};

export default doSendVerificationEmail;
