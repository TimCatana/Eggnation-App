import auth from '@react-native-firebase/auth';

export default doRegister = async (email, password) => {
  await auth().createUserWithEmailAndPassword(email, password);
};
