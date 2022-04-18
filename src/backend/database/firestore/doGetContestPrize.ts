import firestore from '@react-native-firebase/firestore';
import {FS_CONTEST_PRIZES_COLLECTION_KEY} from '../../../constants/Constants';
import {ContestPrize} from '../../../types/typeAliases';

/**
 * @note This is not used because I changed the way the user wins a prize
 * Get's a single contest prize from the database.
 * @param prizeId The Id of the prize to get from the database.
 * @returns ( { prizeId: string,
 *              prizeTitle: string,
 *              prizeDesc: string,
 *              prizeType: string,
 *              prizeTier: string,
 *              prizeClaimType: string } ) if won contest exists in database
 *          OR
 *          (null) if contest prize does not exist in database
 */
const doGetContestPrize = async (
  prizeId: string,
): Promise<ContestPrize | null> => {
  const documentSnapshot = await firestore()
    .collection(FS_CONTEST_PRIZES_COLLECTION_KEY)
    .doc(`${prizeId}`)
    .get();

  if (documentSnapshot.exists) {
    const data = documentSnapshot.data();

    if (data) {
      return {
        prizeId: data.prizeId ? `${data.prizeId}` : '',
        prizeTitle: data.prizeTitle ? `${data.prizeTitle}` : '',
        prizeDesc: data.prizeDesc ? `${data.prizeDesc}` : '',
        prizeType: data.prizeType ? `${data.prizeType}` : '',
        prizeTier: data.prizeTier ? `${data.prizeTier}` : '',
        prizeClaimType: data.prizeClaimType ? `${data.prizeClaimType}` : '',
      };
    } else {
      return null;
    }
  } else {
    return null;
  }
};

export default doGetContestPrize;
