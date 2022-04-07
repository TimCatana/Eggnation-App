import doGetAsyncValue from '../backend/async-storage/doGetAsyncValue';
import doSetAsyncValue from '../backend/async-storage/doSetAsyncValue';
import dayjs from 'dayjs';

export const checkIfTimeToResetCountUC = async () => {
  try {
    const storedTime = await doGetAsyncValue('lastResetTime');
    // console.log(storedTime)

    if (!storedTime) {
      await doSetAsyncValue('lastResetTime', dayjs().toString());
      return;
    }

    const currentTime = dayjs();
    const timeDifference = currentTime.diff(dayjs(storedTime), 'hours'); // stored time is returned as a string from async storage. It is converted to a dayjs string using dayjs(storedTime)

    // console.log(timeDifference);
    if (timeDifference >= 12) { // TODO - probably make the 20 and 1000 constants
      await doSetAsyncValue('localCount', `${1000}`);
      await doSetAsyncValue('lastResetTime', dayjs().toString());
    }
  } catch (e) {
    console.log(
      `error checking reset time or resetting counter... need to show UI error --> ${e}`,
    );
  }
};
