import React from 'react';
import useClaimPrizeScreen from './useClaimPrizeScreen';
import {View, Text, StyleSheet} from 'react-native';

const ClaimPrizeScreen = () => {
  const {
    country,
    handleCountryChange,
    region,
    handleRegionChange,
    address,
    handleAddressChange,
    handleClaimPrizeClick,
  } = useClaimPrizeScreen();

  return (
    <View style={styles.body}>
      <Text style={styles.text}>ClaimPrizeScreen</Text>
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

export default ClaimPrizeScreen;
