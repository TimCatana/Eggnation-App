import database from '@react-native-firebase/database';

export default doIncrementGlobalCount = async () => {
  await database().ref('globalCount').update(database.ServerValue.increment(1)); // TODO - may need to add {count: ...} in update 
};
