import doGetUserEmailVerificationStatus from '../../backend/auth/doGetUserEmailVerificationStatus';
import {SUCCESS, ERROR} from '../../constants/ResultsConstants';
import {Result} from '../../types/typeAliases';
import printDevLogs from '../printDevLogs';

/**
 * Attempts to get the currently logged in user's email verification status.
 * @error null-email-verification-status SHOULD NEVER OCCUR The user email verification status is null
 * @onSuccessReturn {status: SUCCESS, data: string, message: string}
 * @onErrorReturn {status: ERROR, data: 'failed to get verification status', message: string}
 */
const getUserEmailVerificationStatusUC = (): Result => {
  const emailVerificationStatus = doGetUserEmailVerificationStatus();

  if (emailVerificationStatus === null) {
    _getErrorResponse();
  }

  return {
    status: SUCCESS,
    data: emailVerificationStatus,
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
      'domain/settings-screen-uc/getUserEmailVerificationStatusUC.js',
      'getUserEmailVerificationStatusUC',
      `The email verification status fetched is null`,
    );
  }
  return {
    status: ERROR,
    data: 'Failed to get verification status',
    message: 'An unexpected error occurred!',
  };
};

export default getUserEmailVerificationStatusUC;