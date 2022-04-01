import auth from '@react-native-firebase/auth';

const doLogout = async () => {
  await auth().signOut();
};

export default doLogout
