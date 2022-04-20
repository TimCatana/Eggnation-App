import firestore from '@react-native-firebase/firestore';
import {
  FS_WON_PRIZES_COLLECTION_KEY,
  FS_USER_WON_PRIZES_COLLECTION_KEY,
} from '../../../constants/Constants';
import {PrizeToAdd} from '../../../types/typeAliases';

/**
 * Adds a won prize to the user's collection in the database.
 * The user collection is identified using the user ID.
 * @param userId (string) The userId of the user who won the prize
 * @param wonPrize ({ prizeId: string,
 *                    prizeTitle: string,
 *                    prizeDesc: string,
 *                    prizeType: string,
 *                    prizeTier: string }) The prize to be added to the user's account
 */
const doAddWonPrizeToUserAccount = async (
  userId: string,
  prizeToAdd: PrizeToAdd,
) => {
  await firestore()
    .collection(FS_WON_PRIZES_COLLECTION_KEY)
    .doc(`${userId}`)
    .collection(FS_USER_WON_PRIZES_COLLECTION_KEY)
    .doc(`${prizeToAdd.prizeId}`)
    .set({
      prizeId: `${prizeToAdd.prizeId}`,
      prizeTitle: `${prizeToAdd.prizeTitle}`,
      prizeDesc: `${prizeToAdd.prizeDesc}`,
      prizeType: `${prizeToAdd.prizeType}`,
      prizeTier: `${prizeToAdd.prizeTier}`,
      prizeWonDate: `${Date()}`,
      prizeClaimed: false,
      prizeDelivered: false,
      prizeWinnerId: `${userId}`,
    });
};

export default doAddWonPrizeToUserAccount;