import auth from '@react-native-firebase/auth';

const doRegister = async (email, password) => {
  await auth().createUserWithEmailAndPassword(email, password);
};

export default doRegister;
