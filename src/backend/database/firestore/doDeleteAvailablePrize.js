import firestore from '@react-native-firebase/firestore';

export default doDeleteAvailablePrize = async prizeId => {
  await firestore().collection('available-prizes').doc(`${prizeId}`).delete();
};
