import auth from '@react-native-firebase/auth';

const doGetUserEmail = () => {
  return auth().currentUser.email;
};

export default doGetUserEmail;
