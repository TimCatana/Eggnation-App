import firestore from '@react-native-firebase/firestore';
import {
  FS_USERS_COLLECTION_KEY,
  FS_WON_PRIZES_COLLECTION_KEY,
} from '../../../frontend/util/Constants';

/**
 * Get's the list of all of the prizes that the user has won.
 * The userId is used to identify which won prizes collection to query.
 * @param userId (string) The userId of the user
 * @returns ( { prizeId: string,
 *              prizeTitle: string,
 *              prizeDesc: string,
 *              prizeType: string,
 *              prizeTier: string,
 *              prizeClaimType: string,
 *              prizeWonDate: string,
 *              prizeClaimed: boolean,
 *              prizeWinnerId: string }[] ) If won prizes exist in the database
 *          OR
 *          ([]) If no won prizes exist in the database
 */
const doGetAllWonPrizes = async userId => {
  const result = [];

  const querySnapshot = await firestore()
    .collection(FS_USERS_COLLECTION_KEY)
    .doc(`${userId}`)
    .collection(FS_WON_PRIZES_COLLECTION_KEY)
    .get();

  if (querySnapshot.empty) {
    return [];
  }

  querySnapshot.forEach(snapshot => {
    result.push(snapshot.data());
  });

  return result;
};

export default doGetAllWonPrizes;
