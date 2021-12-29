import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
 
/**
 * PrizeHistory Page
 */
const PrizeHistory = () =>  {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Prize History</Text>
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
   }
});

export default PrizeHistory;
