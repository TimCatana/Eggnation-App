import doLogout from '../../backend/auth/doLogout'
import { ERROR, SUCCESS } from '../../frontend/util/ResultsConstants';

/**
 * TODO - add documentation
 * @returns 
 */
const logoutUserUC = async () => {
  try {
    await doLogout();
    return {status: SUCCESS, message: ''};
  } catch (e) {
    return {status: ERROR, message: 'an unexpected error occurred!'};
  }
};

// const getErrorResponse = error => {
//   if (error.code === 'auth/email-already-in-use') {
//     return {status: ERROR, message: 'email already in use!'};
//   } else if (error.code === 'auth/invalid-email') {
//     return {status: ERROR, message: 'invalid email!'};
//   } else if (error.code === 'auth/weak-password') {
//     return {status: ERROR, message: 'invalid password!'};
//   } else {
//     return {status: ERROR, message: 'an unexpected error occurred!'};
//   }
// };

export default logoutUserUC
