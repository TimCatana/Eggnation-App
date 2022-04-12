import doUpdateUserEmail from '../../backend/auth/mutators/doUpdateUserEmail';
import doGetUserEmail from '../../backend/auth/accessors/deGetUserEmail';
import doReauthenticate from '../../backend/auth/doReauthenticate';
import {SUCCESS, ERROR} from '../../frontend/util/ResultsConstants';

/**
 * TODO - add documentation
 * @param {*} newEmail 
 * @param {*} password 
 * @returns 
 */
const updateUserEmailUC = async (newEmail, password) => {
  const email = doGetUserEmail();

  if (!email) {
    return {status: ERROR, message: 'an unexpected error occurred'};
  }

  try {
    await doReauthenticate(email, password);
  } catch (e) {
    return _getReauthenticateErrorResponse(e);
  }

  try {
    await doUpdateUserEmail(newEmail);
  } catch (error) {
    return _getUpdateEmailErrorResponse(e)
  }

  // TODO - need to reload token

  return {status: SUCCESS, message: 'email updated successfully!'};
};

/**
 * @error auth/user-mismatch Thrown if the credential given does not correspond to the user.
 * @error auth/user-not-found Thrown if the credential given does not correspond to any existing user.
 * @error auth/invalid-credential Thrown if the provider's credential is not valid. This can happen if it has already expired when calling link, or if it used invalid token(s). See the Firebase documentation for your provider, and make sure you pass in the correct parameters to the credential method.
 * @error auth/invalid-email Thrown if the email used in a auth.EmailAuthProvider.credential is invalid.
 * @error auth/wrong-password Thrown if the password used in a auth.EmailAuthProvider.credential is not correct or when the user associated with the email does not have a password.
 * @error auth/invalid-verification-code Thrown if the credential is a auth.PhoneAuthProvider.credential and the verification code of the credential is not valid.
 * @error auth/invalid-verification-id Thrown if the credential is a auth.PhoneAuthProvider.credential and the verification ID of the credential is not valid.
 * */
const _getReauthenticateErrorResponse = error => {
  if (error.code === ' auth/user-mismatch') {
    return {status: ERROR, message: 'invalid credentials!'};
  } else if (error.code === 'auth/user-not-found') {
    return {status: ERROR, message: 'invalid credentials!'};
  } else if (error.code === 'auth/invalid-credential') {
    return {status: ERROR, message: 'invalid password!'};
  } else if (error.code === 'auth/invalid-email') {
    return {status: ERROR, message: 'an unexpected error occurred!'};
  } else if (error.code === 'auth/wrong-password') {
    return {status: ERROR, message: 'invalid password!'};
  } else {
    return {status: ERROR, message: 'an unexpected error occurred!'};
  }
};

/**
 * @error auth/invalid-email Thrown if the email used is invalid.
 * @error auth/email-already-in-use Thrown if the email is already used by another user.
 * @error auth/requires-recent-login Thrown if the user's last sign-in time does not meet the security threshold.
 * @param email The users new email address.*/
const _getUpdateEmailErrorResponse = error => {
  if (error.code === 'auth/invalid-email') {
    return {status: ERROR, message: 'Email address is invalid!'};
  } else if (error.code === 'auth/email-already-in-use') {
    return {status: ERROR, message: 'Email address already in use!'};
  } else if (error.code === ' auth/requires-recent-login') {
    return {status: ERROR, message: 'an unexpected error occurred!'};
  } else {
    return {status: ERROR, message: 'an unexpected error occurred!'};
  }
};

export default updateUserEmailUC;
