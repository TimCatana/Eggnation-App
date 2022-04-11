import auth from '@react-native-firebase/auth';

const doUpdateUserPassword = async newPassword => {
  await auth().currentUser.updatePassword(newPassword);
};

export default doUpdateUserPassword;
