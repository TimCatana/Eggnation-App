import firestore from '@react-native-firebase/firestore';
import {FS_AVAILABLE_PRIZES_COLLECTION_KEY} from '../../../frontend/util/Constants';

/**
 * Deletes a prize from the Available Prize collection.
 * The document to delete is identified by the prizeId.
 * @param prizeId (string) The ID of the prize to be deleted.
 */
const doDeleteAvailablePrize = async prizeId => {
  await firestore()
    .collection(FS_AVAILABLE_PRIZES_COLLECTION_KEY)
    .doc(`${prizeId}`)
    .delete();
};

export default doDeleteAvailablePrize;
