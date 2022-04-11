import auth from '@react-native-firebase/auth';

const doGetUserEmail = async newEmail => {
  auth().currentUser.updateEmail(newEmail);
};

export default doGetUserEmail;
