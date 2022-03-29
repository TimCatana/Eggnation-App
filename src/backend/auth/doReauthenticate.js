import auth from '@react-native-firebase/auth';

export default doReauthenticate = async (email, password) => {
  const authCredential = auth.EmailAuthProvider.credential(email, password);
  await auth().currentUser.reauthenticateWithCredential(authCredential);
};
