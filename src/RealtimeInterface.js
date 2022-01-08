import database from '@react-native-firebase/database';

const globalCollection = 'global';
const usersCollection = 'users';

// TODO - return ERROR objects.
class RealtimeInterface {


  createUser(userId, username) {
    try {
      database()
      .ref(`${usersCollection}/${userId}`)
      .set({
        count: 0, 
        username: username
      })
    } catch (err) {
      return Error('failed to create user count: ' + err);
    }
  }



  updateGlobalCount() {
    try {
      database()
      .ref(`${globalCollection}`)
      .update({
        count: database.ServerValue.increment(1),
      })
    } catch (err) {
      return Error('failed to increment global count: ' + err);
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
      return Error('failed to increment user count: ' + err);
    }
  }



}

export default RealtimeInterface;
