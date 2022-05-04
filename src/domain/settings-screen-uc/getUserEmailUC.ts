import {SUCCESS, ERROR} from '../../constants/ResultsConstants';
import {Result} from '../../constants/typeAliases';
import {
  S_E_SS_FAILED_EMAIL_FETCH,
  S_E_UNEXPECTED_ERROR,
} from '../../constants/Strings';
import printDevLogs from '../printDevLogs';
import doGetUserEmail from '../../backend/auth/deGetUserEmail';

/**
 * Attempts to get the currently logged in user's email address.
 * @error null-email SHOULD NEVER OCCUR The user email is null
 * @onSuccessReturn {status: SUCCESS, data: string, message: string}
 * @onErrorReturn {status: ERROR, data: S_E_SS_FAILED_EMAIL_FETCH, message: string}
 */
const getUserEmailUC = (): Result => {
  const email = doGetUserEmail();

  if (!email || email.length === 0) {
    _getErrorResponse();
  }

  return {
    status: SUCCESS,
    data: email,
    message: '',
  };
};

/**
 * Get's the correct error message to return to the UI.
 * Prints dev logs if in DEV mode.
 * @returns {status: ERROR, data: string, message: string}
 */
const _getErrorResponse = (): Result => {
  if (__DEV__) {
    printDevLogs(
      'domain/settings-screen-uc/getUserEmailUC.ts',
      'getUserEmailUC',
      `The email address fetched is null`,
    );
  }

  return {
    status: ERROR,
    data: S_E_SS_FAILED_EMAIL_FETCH,
    message: S_E_UNEXPECTED_ERROR,
  };
};

export default getUserEmailUC;
