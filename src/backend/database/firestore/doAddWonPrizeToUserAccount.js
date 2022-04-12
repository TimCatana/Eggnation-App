import firestore from '@react-native-firebase/firestore';
import {
  FS_USERS_COLLECTION_KEY,
  FS_WON_PRIZES_COLLECTION_KEY,
} from '../../../frontend/util/Constants';

/**
 * Adds a won prize to the user's collection in the database.
 * The user collection is identified using the user ID.
 * @param userId (string) The userId of the user who won the prize.
 * @param wonPrize (//TODO add specific JSON string type)
 */
const doAddWonPrizeToUserAccount = async (userId, wonPrize) => {
  await firestore()
    .collection(FS_USERS_COLLECTION_KEY)
    .doc(`${userId}`)
    .collection(FS_WON_PRIZES_COLLECTION_KEY)
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

export default doAddWonPrizeToUserAccount;
