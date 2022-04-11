import auth from '@react-native-firebase/auth';

const doSendForgotPasswordEmail = async email => {
  await auth().sendPasswordResetEmail(email);
};

export default doSendForgotPasswordEmail;
