import doSendVerificationEmail from '../backend/auth/doSendVerificationEmail';

export const sendVerificationEmailUC = async () => {
  try {
    await doSendVerificationEmail();
    return true;
  } catch (e) {
    console.log(
      `error sending verification email password email... need to show UI error --> ${e}`,
    );
    return false;
  }
};
