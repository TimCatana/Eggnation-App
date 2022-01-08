import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
 
const LeaderboardScreen = () =>  {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>LeaderboardScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
   body: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
   },
   text: {
     fontSize: 50,
   }
});

export default LeaderboardScreen;
