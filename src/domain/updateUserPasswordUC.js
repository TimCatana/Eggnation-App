import doUpdateUserPassword from '../backend/auth/mutators/doUpdateUserPassword';
import doReauthenticate from '../backend/auth/doReauthenticate';
import deGetUserEmail from '../backend/auth/accessors/deGetUserEmail';

export const updateUserPasswordUC = async (newPassword, password) => {
  const email = deGetUserEmail();

  try {
    await doReauthenticate(email, password);
  } catch (e) {
    console.log(`Failed to reauthenticate user in updatePasswordUC --> ${e}`);
    return false;
  }

  try {
    await doUpdateUserPassword(newPassword);
  } catch (error) {
    console.log(`Failed to update user password --> ${e}`);
    return false;
  }

  // TODO - need to reload token

  return true;
};
