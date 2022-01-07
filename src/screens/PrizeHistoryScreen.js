import React, { useEffect, useState, useContext } from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import PrizeHistoryCards from '../components/PrizeHistoryCards';
import {AuthContext} from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';

// TODO - add shimmering effect while prizes are loading

/**
 * PrizeHistory Page
 */
const PrizeHistoryScreen = () =>  {
  const [history, setHistory] = useState([]);
  const {user} = useContext(AuthContext);

  useEffect(() => {
    console.log("history " + history);
  }, [history]);

  useEffect(() => {
    async function getHistory () {

      try {
        let result = await firestore().collection('users').doc(user.uid)// .collection('prizes').doc("prizeID2")
        .get()
        .then(documentSnapshot => documentSnapshot.get('prizes'))
        .catch(error => {
            console.log('Something went wrong fetching prize to firestore: ', error);
        });
        result = await result.map((res) => JSON.stringify(res)); 
        result === null ? console.log("res is null") : setHistory(result); 
      } catch (err) {
        console.log('Something went wrong fetching prize to firestore: ', err);
      }
    }
    getHistory();
  }, []);

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Prize History</Text>
      <PrizeHistoryCards
        data={history}
      />
    </View>
  );
}

/**
 * Styles
 */
const styles = StyleSheet.create({
   body: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, // TODO - add this to global style
     flex: 1,
     backgroundColor: 'white',
     justifyContent: 'center',
     alignItems: 'center',
   },
   text: {
     fontSize: 50,
     color: 'black'
   }
});

export default PrizeHistoryScreen;
