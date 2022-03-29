import auth from '@react-native-firebase/auth';

export default doDeleteUser = () => {
  auth().currentUser.delete;
};
