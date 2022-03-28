import auth from '@react-native-firebase/auth';

export default logout = () => {
  auth().currentUser.delete;
};
