import React, {useContext, createContext, useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Pressable, Button} from 'react-native';
import SqliteInterface from '../SqliteInterface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorageInterface from '../AsyncStorageInterface';
import database from '@react-native-firebase/database';
import {AuthContext} from '../navigation/AuthProvider';

import { useInterstitialAd, TestIds } from '@react-native-admob/admob';
import { loadOptions } from '@babel/core';


// const asInterface = new AsyncStorageInterface(); 
const sqliteInterface = new SqliteInterface();
const db = sqliteInterface.createDB();
// const key = 'counter';
const prizeTable = 'PrizeHistory';

let egg = require('../../assets/egg.png');
let backEgg = require('../../assets/egg.png');






/**
 * Home Page
 * @param navigation The navigation object
 * @returns 
 */
const HomeScreen = ( {navigation, route} ) =>  {

  const { adLoaded, adPresented, adDismissed, show, load } = useInterstitialAd(
    TestIds.INTERSTITIAL,
    {
      requestOptions: {
        requestNonPersonalizedAdsOnly: true,
      },
    }
  );

  const {logout, user} = useContext(AuthContext);

  const [count, setCount] = useState(0);
  const increment = () => { setCount((value) => value + 1) };
  
  const incrementGlobal = () => {
    database().ref('global').update({
       count: database.ServerValue.increment(1),
    });
  }

  useEffect(() => {
    console.log("count is in count useffect: " + count);
    if (count !== 0) {
      database()
        .ref(`users/${user.uid}`)
        .update({count: count})
    }

    if ((count % 5 === 0) && adLoaded) {
      // run ad animation
      
      console.log("Showing Ad!");
      console.log(adLoaded);
      console.log(adPresented);
      // play ad
      show();
      // adLoaded = false;
      console.log(adPresented);
      // load();  
      console.log(adLoaded);
    }
  }, [count]);

  useEffect(() => {
    // asInterface.clearStorage();
    // sqliteInterface.deleteTable(db, prizeTable);
    async function setHome() {
      sqliteInterface.createPrizeHistoryTable(db, prizeTable);

      try {
        let count =  await database().ref(`users/${user.uid}/count`).once('value');
        count = JSON.stringify(count);
        console.log(count);
        setCount(parseInt(count));
      } catch (err) {
        console.log(err);
      }
    }

    setHome();
  }, []);



  const displayEgg = async () => {
    increment();
    incrementGlobal();

    // TODO - delete this in prod, used for test
    if((count % 10) === 0) {
      try {
        await sqliteInterface.addToPrizeHistoryTable(db, prizeTable, "gift card", "$20 gift card", "abcd1234");
        let lol = await sqliteInterface.getAllPrizes(db, prizeTable); 
        lol = lol.map((res) => JSON.stringify(res));
        console.log("retrieved: " + lol);
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <>
    <View  style={styles.page}>
      <Text>Logged in</Text>
      <View style={styles.header}>
        <Pressable  onPress={() => navigation.navigate('PrizeHistoryScreen')}>
          <Image style={styles.storeIcon} source={require('../../assets/icons/histoory.png')}/>
        </Pressable>
        <Text>username goes here</Text>
        <Button title="log out" onPress={() => {logout()}}/>
        <Pressable onPress={() => navigation.navigate('StoreScreen')} >
          <Image style={styles.storeIcon} source={require('../../assets/icons/bag.png')}/>
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

export default HomeScreen; 
