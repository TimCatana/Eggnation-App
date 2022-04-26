import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {C_BACKGROUND_BOOKSHELF} from '../../../theme/Colors';
import {PrizeDisplayModal} from '../../../common/components';
import WonPrizeScreenLeftView from './components/left-view/WonPrizeScreenLeftView';
import WonPrizeScreenRightView from './components/right-view/WonPrizeScreenRightView';
import WonPrizeScreenCenterView from './components/center-view/WonPrizeScreenCenterView';

import TEST_DATA from '../../../../../test-data/availablePrizes.json';
import useWonPrizesScreen from './useWonPrizesScreen';

const WonPrizesScreen: FC = () => {
  const {
    isInitialized,
    isLoading,
    isPrizeFetchFailed,
    prizeFetchFailedText,
    isShowingPrize,
    wonPrizes,
    handleShowPrize,
    handleHidePrize,
    displayPrizeId,
    displayPrizeTitle,
    displayPrizeDesc,
    displayPrizeTier,
    displayPrizeType,
    displayPrizeClaimType,
    navigation,
  } = useWonPrizesScreen();

  return (
    <View style={styles.body}>
      <WonPrizeScreenLeftView />

      <WonPrizeScreenCenterView
        isInitialized={isInitialized}
        isLoading={isLoading}
        isPrizeFetchFailed={isPrizeFetchFailed}
        prizeFetchFailedText={prizeFetchFailedText}
        data={TEST_DATA}
        handleShowPrize={handleShowPrize}
      />

      <PrizeDisplayModal
        isLoading={isLoading}
        prizeId={displayPrizeId}
        prizeTitle={displayPrizeTitle}
        prizeDesc={displayPrizeDesc}
        prizeTier={displayPrizeTier}
        prizeType={displayPrizeType}
        prizeClaimType={displayPrizeClaimType}
        prizeIsClaimed={true} // In case something goes wrong, then this will prevent user from claiming prize they didn't win
        isWonPrize={true}
        isModalVisible={isShowingPrize}
        handleHidePrize={handleHidePrize}
        navigation={navigation}
      />

      <WonPrizeScreenRightView />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: C_BACKGROUND_BOOKSHELF,
  },
});

export default WonPrizesScreen;
