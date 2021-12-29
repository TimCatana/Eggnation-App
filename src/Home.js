import React, {useEffect, useState, Component} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import SqliteInterface from './SqliteInterface';
import AsyncStorageInterface from './AsyncStorageInterface';
import AsyncStorage from '@react-native-async-storage/async-storage';

const asyncStorageInterface = new AsyncStorageInterface();
const sqliteInterface = new SqliteInterface();
const db = sqliteInterface.createDB()
const key = 'counter';
const key2 = 'firstOpen'
const prizeTable = 'PrizeHistory';
let egg = require('../assets/egg.png');
let backEgg = require('../assets/egg.png');


/**
 * Home Page
 * @param navigtion The navigation object 
 * @returns 
 */

const Home = ( {navigation} ) =>  {
  const [tap, setTap] = useState(0);
  const [totalBreaks, setTotalBreaks] = useState(0);

  useEffect(() => { 
      sqliteInterface.createPrizeHistoryTable(db, prizeTable);
  }, []);

  const displayEgg = async () => {
      setTap(tap + 1);
 
      if(tap === 1) {
        egg = require('../assets/egg_tap_1.png');

        if((totalBreaks % 10) === 0 && tap) { 
                sqliteInterface.addToPrizeHistoryTable(db, prizeTable, "$20 gift card", "abcdef1234")
        }
      } else if (tap === 2) {
        egg = require('../assets/egg_tap_2.png');
        //Crack animation

        egg = require('../assets/egg.png');
        
        setTap(1);
        setTotalBreaks(totalBreaks + 1);
      }

      console.log(tap);

      // sqliteInterface.getAllPrizes(db, prizeTable, setRetrieved);
      // console.log("retrieved: " + retrieved);
    }

    return (
            <>
            <View  style={styles.page}>
              <View style={styles.header}>
                <Pressable  onPress={() => navigation.navigate('PrizeHistory')}>
                  <Image style={styles.storeIcon} source={require('../assets/present.png')}/>
                </Pressable>
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
    flexDirection: "column",
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
   }
});

export default Home;
