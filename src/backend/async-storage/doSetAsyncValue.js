import AsyncStorage from '@react-native-async-storage/async-storage';

export default doSetAsyncValue = async (key, value) => {
  await AsyncStorage.setItem(key, value);
};
