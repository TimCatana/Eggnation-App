import auth from '@react-native-firebase/auth';

const doDeleteUser = () => {
  auth().currentUser.delete;
};

export default doDeleteUser
