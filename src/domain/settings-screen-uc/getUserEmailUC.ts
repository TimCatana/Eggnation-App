import doGetUserEmail from '../../backend/auth/deGetUserEmail';
import {SUCCESS, ERROR} from '../../constants/ResultsConstants';
import {S_E_UNEXPECTED_ERROR} from '../../frontend/theme/Strings';
import {Result} from '../../types/typeAliases';
import printDevLogs from '../printDevLogs';

/**
 * Attempts to get the currently logged in user's email address.
 * @error null-email SHOULD NEVER OCCUR The user email is null
 * @onSuccessReturn {status: SUCCESS, data: string, message: string}
 * @onErrorReturn {status: ERROR, data: 'failed to get email', message: string}
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
 * @param error The error
 * @returns {status: ERROR, data: string message: string}
 */
const _getErrorResponse = (): Result => {
  if (__DEV__) {
    printDevLogs(
      'domain/settings-screen-uc/getUserEmailUC.js',
      'getUserEmailUC',
      `The email address fetched is null`,
    );
  }

  return {
    status: ERROR,
    data: 'Failed to get email',
    message: S_E_UNEXPECTED_ERROR,
  };
};

export default getUserEmailUC;
