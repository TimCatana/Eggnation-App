import doLogout from '../../backend/auth/doLogout';
import {SUCCESS, ERROR} from '../../constants/ResultsConstants';
import {Result} from '../../types/typeAliases';
import printDevLogs from '../printDevLogs';

/**
 * Attempts to log the user out of their account.
 * @onSuccessReturn {status: SUCCESS, data: null, message: string}
 * @onErrorReturn {status: ERROR, data: null, message: string}
 */
const logoutUserUC = async (): Promise<Result> => {
  try {
    await doLogout();
    return {status: SUCCESS, data: null, message: ''};
  } catch (e: any) {
    return _getErrorResponse(e);
  }
};

/**
 * Get's the correct error message to return to the UI.
 * Prints dev logs if in DEV mode.
 * @param error The error
 * @returns {status: ERROR, data: null, message: string}
 */
const _getErrorResponse = (error: any): Result => {
  if (__DEV__) {
    printDevLogs(
      'domain/settings-screen-uc/logoutUserUC.js',
      'logoutUserUC',
      `${error}`,
    );
  }

  return {status: ERROR, data: null, message: 'An unexpected error occurred!'};
};

export default logoutUserUC;
