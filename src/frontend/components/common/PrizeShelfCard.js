import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const PrizeShelfCard = props => {
  const {prize, handleShowPrize} = props;

  return (
    <View style={styles.body}>
      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => {
          handleShowPrize(true);
        }}>
        <Text style={styles.text}>
          {prize.prizeTitle} {prize.prizeDesc} {prize.prizeId}{' '}
          {prize.prizeClaimed} {prize.prizeTier} {prize.prizeType}{' '}
          {prize.prizeDateWon} {prize.propertyDoesNotExist}
        </Text>
      </TouchableOpacity>
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
    fontSize: 20,
  },
});

export default PrizeShelfCard;
