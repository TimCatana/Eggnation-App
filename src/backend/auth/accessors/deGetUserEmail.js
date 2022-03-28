import auth from '@react-native-firebase/auth';

export default doGetUserEmail = () => {
  return auth().currentUser.email;
};
