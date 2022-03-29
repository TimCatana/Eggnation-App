import doRegister from '../backend/auth/doRegister';

export const registerUserUC = async (email, password) => {
  try {
    await doRegister(email, password);
    // Cloud Function automatically adds user to database
  } catch (e) {
    console.log(`error registering in... need to show UI error --> ${e}`);
    return false;
  }
};
