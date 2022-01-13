import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Pressable, Button} from 'react-native';
import { useInterstitialAd, TestIds } from '@react-native-admob/admob';
import AsyncStorage from '@react-native-async-storage/async-storage'
import dayjs from 'dayjs';

import FirestoreInterface from '../../FirestoreInterface';
import RealtimeInterface from '../../RealtimeInterface';

import {useSelector, useDispatch} from 'react-redux'
import {logout} from '../../redux/actions'

// TODO - get splashscreen working again

const dateKey = 'date';

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
  const dispatch = useDispatch();

  const [isFirstTap, setIsFirstTap] = useState(true); // first tap for when user opens/reopens the app.
  const [initialized, setInitialized] = useState(false);
  const [count, setCount] = useState(1000);

  const {adLoaded, adDismissed, show, load, adPresented} = useInterstitialAd(
    TestIds.INTERSTITIAL, 
    { requestOptions: { requestNonPersonalizedAdsOnly: true, } } );
  
  /**
   * Increment user and global count
   */
  const doCountUpdates = () => {
  setCount((count) => count + -1);  
  rti.updateGlobalCount();
  };

  /**
   * onMount, if it passed 12 hours, reset the counter to 1000.
   * if it has not passed 12 hours, then continue from where the user left off
   * once the user has 0 clicks left, they must wait until the 12 hour period has passed for their taps to reset 
   */
  useEffect(() => {
    initCounter();
  }, []); 
  
  /**
   * The timer will reset to 1000 every 12 hours. 
   * I need to keep track of how long it's been since the user last opened the app. I use AsyncStorage and dayjs for that.
   * When the user first logs in, asyncStorage is empty so I store the current time in there and don't do anything else.
   * When user logs in again after that, i fetch the date from async storage and compare it to the current time. 
   * If the hour difference between the two times is greater or equal to 12 hours, then reset counter to 1000 and store new current date in asyncStorage.
   * If the hour difference between the teo times is less thatn  
   */
  const initCounter = async () => {
    try {
      let resetCounter;
      let storedTime = await AsyncStorage.getItem(dateKey); 
  
      if(!storedTime) {
        await AsyncStorage.setItem(dateKey, dayjs().toString()); 
      } else {
        let pastTime = dayjs(storedTime);
        let curTime = dayjs();
        let dateDif = pastTime.diff(curTime, 'hours');
        console.log(dateDif);

        resetCounter = (dateDif <= -12) ? true : false 
        doSetCounter(resetCounter);
      }
    } catch (err) {
      console.log('Something went wrong while checking date difference. Not resetting counter: ' + err);
      doSetCounter(false);
    }
  }


  /**
   * Initializes the counter for the user.
   * If it's time to reset the counter, then this function sets the counter to 1000
   * If it's not time to reset the counter, then this function sets the counter to where the user left off.
   * @param {boolean} resetCounter Represents whether its time to reset the counter or not.  
   */
  const doSetCounter = async (resetCounter) => {
    try {
      if(resetCounter) {
        setCount(1000);
        await AsyncStorage.setItem('counter', '1000'); // need to figure a nicer soloution for this in the count hook
        await AsyncStorage.setItem(dateKey, dayjs().toString()); 
      } else {
        let result = await AsyncStorage.getItem('counter');
        console.log(result);
        result == null ? console.log("res is null") : setCount(parseInt(result));
      } 
    } catch (err) {
      console.log('Failed to init counter. Resetting to 1000');
      setCount(1000);
      await AsyncStorage.setItem('counter', '1000');
      await AsyncStorage.setItem(dateKey, dayjs().toString()); 
    } finally {
      setInitialized(true);
    }
  }










  useEffect(() => {
    if (count !== 1000) {
      AsyncStorage.setItem('counter', `${count}`);
    }
  }, [count])
  
  /**
   * Whenever count increases, it means the screen was tapped.
   * When the screen is tapped, either an AD appears or RNG value result appears.
   * RNG value is used to determine whether the user won or not.
   * This hook runs the major app functionality.
   */
  useEffect(() => {
    // TODO - on the first add, show a screen showing that ads will be shown and the reason for them etc...
    if(initialized && !isFirstTap) {
      if ((count !== 1000) && (count % 10 === 0) && adLoaded) {
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
    
    doCountUpdates();

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
