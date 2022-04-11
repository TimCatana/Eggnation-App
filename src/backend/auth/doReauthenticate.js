import auth from '@react-native-firebase/auth';

const doReauthenticate = async (email, password) => {
  const authCredential = auth.EmailAuthProvider.credential(email, password);
  await auth().currentUser.reauthenticateWithCredential(authCredential);
};

export default doReauthenticate
