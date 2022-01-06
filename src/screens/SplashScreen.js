import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
 
/**
 * Splash Page
 * @param navigation the navigation object
 */
const SplashScreen = ({navigation}) =>  {

  useEffect(() => { 
      setTimeout(() => { // TODO - change this to animation.then(navigate...)
        navigation.replace('Login');
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

export default SplashScreen;