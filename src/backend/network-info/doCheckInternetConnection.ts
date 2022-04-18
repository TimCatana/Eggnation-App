import NetInfo from '@react-native-community/netinfo';

/**
 * Checks to see if the user is connected to the internet or not.
 * @return true - there is internet connection
 *         false - no internet connection
 *         null - unknown if there is internet connection or not
 */
const doCheckInternetConnection = async (): Promise<boolean> => {
  const result = await NetInfo.fetch();
  return result.isConnected ? result.isConnected : false;
};

export default doCheckInternetConnection;
