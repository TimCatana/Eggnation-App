import firestore from '@react-native-firebase/firestore';
import {FS_AVAILABLE_PRIZES_COLLECTION_KEY} from '../../../frontend/util/Constants';

/**
 * @note This is not used because I changed the way the user wins a prize
 * Get's a single available prize from the database.
 * @param prizeId The Id of the prize to get from the database.
 * @returns ( { prizeId: string,
 *              prizeTitle: string,
 *              prizeDesc: string,
 *              prizeType: string,
 *              prizeTier: string } ) if won available exists in database
 *          OR
 *          (null) if available prize does not exist in database
 */
const doGetAvailablePrize = async prizeId => {
  const documentSnapshot = await firestore()
    .collection(FS_AVAILABLE_PRIZES_COLLECTION_KEY)
    .doc(`${prizeId}`)
    .get();

  return documentSnapshot.empty ? null : documentSnapshot.data();
};

export default doGetAvailablePrize;
