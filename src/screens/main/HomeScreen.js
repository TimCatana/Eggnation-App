import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Pressable, Button} from 'react-native';
import database from '@react-native-firebase/database';
import { useInterstitialAd, TestIds } from '@react-native-admob/admob';

import FirestoreInterface from '../../FirestoreInterface';
import RealtimeInterface from '../../RealtimeInterface';

import {useSelector, useDispatch} from 'react-redux'
import {setCount, logout} from '../../redux/actions'

// TODO - get splashscreen working again

let egg = require('../../../assets/egg.png');
let backEgg = require('../../../assets/egg.png');

const fsi = new FirestoreInterface();
const rti = new RealtimeInterface();

// TODO - get rid of usercount in database. I will only have a local count
// TODO - the user will only have 1000 clicks a day to ensure they don't waste their time on this app but also ensures that I make money
// TODO - This also helps with the potential database connectivity issues I was worried about and make the code look nicer as a whole. 
// TODO - The current database user count way I'm doing this is not necessarily a useful feature that provides value to my app.

/**
 * Home Page
 * @param navigation
 * @returns 
 */
const HomeScreen = ( {navigation} ) =>  {
  const {count, user} = useSelector(state => state.userReducer)
  const dispatch = useDispatch();

  const [isFirstTap, setIsFirstTap] = useState(true); // first tap for when user opens/reopens the app.
  const [initialized, setInitialized] = useState(false);

  const {adLoaded, adDismissed, show, load, adPresented} = useInterstitialAd(
    TestIds.INTERSTITIAL, 
    { requestOptions: { requestNonPersonalizedAdsOnly: true, } } );
  
  /**
   * Increment user and global count
   */
  const increment = () => {
    rti.updateUserCount(user.uid); // TODO - use async storage since I'm going to get rid of the database user count functionality since count will reset every 24 hours
    rti.updateGlobalCount();
  };

  /**
   * onMount subscribe to firestore 'users/<userID>/count' value to set local count equal to firestore value.
   * Count is set when mounted and when subscription value is changed. 
   * @return unsubscribe from listening to 'users/<userID>/count'
   * @note had some problems moving the listener to the RealtimeDatabaseInterface. The return value is off. I need to "pass by reference" as it were, but I'm not sure how to do that.
   */
  useEffect(() => {
    try {
      const onValueChange = database() // TODO - get rid of this as I'm going to get rid of the database user count functionality since count will reset every 24 hours
      .ref(`users/${user.uid}/count`)
      .on('value', snapshot => {
        dispatch(setCount(snapshot.val()))
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
      // fsi.addPrizeToHistory(user.uid, prize.prizeName, prize.prizeType, prize.prizeID); // TODO - uncomment in production
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
      let result = await rti.checkIfPrizeAvailable(rng);
     
      if(result) {
        console.log('removing prize');
        // await rti.removePrize(rng); // TODO - uncomment in production
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
      <View style={styles.header}>
        <Text>username goes here</Text>
        <Button title="log out" onPress={() => {dispatch(logout())}}/>
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
