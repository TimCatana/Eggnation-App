import auth from '@react-native-firebase/auth';

export default doLogin = async (email, password) => {
    await auth().signInWithEmailAndPassword(email, password);
};
