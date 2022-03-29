import firestore from '@react-native-firebase/firestore';

export default doGetAllAvailablePrizes = async () => {
  const result = [];

  const querySnapshot = await firestore()
    .collection('available-prizes')
    .get();

  if (querySnapshot.empty) {
    return [];
  }

  querySnapshot.forEach(snapshot => {
    result.push(snapshot.data());
  });

  return result;
};