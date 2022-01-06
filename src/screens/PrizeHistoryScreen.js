import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import { useEffect, useState } from 'react/cjs/react.development';
import SqliteInterface from '../SqliteInterface';
import StoreCards from '../components/PrizeHistoryCards';

// TODO - change this to use firestore rather than local sqlite

const sqliteInterface = new SqliteInterface();
const db = sqliteInterface.createDB()
const prizeTable = 'PrizeHistory';

/**
 * PrizeHistory Page
 */
const PrizeHistoryScreen = () =>  {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    console.log("history " + history);
  }, [history]);

  useEffect(() => {
    async function getHistory () {
      try {
        let result = await sqliteInterface.getAllPrizes(db, prizeTable);
        result = await result.map((res) => JSON.stringify(res)); 
        result === null ? console.log("res is null") : setHistory(result); 
      } catch (err) {
        console.log(err);
      }
    }
    getHistory();
  }, []);

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Prize History</Text>
      <StoreCards
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
