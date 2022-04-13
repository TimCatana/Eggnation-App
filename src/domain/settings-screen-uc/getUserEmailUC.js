import doGetUserEmail from "../../backend/auth/deGetUserEmail";

const getUserEmailUC = () => {
  const email = doGetUserEmail();

  if (!email || email.length === 0) {
    console.log('Failed to get email');
    // TODO - need to send back an error response to screen or something
  }

  return email;
};

export default getUserEmailUC;
