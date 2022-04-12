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
 * @returns (//TODO add the exact JSON type of prize returned)
 */
const doGetWonPrize = async (userId, prizeId) => {
  return await firestore()
    .collection(FS_USERS_COLLECTION_KEY)
    .doc(`${userId}`)
    .collection(FS_WON_PRIZES_COLLECTION_KEY)
    .doc(`${prizeId}`)
    .get();
};

export default doGetWonPrize;
