import doLogout from '../../backend/auth/doLogout';
import {SUCCESS, ERROR} from '../../constants/ResultsConstants';
import {Result} from '../../constants/typeAliases';
import {S_E_UNEXPECTED_ERROR} from '../../constants/Strings';
import printDevLogs from '../printDevLogs';

/**
 * Attempts to log the user out of their account.
 * @onSuccessReturn {status: SUCCESS, message: string}
 * @onErrorReturn {status: ERROR, message: string}
 */
const logoutUserUC = async (): Promise<Result> => {
  try {
    await doLogout();
    return {status: SUCCESS, message: ''};
  } catch (e: any) {
    return _getErrorResponse(e);
  }
};

/**
 * Get's the correct error message to return to the UI.
 * Prints dev logs if in DEV mode.
 * @param error The error
 * @returns {status: ERROR, message: string}
 */
const _getErrorResponse = (error: any): Result => {
  if (__DEV__) {
    printDevLogs(
      'domain/settings-screen-uc/logoutUserUC.ts',
      'logoutUserUC',
      `${error}`,
    );
  }

  return {status: ERROR, message: S_E_UNEXPECTED_ERROR};
};

export default logoutUserUC;
