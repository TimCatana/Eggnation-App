import firestore from '@react-native-firebase/firestore';

export default doGetAvailablePrize = async prizeId => {
  return await firestore()
    .collection('available-prizes')
    .doc(`${prizeId}`)
    .get();
};
