import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Deletes the value stored at key in Async Storage.
 * This should only be used for testing purposes.
 * Should never be used in production.
 * @param key (string) The key that will be used to delete the value
 */
const doRemoveAsyncValue = async key => {
  await AsyncStorage.removeItem(key);
};

export default doRemoveAsyncValue;
