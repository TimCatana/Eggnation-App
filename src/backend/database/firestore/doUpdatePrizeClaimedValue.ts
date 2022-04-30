import firestore from '@react-native-firebase/firestore';
import {
  FS_PRIZE_CLAIMED_FIELD_KEY,
  FS_USER_WON_PRIZES_COLLECTION_KEY,
  FS_WON_PRIZES_COLLECTION_KEY,
} from '../../../constants/Constants';

/**
 */
const doUpdatePrizeClaimedValue = async (userId: string, prizeId: string) => {
  await firestore()
    .collection(FS_WON_PRIZES_COLLECTION_KEY)
    .doc(`${userId}`)
    .collection(FS_USER_WON_PRIZES_COLLECTION_KEY)
    .doc(`${prizeId}`)
    .update(FS_PRIZE_CLAIMED_FIELD_KEY, true);
};

export default doUpdatePrizeClaimedValue;
