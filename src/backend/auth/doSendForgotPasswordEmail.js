import auth from '@react-native-firebase/auth';

export default doSendForgotPasswordEmail = async (email) => {
  await auth().sendPasswordResetEmail(email)
};
