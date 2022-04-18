import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Returns the value stored at a given key in Async Storage.
 * @param key (string) The key that will be used to fetch the value
 * @returns (string) The value stored at key
 *          OR
 *          (null) Nothing is stored at key
 */
const doGetAsyncValue = async (key: string): Promise<string | null> => {
  return await AsyncStorage.getItem(key);
};

export default doGetAsyncValue;
