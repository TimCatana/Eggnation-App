import auth from '@react-native-firebase/auth';

const doSendVerificationEmail = async () => {
  await auth().currentUser.sendEmailVerification()
};

export default doSendVerificationEmail
