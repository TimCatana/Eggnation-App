import React from 'react';
import useAvailablePrizesScreen from './useAvailablePrizesScreen';
import {View, Text, StyleSheet} from 'react-native';
import PrizeShelfCard from '../../../components/common/PrizeShelfCard';

const AvailablePrizesScreen = () => {
  const {
    isInitialized,
    isLoading,
    isPrizeFetchFailed,
    isShowingPrize,
    availablePrizes,
    handleShowPrize,
    handleHidePrize,
  } = useAvailablePrizesScreen();

  return (
    <View style={styles.body}>
      {isLoading && <Text>Loading</Text>}
      {!isLoading && isPrizeFetchFailed && <Text>Failed to fetch prizes</Text>}
      {!isLoading && !isPrizeFetchFailed && (
        <>
          {availablePrizes.map(availablePrize => (
            <PrizeShelfCard
              key={availablePrize.prizeId}
              prize={availablePrize}
              handleShowPrize={handleShowPrize}
            />
          ))}
          <Text style={styles.text}>ssdd</Text>
        </>
      )}
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

export default AvailablePrizesScreen;
