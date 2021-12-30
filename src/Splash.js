import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import sqliteInterface from './SqliteInterface';
 
/**
 * Splash Page
 * @param navigation the navigation object
 */
const Splash = ({navigation}) =>  {

  useEffect(() => { 
      setTimeout(() => {
        navigation.replace('Home');
      }, 1000);
  }, []);

  return (
    <View style={styles.body}>      
      <Text style={styles.text}>SplashPage</Text>
    </View>
  );
}

/**
 * Styles
 */
const styles = StyleSheet.create({
   body: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
   },
   text: {
     fontSize: 50,
     color: 'black'
   },
});

export default Splash;
