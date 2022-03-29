import AsyncStorage from '@react-native-async-storage/async-storage';

export default doRemoveAsyncValue = async (key) => {
  await AsyncStorage.removeItem(key)
};
