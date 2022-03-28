import doLogin from '../backend/auth/doLogin'

export const loginUserUC = async (email, password) => {
  try {
    await doLogin(email, password);
  } catch (e) {
    console.log(`error logging in... need to show UI error --> ${e}`);
    return false;
  }
};