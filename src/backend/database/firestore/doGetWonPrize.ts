import firestore from '@react-native-firebase/firestore';
import {
  FS_WON_PRIZES_COLLECTION_KEY,
  FS_USER_WON_PRIZES_COLLECTION_KEY,
} from '../../../constants/Constants';
import {WonPrize} from '../../../constants/typeAliases';

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
 *              prizeClaimType: string,
 *              prizeWonDate: string,
 *              prizeClaimed: boolean,
 *              prizeDelivered: boolean,
 *              prizeWinnerId: string }) if won prize exists in database
 *          OR
 *          (null) if won prize does not exist in database
 */
const doGetWonPrize = async (
  userId: string,
  prizeId: string,
): Promise<WonPrize | null> => {
  const documentSnapshot = await firestore()
    .collection(FS_WON_PRIZES_COLLECTION_KEY)
    .doc(`${userId}`)
    .collection(FS_USER_WON_PRIZES_COLLECTION_KEY)
    .doc(`${prizeId}`)
    .get();

  if (documentSnapshot.exists) {
    const data = documentSnapshot.data();

    if (data) {
      return {
        prizeId: data.prizeId ? `${data.prizeId}` : '',
        prizeWinnerId: data.prizeWinnerId ? `${data.prizeWinnerId}` : '',
        prizeTitle: data.prizeTitle ? `${data.prizeTitle}` : '',
        prizeDesc: data.prizeDesc ? `${data.prizeDesc}` : '',
        prizeType: data.prizeType ? `${data.prizeType}` : '',
        prizeTier: data.prizeTier ? `${data.prizeTier}` : '',
        prizeClaimType: data.prizeClaimType ? `${data.prizeClaimType}` : '',
        prizeWonDate: data.prizeWonDate ? `${data.prizeWonDate}` : '',
        prizeClaimed:
          data.prizeDelivered !== null && data.prizeDelivered !== undefined
            ? data.prizeClaimed
            : true,
        prizeDelivered:
          data.prizeDelivered !== null && data.prizeDelivered !== undefined
            ? data.prizeDelivered
            : true,
      };
    } else {
      return null;
    }
  } else {
    return null;
  }
};

export default doGetWonPrize;
