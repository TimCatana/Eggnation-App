import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';

import SQLite from 'react-native-sqlite-storage'; 

const db = SQLite.openDatabase(
  {
      name: 'MainDB',
      location: 'default',
  },
  () => { },
  error => { console.log(error) }
);


let egg = require('../assets/egg.png');
let backEgg = require('../assets/egg.png');
 
const Home = ( {navigation} ) =>  {
  const [tap, setTap] = useState(0);
  const [totalBreaks, setTotalBreaks] = useState(0);

  const displayEgg = async () => {
    setTap(tap + 1);
    console.log(tap);

    if(tap === 1) {
      egg = require('../assets/egg_tap_1.png');
    } else if(tap == 2) {
      egg = require('../assets/egg_tap_2.png');
      //Crack animation
      setTotalBreaks(totalBreaks + 1);
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
        <Pressable onPress={displayEgg} >
          <View style = {styles.backgroundContainer}>
            <Image style={styles.egg} source={egg}/>
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
