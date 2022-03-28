import doSendForgotPasswordEmail from '../backend/auth/doSendForgotPasswordEmail';

export const sendForgotPasswordEmailUC = async email => {
  try {
    await doSendForgotPasswordEmail(email);
    return true;
  } catch (e) {
    console.log(
      `error sending forgot password email... need to show UI error --> ${e}`,
    );
    return false;
  }
};
