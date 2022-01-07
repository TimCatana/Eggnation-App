import React, {useContext, useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Pressable, Button} from 'react-native';
import database from '@react-native-firebase/database';
import {AuthContext} from '../navigation/AuthProvider';
import { useInterstitialAd, TestIds } from '@react-native-admob/admob';

import FirestoreInterface from '../FirestoreInterface';
import RealtimeInterface from '../RealtimeInterface';


// TODO - get splashscreen working again

// TODO - I'm thinking of using tabs instead of stack since I want 5 screens: Home, store, wonPrizes, AvailablePrize, MostTapsLeaderboard

let egg = require('../../assets/egg.png');
let backEgg = require('../../assets/egg.png');

const fsi = new FirestoreInterface();
const rti = new RealtimeInterface();

/**
 * Home Page
 * @param navigation
 * @returns 
 */
const HomeScreen = ( {navigation} ) =>  {
  const {logout, user} = useContext(AuthContext);
  const [count, setCount] = useState(0);

  const [isFirstTap, setIsFirstTap] = useState(true); // first tap for when user opens/reopens the app.
  const [initialized, setInitialized] = useState(false);

  const {adLoaded, adDismissed, show, load, adPresented} = useInterstitialAd(
    TestIds.INTERSTITIAL, 
    { requestOptions: { requestNonPersonalizedAdsOnly: true, } } );
  
  /**
   * Increment user and global count
   */
  const increment = () => {
    rti.updateUserCount(user.uid);
    rti.updateGlobalCount();
  };

  /**
   * onMount subscribe to firestore 'users/<userID>/count' value to set local count equal to firestore value.
   * Count is set when mounted and when subscription value is changed. 
   * @return unsubscribe from listening to 'users/<userID>/count'
   */
  useEffect(() => {
    try {
      const onValueChange = database()
      .ref(`users/${user.uid}/count`)
      .on('value', snapshot => {
        setCount(snapshot.val());
      })
      setInitialized(true);
      return () => database().ref(`users/${user.uid}/count`).off('value', onValueChange); // stop listening on unmount
    } catch (err) {
      console.log('Failed to initialize home screen: ' + err);
    }
  }, []); 
  
  /**
   * Whenever count increases, it means the screen was tapped.
   * When the screen is tapped, either an AD appears or RNG value result appears.
   * RNG value is used to determine whether the user won or not.
   * This hook runs the major app functionality.
   */
  useEffect(() => {
    // TODO - on the first add, show a screen showing that ads will be shown and the reason for them etc...
    if(initialized && !isFirstTap) {
      if ((count !==0) && (count % 5 === 0) && adLoaded) {
        // TODO - run ad animation
        // TODO - pause clicking
        // TODO - play ad
        try {
          show();
        } catch (err) {
          console.log("Ad failed to show! " + err);
        }
      } else {
        let rng = Math.floor((Math.random() * 100000) + 1);
        console.log(rng);
        modifyPrizes(rng);
      }
    }
  }, [count]);

  /**
 * This function is only won when a user wins a prize.
 * Deletes prize from available prizes collection.
 * Adds prize to users prize history array.
 * @param {number} rng a randomly generated number 
 */
  const modifyPrizes = async (rng) => {
    const prize = await getRNGDocument(rng);

    if(!prize) {
      console.log('prize is null - running lose animation');
    } else {
      console.log('prize exists - adding prize to user prize history');
      fsi.addPrizeToHistory(user.uid, prize.prizeName, prize.prizeType, prize.prizeID);
    }
  }

  /**
   * Queries the available prizes collection for a document with a name of ${rng}.
   * Used to determine if the user won or not.
   * @param {number} rng a randomly generated number 
   * @returns null - if prize does not exist (the user did not 'win' this tap)
   *          prize - if the prize exists (the user 'won' this tap)
   */
  const getRNGDocument = async (rng) => {
    try {
      let result = await fsi.getAvailablePrizes(rng);

      if(result) {
        console.log('removing prize');
        await fsi.removePrize(rng); // TODO - uncomment this in production
      } else {
        result = null;
      }

      return result;
    } catch (error) {
      console.log("Failed to test winner " + error);
      return null;
    }
  }

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
