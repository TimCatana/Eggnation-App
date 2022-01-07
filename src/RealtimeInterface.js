import database from '@react-native-firebase/database';

const globalCollection = 'global';
const usersCollection = 'users';

class RealtimeInterface {

  updateGlobalCount() {
    try {
      database()
      .ref(`${globalCollection}`)
      .update({
        count: database.ServerValue.increment(1),
      })
    } catch (err) {
      console.log('failed to increment global count: ' + err);
    }
  }



  updateUserCount(userId) {
    try {
      database()
      .ref(`${usersCollection}/${userId}`)
      .update({
        count: database.ServerValue.increment(1),
      })
    } catch (err) {
      console.log('failed to increment global count: ' + err);
    }
  }



}

export default RealtimeInterface;
