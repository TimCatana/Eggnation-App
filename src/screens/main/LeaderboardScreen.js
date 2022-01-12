import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import database from '@react-native-firebase/database';
import LeaderboardCards from '../../components/LeaderboardCards';

// TODO - I will no longer have a count leaderboard. Maybe I'll change it to a global prizes one history board
 
const LeaderboardScreen = () =>  {
  const [globalCountBoard, setGlobalCountBoard] = useState(0);
  const [leaderboard, setLeaderBoard] = useState([]);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    try {
      const onValueChange = database() // TODO - find a way to move all this stuff (other than the getTopFive) to a function
      .ref(`global/count`)
      .on('value', snapshot => {
        setGlobalCountBoard(snapshot.val())
      })
      setInitialized(true);
      getTopFive();
      return () => database().ref(`global/count`).off('value', onValueChange); // stop listening on unmount
    } catch (err) {
      console.log('Failed to initialize home screen: ' + err);
    }
  }, []);


  const getTopFive = async () => {
    const result = await database()
    .ref(`users`)
    .once('value')
    .then(snapshot => { return snapshot.val() });

    const topCounts = [];
    for(let user in result) {
      let userInfo = result[user];
      
      if(topCounts.length < 3) {
        console.log('in < 3');
        topCounts.push(userInfo);
        topCounts.sort(function(a,b){return (b.count - a.count)}); // sorts by count where greatest count is index 0
        console.log(topCounts);
      } else {
        console.log('in > 3');
        for(let winner of topCounts) {
          if(userInfo.count > winner.count) {
            let indexToSwap = topCounts.indexOf(winner);
            topCounts[indexToSwap] = userInfo;
            break;
          }
        }

      }

    }
    console.log(topCounts);
    setLeaderBoard(topCounts);
  }



  if(!initialized) return null;

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{globalCountBoard}</Text>
      <LeaderboardCards
        data={leaderboard}
        getHistoryFunc={getTopFive}
        refreshing={false}
      />      
    </View>
  );
}

const styles = StyleSheet.create({
   body: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
   },
   text: {
     fontSize: 50,
   }
});

export default LeaderboardScreen;
