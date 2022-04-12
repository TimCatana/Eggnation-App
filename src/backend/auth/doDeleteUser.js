import auth from '@react-native-firebase/auth';

/**
 * Deletes the user's account
 */
const doDeleteUser = () => {
  auth().currentUser.delete;
};

export default doDeleteUser;
