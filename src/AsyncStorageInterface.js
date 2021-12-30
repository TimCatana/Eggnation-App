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
    return new Promise((resolve, reject) => {
      async function settingData() {
        try {
          await AsyncStorage.setItem(key, value);
          console.log("set Item");
        } catch (err) {
          reject(Error("AsyncStorage setData: error: " + err));
        }
      }
      settingData();
    });
  }

  /**
   * Get a value given a key from AsyncStorage
   * @param {string} key the key of the data to be retrieved
   * @param setHook The hook used to set the retrieved data (This is how we return the data)
   * @returns the value at the key in AsyncStorage
   */
  async getData(key) {
    return new Promise((resolve, reject) => {
       async function gettingData() {
          try {
            let result = await AsyncStorage.getItem(key);
            console.log("res2: " + result);
            result === null ? resolve(null) : resolve(JSON.stringify(result).replace(/"/g,"")); // get rid of te surrounding "" for the parseInt used on the result later on
          } catch(err) {
            reject(Error("AsyncStorage getData: error: " + err));
          }
       }

       gettingData();
        
    });
  }

  /**
   * clears the data in AsyncStorage
   */
  async clearStorage() {
    AsyncStorage.clear();
  }
}

export default AsyncStorageInterface;