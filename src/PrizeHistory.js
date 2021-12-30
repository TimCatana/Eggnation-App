import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { useEffect, useState } from 'react/cjs/react.development';
import SqliteInterface from './SqliteInterface';

const sqliteInterface = new SqliteInterface();
const db = sqliteInterface.createDB()
const prizeTable = 'PrizeHistory';

/**
 * PrizeHistory Page
 */
const PrizeHistory = () =>  {
  const [history, setHistory] = useState([]);


  useEffect(() => {

    // async function getHistory () {
    //   let result = await sqliteInterface.getAllPrizes(db, prizeTable);
    //   console.log(result)
    // }

    // getHistory();

  })

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Prize History</Text>
    </View>
  );
}

/**
 * Styles
 */
const styles = StyleSheet.create({
   body: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
   },
   text: {
     fontSize: 50,
     color: 'black'
   }
});

export default PrizeHistory;
