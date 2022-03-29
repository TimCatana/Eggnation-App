import AsyncStorage from '@react-native-async-storage/async-storage';

export default doClearAsyncStorage = async () => {
  await AsyncStorage.clear();
};
