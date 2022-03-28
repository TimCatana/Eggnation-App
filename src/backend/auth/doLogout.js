import auth from '@react-native-firebase/auth';

export default doLogout = async () => {
  await auth().signOut();
};
