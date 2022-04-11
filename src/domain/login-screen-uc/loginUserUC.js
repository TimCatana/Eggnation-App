import doLogin from '../../backend/auth/doLogin';
import {ERROR} from '../../frontend/util/ResultsConstants';

/**
 * @param email The users email address.
 * @param password The users password.
 * @error auth/user-not-found Thrown if there is no user corresponding to the given email.
 * @error auth/wrong-password Thrown if the password is invalid for the given email, or the account corresponding to the email does not have a password set.
 * @error SHOULD NEVER BE THROWN auth/invalid-email Thrown if the email address is not valid.
 * @error auth/user-disabled Thrown if the user corresponding to the given email has been disabled.
 * @onSuccessReturn {status: SUCCESS, message: string}
 * @onErrorReturn {status: ERROR, message: string}
 * */
const loginUserUC = async (email, password) => {
  try {
    await doLogin(email, password);
    return {status: SUCCESS, message: ''};
  } catch (e) {
    return getErrorResponse(e);
  }
};

const getErrorResponse = error => {
  if (error.code === 'auth/user-not-found') {
    return {status: ERROR, message: 'invalid credentials!'};
  } else if (error.code === 'auth/invalid-email') {
    return {status: ERROR, message: 'invalid credentials!'};
  } else if (error.code === 'auth/wrong-password') {
    return {status: ERROR, message: 'invalid credentials!'};
  } else if (error.code === 'auth/user-disabled') {
    return {status: ERROR, message: 'account disabled. Cannot login'};
  } else {
    return {status: ERROR, message: 'an unexpected error occurred!'};
  }
};

export default loginUserUC;
