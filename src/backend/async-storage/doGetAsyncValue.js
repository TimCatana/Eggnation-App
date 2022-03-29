import AsyncStorage from '@react-native-async-storage/async-storage';

export default doGetAsyncValue = async (key) => {
  return await AsyncStorage.getItem(key)
};