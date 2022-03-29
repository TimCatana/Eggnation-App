import auth from '@react-native-firebase/auth';

export default doGetUserId = () => {
  return auth().currentUser.uid;
};
