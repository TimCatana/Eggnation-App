import auth from '@react-native-firebase/auth';

/**
 * Sends a forgot password email to a given email address.
 * @param email (string) The email to send the forgot password email to
 */
const doSendForgotPasswordEmail = async email => {
  await auth().sendPasswordResetEmail(email);
};

export default doSendForgotPasswordEmail;
