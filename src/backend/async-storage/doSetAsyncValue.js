import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Stores a key-value pair in Async Storage.
 * @param key (string) The key where the value will be stored
 * @param value (string) The value that will be stored at key
 */
const doSetAsyncValue = async (key, value) => {
  await AsyncStorage.setItem(key, value);
};

export default doSetAsyncValue;
