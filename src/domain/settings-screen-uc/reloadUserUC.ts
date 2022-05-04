import {SUCCESS, ERROR} from '../../constants/ResultsConstants';
import {Result} from '../../constants/typeAliases';
import doReloadUser from '../../backend/auth/doReloadUser';

const reloadUserUC = async (): Promise<Result> => {
  try {
    await doReloadUser();
    return {status: SUCCESS, message: ''};
  } catch (error) {
    return {status: ERROR, message: ''};
  }
};

export default reloadUserUC;
