import firestore from '@react-native-firebase/firestore';
import {
  FS_USERS_COLLECTION_KEY,
  FS_WON_PRIZES_COLLECTION_KEY,
} from '../../../frontend/util/Constants';

/**
 * Get's a single won prize from the database.
 * The userId is used to identify which won prizes collection to query.
 * @param userId (string) The userId of the user
 * @param prizeId The Id of the prize to get from the database.
 * @returns ({ prizeId: string,
 *              prizeTitle: string,
 *              prizeDesc: string,
 *              prizeType: string,
 *              prizeTier: string,
 *              prizeWonDate: string,
 *              prizeClaimed: boolean,
 *              prizeWinnerId: string }) if won prize exists in database
 *          OR
 *          (null) if won prize does not exist in database
 */
const doGetWonPrize = async (userId, prizeId) => {
  const documentSnapshot = await firestore()
    .collection(FS_USERS_COLLECTION_KEY)
    .doc(`${userId}`)
    .collection(FS_WON_PRIZES_COLLECTION_KEY)
    .doc(`${prizeId}`)
    .get();

  return documentSnapshot.empty ? null : documentSnapshot.data();
};

export default doGetWonPrize;
