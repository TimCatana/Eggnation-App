import auth from '@react-native-firebase/auth';

export default doGetUserEmailVerificationStatus = () => {
  return auth().currentUser.emailVerified;
};
