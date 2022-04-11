import doRegister from '../../backend/auth/doRegister';
import {ERROR, SUCCESS} from '../../frontend/util/ResultsConstants';

/**
 * @param email The users email address.
 * @param password The users password.
 * @error auth/email-already-in-use Thrown if there already exists an account with the given email address.
 * @error SHOULD NEVER BE THROWN auth/invalid-email Thrown if the email address is not valid.
 * @error SHOULD NEVER BE THROWN auth/weak-password Thrown if the password is not strong enough.
 * @error NOT CHECKED auth/operation-not-allowed Thrown if email/password accounts are not enabled. Enable email/password accounts in the Firebase Console, under the Auth tab.
 * @onSuccessReturn {status: SUCCESS, message: string}
 * @onErrorReturn {status: ERROR, message: string}
 */
const registerUserUC = async (email, password) => {
  try {
    await doRegister(email, password);
    // Cloud Function automatically adds user to database
    return {status: SUCCESS, message: ''};
  } catch (e) {
    return getErrorResponse(e);
  }
};

const getErrorResponse = error => {
  if (error.code === 'auth/email-already-in-use') {
    return {status: ERROR, message: 'email already in use!'};
  } else if (error.code === 'auth/invalid-email') {
    return {status: ERROR, message: 'invalid email!'};
  } else if (error.code === 'auth/weak-password') {
    return {status: ERROR, message: 'invalid password!'};
  } else {
    return {status: ERROR, message: 'an unexpected error occurred!'};
  }
};

export default registerUserUC;
