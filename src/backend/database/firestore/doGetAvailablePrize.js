import firestore from '@react-native-firebase/firestore';
import {FS_AVAILABLE_PRIZES_COLLECTION_KEY} from '../../../frontend/util/Constants';

/**
 * Get's a single available prize from the database.
 * @param prizeId The Id of the prize to get from the database. 
 * @returns (//TODO add the exact JSON type of prize returned)
 */
const doGetAvailablePrize = async prizeId => {
  return await firestore()
    .collection(FS_AVAILABLE_PRIZES_COLLECTION_KEY)
    .doc(`${prizeId}`)
    .get();
};

export default doGetAvailablePrize;
