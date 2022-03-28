import auth from '@react-native-firebase/auth';

export default doGetUserEmail = async newPassword => {
  await auth().currentUser.updatePassword(newPassword);
};
