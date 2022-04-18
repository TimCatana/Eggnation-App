import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Clears AsyncStorage entirely. This should never be used in production.
 * It is here in case I ever want to test something with it.
 */
const doClearAsyncStorage = async () => {
  await AsyncStorage.clear();
};

export default doClearAsyncStorage;
