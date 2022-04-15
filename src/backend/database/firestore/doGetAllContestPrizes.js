import firestore from '@react-native-firebase/firestore';
import {FS_CONTEST_PRIZES_COLLECTION_KEY} from '../../../frontend/util/Constants';

/**
 * Get's the list of all of the contest prizes.
 * The userId is used to identify which contest prizes collection to query.
 * @param userId (string) The userId of the user
 * @returns ( { prizeId: string,
 *              prizeTitle: string,
 *              prizeDesc: string,
 *              prizeType: string,
 *              prizeTier: string,
 *              prizeClaimType: string
 *  }[] ) If contest prizes exist in the database
 *          OR
 *          ([]) If no contest prizes exist in the database
 */
const doGetAllContestPrizes = async () => {
  const result = [];

  const querySnapshot = await firestore()
    .collection(FS_CONTEST_PRIZES_COLLECTION_KEY)
    .get();

  if (querySnapshot.empty) {
    return [];
  }

  querySnapshot.forEach(snapshot => {
    result.push(snapshot.data());
  });

  return result;
};

export default doGetAllContestPrizes;
