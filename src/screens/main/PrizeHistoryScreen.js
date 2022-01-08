import React, { useEffect, useState, useContext } from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import PrizeHistoryCards from '../../components/PrizeHistoryCards';
import firestore from '@react-native-firebase/firestore';
import SqliteInterface from '../../SqliteInterface';
import {useSelector} from 'react-redux'


const sqlite = new SqliteInterface();
// const db = sqlite.createDB();
// const prizeTable = 'wonPrizes'

// TODO - add shimmering effect while prizes are loading

/**
 * PrizeHistory Page
 */
const PrizeHistoryScreen = () =>  {
  const [history, setHistory] = useState([]);
  const {user} = useSelector(state => state.userReducer)

  useEffect(() => {
    console.log("history " + history);
  }, [history]);

  useEffect(() => {
    async function getHistory () {
      try {
        let result = await firestore().collection('users').doc(user.uid)
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

      // TODO - may use sqlite for faster loading later on...
      // try {
      //   // sqlite.deleteTable(db, prizeTable);
      //   sqlite.createPrizeHistoryTable(db, prizeTable);
      //   // sqlite.addToPrizeHistoryTable(db, prizeTable, "gift card", "$20 gift card", "d3423453eff45tgretegafsddasdsdafrg", false);
      //   let prizes = await sqlite.getAllPrizes(db, prizeTable);
      //   prizes = prizes.map((res) => JSON.stringify(res));
      //   setHistory(prizes);
      // } catch (err) {
      //   console.log('error: ' + err);
      // }

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
