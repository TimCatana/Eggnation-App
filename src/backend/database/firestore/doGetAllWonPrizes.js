import firestore from '@react-native-firebase/firestore';

export default deGetAllWonPrizes = async userId => {
  const result = [];

  const querySnapshot = await firestore()
    .collection('users')
    .doc(`${userId}`)
    .collection('wonPrizes')
    .get();

  if (querySnapshot.empty) {
    return [];
  }

  querySnapshot.forEach(snapshot => {
    result.push(snapshot.data());
  });

  return result;
};
