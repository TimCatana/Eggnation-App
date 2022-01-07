import React, {useContext, useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Pressable, Button} from 'react-native';
import database from '@react-native-firebase/database';
import {AuthContext} from '../navigation/AuthProvider';
import { useInterstitialAd, TestIds } from '@react-native-admob/admob';

import FirestoreInterface from '../FirestoreInterface';

import firestore from '@react-native-firebase/firestore';


// TODO - get splashscreen working again

// TODO - I'm thinking of using tabs instead of stack since I want 5 screens: Home, store, wonPrizes, AvailablePrize, MostTapsLeaderboard

let egg = require('../../assets/egg.png');
let backEgg = require('../../assets/egg.png');

const fsi = new FirestoreInterface();


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
  
  /**
   * Increment local and global
   */
  const increment = () => {
    setCount((value) => value + 1) 

    database().ref('global').update({
      count: database.ServerValue.increment(1),
     });
  };









  const getRNGDocument = async (rng) => {
    try {
      let result = await fsi.getAvailablePrizes(rng);

      if(result) {
        // await fsi.removePrize(rng); // TODO - uncomment this in production
        console.log('removing prize');
      } else {
        result = null;
      }

      return result;
    } catch (error) {
      console.log("Failed to test winner " + error);
      return null;
    }
  }







  const modifyPrizes = async (rng) => {
    const prize = await getRNGDocument(rng);
    console.log('modifyPrizes prize: ' + prize);

    if(!prize) {
      console.log('prize is null - running lose animation');
    } else {
      console.log('prize exists - adding prize to user prize history');
      fsi.addPrizeToHistory(user.uid, prize.prizeName, prize.prizeType, prize.prizeID);
    }
  }


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
    } else {
      let rng = Math.floor((Math.random() * 5) + 1);
      console.log(rng);
      modifyPrizes(rng);
    }

  }, [count]);






  useEffect(() => {
    // asInterface.clearStorage();
    async function setHome() {
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






  /**
   * @note once increment runs, the count useEffect begins to run. all the main logic should run in there? 
   */
  const displayEgg = async () => {    
    if(isFirstTap) { 
      setIsFirstTap(false);
    }

    if(adDismissed || !adLoaded) {
      load();
    }
    
    increment();

    console.log("Ad dismissed: " + adDismissed);
    console.log("Ad loaded: " + adLoaded);
    console.log("Ad Presented: " + adPresented);   
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
