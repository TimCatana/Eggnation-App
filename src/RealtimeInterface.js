import database from '@react-native-firebase/database';

const globalCollection = 'global';
const usersCollection = 'users';
const prizeCollection = 'prizes';

// TODO - return ERROR objects.
class RealtimeInterface {

  async getAvailablePrizes() {
    try {
      const result = await database()
      .ref(`${prizeCollection}`)
      .once('value')
      .then(snapshot => { return snapshot.val() });
      return result;
    } catch (error) {
      console.log('failed to get available prizess ' + err);
    }
  }


  async checkIfPrizeAvailable(rng) {
    try {
      const result = await database()
      .ref(`${prizeCollection}/${rng}`)
      .once('value')
      .then(snapshot => { return snapshot.val() });
      return result;
    } catch (err) {
      console.log('failed to read prizesr ' + err);
      return Error('failed to get prize document: ' + err);
    }
  }


  async removePrize(rng) {
    try {
      await database()
      .ref(`${prizeCollection}/${rng}`)
      .remove();
    } catch (err) {
      console.log(`failed to remove ${rng} from ${prizesCollection}: ` + err); 
    }
  }


 async createUser(userId, username) {
    try {
      await database()
      .ref(`${usersCollection}/${userId}`)
      .set({
        count: 0, 
        username: username
      })
    } catch (err) {
      return Error('failed to create user count: ' + err);
    }
  }


  async updateGlobalCount() {
    try {
      await database()
      .ref(`${globalCollection}`)
      .update({
        count: database.ServerValue.increment(1),
      })
    } catch (err) {
      return Error('failed to increment global count: ' + err);
    }
  }


  async updateUserCount(userId) {
    try {
      await database()
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
