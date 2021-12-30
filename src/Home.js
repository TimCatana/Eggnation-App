import React, {useContext, createContext, useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import SqliteInterface from './SqliteInterface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorageInterface from './AsyncStorageInterface';

const asInterface = new AsyncStorageInterface(); 
const sqliteInterface = new SqliteInterface();
const db = sqliteInterface.createDB();
const key = 'counter';
const prizeTable = 'PrizeHistory';

let egg = require('../assets/egg.png');
let backEgg = require('../assets/egg.png');

/**
 * Home Page
 * @param navigation The navigation object
 * @returns 
 */
const Home = ( {navigation} ) =>  {
  const [count, setCount] = useState(0);
  const increment = () => { setCount((value) => value + 1); };

  useEffect(() => {
    if (count !== 0) {
      asInterface.storeData(key, `${count}`);
    }
  }, [count]);

  useEffect(() => {
    // asInterface.clearStorage();
    // sqliteInterface.deleteTable(db, prizeTable);
    async function setHome() {
      sqliteInterface.createPrizeHistoryTable(db, prizeTable);

      try {
        let result = await asInterface.getData(key);
        result == null ? console.log("res is null") : setCount(parseInt(result));
      } catch (err) {
        console.log(err);
      }
    }

    setHome();
  }, []);

  const displayEgg = async () => {
    increment();
    
    if ((count % 5) === 0) {
      //play ad
    }

    // TODO - delete this in prod, used for test
    if((count % 10) === 0) {
      try {
        await sqliteInterface.addToPrizeHistoryTable(db, prizeTable, "$20 gift card", "abcd1234");
        let lol = await sqliteInterface.getAllPrizes(db, prizeTable); 
        console.log("retrieved: " + lol);
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <>
    <View  style={styles.page}>
      <View style={styles.header}>
        <Pressable  onPress={() => navigation.navigate('PrizeHistory')}>
          <Image style={styles.storeIcon} source={require('../assets/icons/histoory.png')}/>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Store')} >
          <Image style={styles.storeIcon} source={require('../assets/icons/bag.png')}/>
        </Pressable>
      </View>
      <View style={styles.counter}>
        <Text style={styles.text}>{count}</Text>
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
    flexDirection: "column",
    backgroundColor: 'white'
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    margin: 3,
   }
});

export default Home; 
