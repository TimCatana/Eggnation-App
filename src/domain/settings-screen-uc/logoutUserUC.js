import doLogout from '../../backend/auth/doLogout';
import {ERROR, SUCCESS} from '../../frontend/util/ResultsConstants';
import printDevLogs from '../printDevLogs';

/**
 * Attempts to log the user out of their account.
 * @onSuccessReturn {status: SUCCESS, message: string}
 * @onErrorReturn {status: ERROR, message: string}
 */
const logoutUserUC = async () => {
  try {
    await doLogout();
    return {status: SUCCESS, message: ''};
  } catch (e) {
    return _getErrorResponse(e);
  }
};

/**
 * Get's the correct error message to return to the UI.
 * Prints dev logs if in DEV mode.
 * @param error The error
 * @returns {status: ERROR, message: string}
 */
const _getErrorResponse = error => {
  if (__DEV__) {
    printDevLogs(
      'domain/settings-screen-uc/logoutUserUC.js',
      'logoutUserUC',
      `${error}`,
    );
  }

  return {status: ERROR, message: 'An unexpected error occurred!'};
};

export default logoutUserUC;
