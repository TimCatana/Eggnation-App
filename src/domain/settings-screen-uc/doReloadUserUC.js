import doReloadUser from "../../backend/auth/doReloadUser";
import { ERROR, SUCCESS } from "../../frontend/util/ResultsConstants";

const getReloadUserUC = () => {
  try {
    await doReloadUser(newEmail);
    return {status: SUCCESS, message: 'Reloaded user successfully!'};
  } catch (error) {
    return {status: ERROR, message: 'Failed to reload user!'};
  }
};

export default getReloadUserUC;

