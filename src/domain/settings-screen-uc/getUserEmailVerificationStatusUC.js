import doGetUserEmailVerificationStatus from "../../backend/auth/doGetUserEmailVerificationStatus";

const getUserEmailVerificationStatusUC = () => {
  const emailVerificationStatus = doGetUserEmailVerificationStatus();

  if (emailVerificationStatus === null) {
    console.log('Failed to get emailVerificationStatus');
    // TODO - need to send back an error response to screen or something
  }

  return emailVerificationStatus;
};

export default getUserEmailVerificationStatusUC;
