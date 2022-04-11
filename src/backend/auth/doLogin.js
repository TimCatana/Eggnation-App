import auth from '@react-native-firebase/auth';

const doLogin = async (email, password) => {
  await auth().signInWithEmailAndPassword(email, password);
};

export default doLogin;
