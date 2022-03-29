import firestore from '@react-native-firebase/firestore';

export default doAddWonPrizeToUserAccount = async (userId, wonPrize) => {
  await firestore()
    .collection('users')
    .doc(`${userId}`)
    .collection('wonPrizes')
    .doc(`${wonPrize.prizeId}`)
    .set({
      prizeId: `${wonPrize.prizeId}`,
      prizeTitle: `${wonPrize.prizeTitle}`,
      prizeDesc: `${wonPrize.prizeDesc}`,
      prizeType: `${wonPrize.prizeType}`,
      prizeTier: `${wonPrize.prizeTier}`,
      prizeWonDate: `${Date()}`,
      prizeClaimed: false,
      prizeWinnerId: `${userId}`,
    });
};
