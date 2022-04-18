import firestore from '@react-native-firebase/firestore';
import {
  FS_USER_WON_PRIZES_COLLECTION_KEY,
  FS_WON_PRIZES_COLLECTION_KEY,
} from '../../../constants/Constants';
import {WonPrizesArray} from '../../../types/typeAliases';

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
 *              prizeDelivered: boolean,
 *              prizeWinnerId: string }[] ) If won prizes exist in the database
 *          OR
 *          ([]) If no won prizes exist in the database
 */
const doGetAllWonPrizes = async (userId: string): Promise<WonPrizesArray> => {
  const result: WonPrizesArray = [];

  const querySnapshot = await firestore()
    .collection(FS_WON_PRIZES_COLLECTION_KEY)
    .doc(`${userId}`)
    .collection(FS_USER_WON_PRIZES_COLLECTION_KEY)
    .get();

  if (querySnapshot.empty) {
    return [];
  }

  querySnapshot.forEach(snapshot => {
    const data = snapshot.data();

    if (data) {
      result.push({
        prizeId: data.prizeId ? `${data.prizeId}` : '',
        prizeWinnerId: data.prizeWinnerId ? `${data.prizeWinnerId}` : '',
        prizeTitle: data.prizeTitle ? `${data.prizeTitle}` : '',
        prizeDesc: data.prizeDesc ? `${data.prizeDesc}` : '',
        prizeType: data.prizeType ? `${data.prizeType}` : '',
        prizeTier: data.prizeTier ? `${data.prizeTier}` : '',
        prizeClaimType: data.prizeClaimType ? `${data.prizeClaimType}` : '',
        prizeWonDate: data.prizeWonDate ? `${data.prizeWonDate}` : '',
        prizeClaimed: data.prizeClaimed ? data.prizeClaimed : true,
        prizeDelivered: data.prizeDelivered ? data.prizeDelivered : true,
      });
    }
  });

  return result;
};

export default doGetAllWonPrizes;
