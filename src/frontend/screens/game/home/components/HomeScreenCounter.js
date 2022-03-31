import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const HomeScreenCounter = props => {
  const {counter} = props;

  return (
    <View style={styles.body}>
      <Text style={styles.counterText}>{counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: hp('7%'),
  },
});

export default HomeScreenCounter;
