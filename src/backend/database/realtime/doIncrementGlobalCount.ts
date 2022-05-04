import database from '@react-native-firebase/database';
import {RTDB_GLOBAL_COUNT_KEY} from '../../../constants/Constants';

/**
 * Increments the global count in the realtime database.
 * I can use the global count for some marketing strategies later on.
 */
const doIncrementGlobalCount = async () => {
  await database()
    .ref()
    .update({[RTDB_GLOBAL_COUNT_KEY]: database.ServerValue.increment(1)});
};

export default doIncrementGlobalCount;
