import doGetAsyncValue from '../backend/async-storage/doGetAsyncValue';
import doSetAsyncValue from '../backend/async-storage/doSetAsyncValue';

export const decrementLocalCountUC = async () => {
  try {
    const count = await doGetAsyncValue('localCount');

    if (count === null) {
      return false;
    }

    await doSetAsyncValue('localCount', `${count - 1}`);
  } catch (e) {
    console.log(`error deleting user... need to show UI error --> ${e}`);
  }
};
