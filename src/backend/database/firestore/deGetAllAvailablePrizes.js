import firestore from '@react-native-firebase/firestore';
import {FS_AVAILABLE_PRIZES_COLLECTION_KEY} from '../../../frontend/util/Constants';

/**
 * Returns the list of all prizes from the database in the Available Prizes Collection.
 * @returns ( { prizeId: string,
 *              prizeTitle: string,
 *              prizeDesc: string,
 *              prizeType: string,
 *              prizeTier: string }[] ) If available prizes exist in database
 *          OR
 *         ( [] ) If no available prizes exist in database
 */
const doGetAllAvailablePrizes = async () => {
  const result = [];

  const querySnapshot = await firestore()
    .collection(FS_AVAILABLE_PRIZES_COLLECTION_KEY)
    .get();

  if (querySnapshot.empty) {
    return [];
  }

  querySnapshot.forEach(snapshot => {
    result.push(snapshot.data());
  });

  return result;
};

export default doGetAllAvailablePrizes;
