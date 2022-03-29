import auth from '@react-native-firebase/auth';

export default doSendVerificationEmail = async () => {
  await auth().currentUser.sendEmailVerification()
};
