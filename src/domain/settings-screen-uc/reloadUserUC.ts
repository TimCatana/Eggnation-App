import doReloadUser from '../../backend/auth/doReloadUser';
import {SUCCESS, ERROR} from '../../constants/ResultsConstants';
import {Result} from '../../constants/typeAliases';

const reloadUserUC = async (): Promise<Result> => {
  try {
    await doReloadUser();
    return {
      status: SUCCESS,
      data: null,
      message: 'Reloaded user successfully!',
    };
  } catch (error) {
    return {status: ERROR, data: null, message: 'Failed to reload user!'};
  }
};

export default reloadUserUC;