import firestore from '@react-native-firebase/firestore';


const usersCollection = 'users';
const prizesCollection = 'AvailablePrizes';


class FirestoreInterface {



  addPrizeToHistory(userId, name, type, id) {
    try {
      firestore()
      .collection(usersCollection)
      .doc(userId)
      .update({
        prizes: firestore.FieldValue.arrayUnion({
          prizeName: name, 
          prizeType: type, 
          dateWon: firestore.Timestamp.fromDate(new Date()), 
          prizeID: id, 
          prizeClaimed: false
        })
      })
    } catch (err) {
      console.log(`Failed to add prize to user prize history in ${usersCollection}: `, err);
    }
  }

  


  async getAvailablePrizes(documentName) {
    try {
      let result = await firestore()
      .collection(`${prizesCollection}`)
      .doc(`${documentName}`)
      .get()
      .then(documentSnapshot => documentSnapshot.data())

      console.log('result in getAvailablePrizes: ' + JSON.stringify(result));

      return result;
    } catch (err) {
      console.log(`Failed to get prize from ${prizesCollection} collection: `, err);
    }
  }




  removePrize(documentName) {
    try {
      firestore()
      .collection(prizesCollection)
      .doc(`${documentName}`)
      .delete()
    } catch (err) {
      console.log(`failed to remove ${documentName} from ${prizesCollection}: ` + err); 
    }
  }



















}

export default FirestoreInterface
