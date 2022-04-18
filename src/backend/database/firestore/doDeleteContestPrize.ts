import firestore from '@react-native-firebase/firestore';
import {FS_CONTEST_PRIZES_COLLECTION_KEY} from '../../../constants/Constants';

/**
 * Deletes a prize from the Contest Prize collection.
 * The document to delete is identified by the prizeId.
 * @param prizeId (string) The ID of the prize to be deleted.
 */
const doDeleteContestPrize = async (prizeId: string) => {
  await firestore()
    .collection(FS_CONTEST_PRIZES_COLLECTION_KEY)
    .doc(`${prizeId}`)
    .delete();
};

export default doDeleteContestPrize;
