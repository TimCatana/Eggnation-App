import doLogout from '../backend/auth/doLogout'

export const logoutUserUC = async () => {
  try {
    await doLogout();
  } catch (e) {
    console.log(`error signing out... need to show UI error --> ${e}`);
    return false;
  }
};
