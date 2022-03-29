import doGetAsyncValue from '../backend/async-storage/doGetAsyncValue';
import doSetAsyncValue from '../backend/async-storage/doSetAsyncValue';

export const getLocalCountUC = async () => {
  try {
    const count = await doGetAsyncValue('localCount');

    if (count === null) {
      await doSetAsyncValue('localCount', `${1000}`)
      return 1000;
    } else {
      return parseInt(count);
    }
  } catch (e) {
    console.log(`error deleting user... need to show UI error --> ${e}`);
    return 1000
  }
};
