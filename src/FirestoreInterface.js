import firestore from '@react-native-firebase/firestore';

const usersCollection = 'users';

// TODO - return ERROR objects.
class FirestoreInterface {


  createUser(userID, username, email) {
    try {
      firestore()
      .collection(usersCollection)
      .doc(userID)
      .set({
        username: username,
        email: email,
        // userImg: null,
        emailVerified: false,
        created: firestore.Timestamp.fromDate(new Date()),
      })
    } catch (err) {
      console.log(`Failed to create user`, err);
    }
    
  }


  addPrizeToHistory(userId, name, type, id) {
    try {
      firestore()
      .collection(`${usersCollection}`)
      .doc(`${userId}`)
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


  async getPrizeHistory(userId) {
    try {
      const result = await firestore().
      collection(`${usersCollection}`).
      doc(userId)
      .get()
      .then(documentSnapshot => { return documentSnapshot.get('prizes') });
      return result
    } catch (err) {
      console.log(`Failed to get prize history: `, err);
    }
  }
  

}

export default FirestoreInterface
