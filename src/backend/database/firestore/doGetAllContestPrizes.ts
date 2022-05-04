import firestore from '@react-native-firebase/firestore';
import {FS_CONTEST_PRIZES_COLLECTION_KEY} from '../../../constants/Constants';
import {ContestPrizeArray} from '../../../constants/typeAliases';

/**
 * Get's the list of all of the contest prizes.
 * The userId is used to identify which contest prizes collection to query.
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
const doGetAllContestPrizes = async (): Promise<ContestPrizeArray> => {
  const result: ContestPrizeArray = [];

  const querySnapshot = await firestore()
    .collection(FS_CONTEST_PRIZES_COLLECTION_KEY)
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

export default doGetAllContestPrizes;
