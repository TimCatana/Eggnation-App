import doUpdateUserEmail from '../backend/auth/mutators/doUpdateUserEmail';
import doReauthenticate from '../backend/auth/doReauthenticate';
import deGetUserEmail from '../backend/auth/accessors/deGetUserEmail';

export const updateUserEmailUc = async (newEmail, password) => {
  const email = deGetUserEmail();

  try {
    await doReauthenticate(email, password);
  } catch (e) {
    console.log(`Failed to reauthenticate user in updateEmailUC --> ${e}`);
    return false;
  }

  try {
    await doUpdateUserEmail(newEmail);
  } catch (error) {
    console.log(`Failed to update user email --> ${e}`);
    return false;
  }

  return true;
};
