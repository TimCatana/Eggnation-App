import auth from '@react-native-firebase/auth';

export default doGetUserEmail = async newEmail => {
  auth().currentUser.updateEmail(newEmail);
};
