import firestore from '@react-native-firebase/firestore';

export default doGetWonPrize = async (userId, prizeId) => {
  return await firestore()
    .collection('users')
    .doc(`${userId}`)
    .collection('wonPrizes')
    .doc(`${prizeId}`)
    .get()
};
