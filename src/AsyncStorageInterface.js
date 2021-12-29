import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Abstraction used for access to AsyncStorage
 */
class AsyncStorageInterface {

  /**
   * Store a [key, value] pair in AsyncStorage
   * @param {string} key the key of the data to be set
   * @param {string} value the value of the total break counter
   */
  async storeData(key, value) {
    try {
      AsyncStorage.setItem(key, value)
    } catch (e) {
      console.log("AsyncStorage setData: error: " + e);
    }
  }

  /**
   * Get a value given a key from AsyncStorage
   * @param {string} key the key of the data to be retrieved
   * @param setHook The hook used to set the retrieved data (This is how we return the data)
   * @returns the value at the key in AsyncStorage
   */
  async getData(key) {
    // const result = await AsyncStorage.getItem(key);
    // await setHook(result);
    try {
      const result = await AsyncStorage.getItem(key);
      console.log("result in getdada: " + result);
      if(result === null) {
        this.storeData(key, '0');
        return '0';
      } else {
        return(result);
      }
    } catch(e) {
      console.log("AsyncStorage getData: error: " + e);
    }
  }

  async clearStorage() {
    AsyncStorage.clear();
  }
}

export default AsyncStorageInterface;