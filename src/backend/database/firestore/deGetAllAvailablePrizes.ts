import firestore from '@react-native-firebase/firestore';
import {FS_AVAILABLE_PRIZES_COLLECTION_KEY} from '../../../constants/Constants';
import {AvailablePrizesArray} from '../../../constants/typeAliases';

/**
 * Returns the list of all prizes from the database in the Available Prizes Collection.
 * @returns ( { prizeId: string,
 *              prizeTitle: string,
 *              prizeDesc: string,
 *              prizeType: string,
 *              prizeTier: string,
 *              prizeClaimType: string }[] ) If available prizes exist in database  PRIZE CLAIM TYPES ARE shipment, payment or none
 *          OR
 *         ( [] ) If no available prizes exist in database
 */
const doGetAllAvailablePrizes = async (): Promise<AvailablePrizesArray> => {
  const result: AvailablePrizesArray = [];

  const querySnapshot = await firestore()
    .collection(FS_AVAILABLE_PRIZES_COLLECTION_KEY)
    .get();

  if (querySnapshot.empty) {
    return [];
  }

  querySnapshot.forEach(snapshot => {
    const data = snapshot.data();

    if (data) {
      result.push({
        prizeId: data.prizeId ? `${data.prizeId}` : '',
        prizeTitle: data.prizeTitle ? `${data.prizeTitle}` : '',
        prizeDesc: data.prizeDesc ? `${data.prizeDesc}` : '',
        prizeType: data.prizeType ? `${data.prizeType}` : '',
        prizeTier: data.prizeTier ? `${data.prizeTier}` : '',
        prizeClaimType: data.prizeClaimType ? `${data.prizeClaimType}` : '',
      });
    }
  });

  return result;
};

export default doGetAllAvailablePrizes;
