import React from 'react';
import usePrizeDisplayScreen from './usePrizeDisplayScreen';
import {View, Text, StyleSheet} from 'react-native';

const PrizeDisplayScreen = () => {
  const {prize} = usePrizeDisplayScreen();

  return (
    <View style={styles.body}>
      <Text style={styles.text}>PrizeDisplayScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
  },
});

export default PrizeDisplayScreen;
