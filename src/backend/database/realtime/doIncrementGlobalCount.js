import database from '@react-native-firebase/database';

/**
 * Increments the global count in the realtime database.
 * I can use the global count for some marketing strategies later on.
 */
const doIncrementGlobalCount = async () => {
  await database().ref('globalCount').update(database.ServerValue.increment(1)); // TODO - may need to add {count: ...} in update
};

export default doIncrementGlobalCount;
