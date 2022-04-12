import NetInfo from '@react-native-community/netinfo';
/**
 * Increments the global count in the realtime database.
 * I can use the global count for some marketing strategies later on.
 * @return true - there is internet connection
 *         false - no internet connection
 *         null - unknown if there is internet connection or not
 */
const doCheckInternetConnection = async () => {
  const result = await NetInfo.fetch();
  return result.isConnected;
};

export default doCheckInternetConnection;
