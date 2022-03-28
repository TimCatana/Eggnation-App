import doDeleteUser from '../backend/auth/doDeleteUser'

export const deleteUserUC = () => {
  try {
    doDeleteUser();
    // Cloud Function automatically deletes user from database
  } catch (e) {
    console.log(`error deleting user... need to show UI error --> ${e}`);
    return false;
  }
};