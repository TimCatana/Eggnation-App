import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';

import SQLite from 'react-native-sqlite-storage'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setDisabled } from 'react-native/Libraries/LogBox/Data/LogBoxData';

const db = SQLite.openDatabase(
  { name: 'MainDB', location: 'default', },
  () => { },
  error => { console.log(error) }
);


let egg = require('../assets/egg.png');
let backEgg = require('../assets/egg.png');
 


const key = 'totalBreaks';


const Home = ( {navigation} ) =>  {
  const [tap, setTap] = useState(0);
  const [totalBreaks, setTotalBreaks] = useState(0);

  useEffect(() => { 
    setCounter();
  }, []);

  /**
   * Sets the counter read from asyncstorage on mount
   */
  async function setCounter () {
    let result = await getData(key).then((response) => response);

    if(result === null) {
      storeData(key, '0');
      result = await getData(key).then((response) => response);
    }

    setTotalBreaks(result)
  }
  
/**
 * Store the totalbreak value in async storage for persistence
 * @param {string} key the key value of the total break counter (set at the top)
 * @param {string} value the value of the total break counter
 */
  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * get the value of a given key in asyncstorage
   * @param {string} key 
   * @returns the value at the key in asyncstorage
   */
  const getData = async (key) => {
    try {
      return await AsyncStorage.getItem(key).then((response) => response);
    } catch(e) {
      console.log(e);
    }
  }

  // const createPrizeHistoryTable = () => {
  //   db.transaction((tx) => {
  //       tx.executeSql(
  //           "CREATE TABLE IF NOT EXISTS "
  //           + "PrizeHistory "
  //           + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Type TEXT, PrizeID Text);"
  //       )
  //   })
  // }

  const displayEgg = async () => {
    setTap(tap + 1);
 
    if(tap === 1) {
      egg = require('../assets/egg_tap_1.png');
    } else if(tap == 2) {
      egg = require('../assets/egg_tap_2.png');
      //Crack animation

      let currentCount = await getData(key);
      let incrementCount = parseInt(currentCount) + 1;

      await storeData(key, incrementCount.toString());
      setTotalBreaks(await getData(key));

      egg = require('../assets/egg.png');
      setTap(1);
    }
  }

  return (
    <>
    <View  style={styles.page}>
      <View style={styles.header}>
      <Pressable onPress={() => navigation.navigate('Store')} >
        <Image style={styles.storeIcon} source={require('../assets/house.png')}/>
        </Pressable>
      </View>
      <View style={styles.counter}>
        <Text style={styles.text}>{totalBreaks}</Text>
      </View>
      <View style={styles.body}>
        <Pressable style={styles.press} onPress={displayEgg} >
          <View style = {styles.backgroundContainer}>
            <Image style={styles.egg} source={backEgg}/>
          </View>
          <View>
            <Image style={styles.egg} source={egg}/>
          </View>
        </Pressable>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  page: {
    flex: 1,
    flexDirection: "column"
  },
  header: {
    // flex: 1,
    alignItems: 'flex-end',
  },
   body: {
     flex: 1,
     justifyContent: 'flex-start',
     alignItems: 'center',
   },
   counter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   }, 
   egg: {
    height: 250,
    width: 200
   },
   text: {
     fontSize: 50,
     color: 'black'
   },
   storeIcon: {
    width: 50,
    height: 50,
   }
});

export default Home;
