import doUpdateUserEmail from '../backend/auth/mutators/doUpdateUserEmail';
import deGetUserEmail from '../backend/auth/accessors/deGetUserEmail';
import doReauthenticate from '../backend/auth/doReauthenticate';


export const updateUserEmailUC = async (newEmail, password) => {
  const email = deGetUserEmail();

  if(!email) {
    console.log(`email is null, problem ${email}`)
  }

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

  // TODO - need to reload token

  return true;
};
