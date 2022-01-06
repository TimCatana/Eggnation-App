import React, {useContext, useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Pressable, Button} from 'react-native';
import SqliteInterface from '../SqliteInterface';
import database from '@react-native-firebase/database';
import {AuthContext} from '../navigation/AuthProvider';
import { useInterstitialAd, TestIds } from '@react-native-admob/admob';

// TODO - get splashscreen working again

// TODO - I'm thinking of using tabs instead of stack since I want 5 screens: Home, store, wonPrizes, AvailablePrize, MostTapsLeaderboard

// TODO - get rid of sqlite and use firebase database for prizes
const sqliteInterface = new SqliteInterface();
const db = sqliteInterface.createDB();
const prizeTable = 'PrizeHistory';

let egg = require('../../assets/egg.png');
let backEgg = require('../../assets/egg.png');


/**
 * Home Page
 * @param navigation
 * @returns 
 */
const HomeScreen = ( {navigation} ) =>  {
  const {logout, user} = useContext(AuthContext);
  const [count, setCount] = useState(0);

  const [isFirstTap, setIsFirstTap] = useState(true); // first tap for when user opens the app.
  const [initialized, setInitialized] = useState(false);

  const {adLoaded, adDismissed, show, load, adPresented} = useInterstitialAd(TestIds.INTERSTITIAL, { requestOptions: { requestNonPersonalizedAdsOnly: true, } } );

  const increment = () => {
    // increment local
    setCount((value) => value + 1) 

    //increment global
    database().ref('global').update({
      count: database.ServerValue.increment(1),
     });
    
  };

  useEffect(() => {
    if (count !== 0) {
      database()
        .ref(`users/${user.uid}`)
        .update({count: count})
    }

    // TODO - on the first add, show a screen showing that ads will be shown and the reason for them etc...
    if (!isFirstTap && (count !==0) && (count % 5 === 0) && adLoaded) {
      // TODO - run ad animation

      // TODO - pause clicking
   
      // TODO - play ad
      try {
        console.log("Ad shown!");
        show();
      } catch (err) {
        console.log("Ad failed to show! " + err);
      }

      console.log("Ad shown!");
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
        setInitialized(true);
      } catch (err) {
        console.log(err);
      }
    }

    setHome();
  }, []);


  const displayEgg = async () => { 
    if(isFirstTap) { 
      setIsFirstTap(false);
    }

    increment();

    console.log("Ad dismissed: " + adDismissed);
    console.log("Ad loaded: " + adLoaded);
    console.log("Ad Presented: " + adPresented);
    
    if(adDismissed || !adLoaded) {
      load();
    }

    // TODO - delete this in prod, used for test
    // TODO - make this update in firestore
    if((count % 10) === 0) {
      // try {
      //   await sqliteInterface.addToPrizeHistoryTable(db, prizeTable, "gift card", "$20 gift card", "abcd1234");
      //   let lol = await sqliteInterface.getAllPrizes(db, prizeTable); 
      //   lol = lol.map((res) => JSON.stringify(res));
      //   console.log("retrieved: " + lol);
      // } catch (err) {
      //   console.log(err)
      // }
    }
  }


  // TODO probably run initialization while splashscreen is being loaded if possible?  
  if(!initialized) return null;

  return (
    <>
    <View  style={styles.page}>
      <Text>Logged in</Text>
      <View style={styles.header}>
        <Pressable  onPress={() => navigation.navigate('PrizeHistory')}>
          <Image style={styles.storeIcon} source={require('../../assets/icons/histoory.png')}/>
        </Pressable>
        <Text>username goes here</Text>
        <Button title="log out" onPress={() => {logout()}}/>
        <Pressable onPress={() => navigation.navigate('Store')} >
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
