import React from 'react';
import useWonPrizesScreen from './useWonPrizesScreen';
import {View, Text, StyleSheet, Button} from 'react-native';
import {CLAIM_PRIZE_SCREEN} from '../../../util/NavigationConstants';
import PrizeShelfCard from '../../../components/common/PrizeShelfCard';

const WonPrizesScreen = ({navigation}) => {
  const {
    isInitialized,
    isLoading,
    isPrizeFetchFailed,
    isShowingPrize,
    wonPrizes,
    handleShowPrize,
    handleHidePrize,
  } = useWonPrizesScreen();

  // TODO need to incorperate isInitialized into place in UI
  return (
    <View style={styles.body}>
      {isLoading && <Text>Loading</Text>}
      {!isLoading && isPrizeFetchFailed && <Text>Failed to fetch prizes</Text>}
      {!isLoading && !isPrizeFetchFailed && (
        <>
          {wonPrizes.map(wonPrize => (
            <PrizeShelfCard
              key={wonPrize.prizeId}
              prize={wonPrize}
              handleShowPrize={handleShowPrize}
            />
          ))}
          <Button
            title="go to claimPrizesScreen"
            onPress={() => {
              navigation.navigate(CLAIM_PRIZE_SCREEN);
            }}
          />
        </>
      )}

      {isShowingPrize && <Text>SHOWING PRIZE</Text>}
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

export default WonPrizesScreen;
