import React from 'react';
import {View,StyleSheet} from 'react-native';
import WonPrizeScreenLeftView from './components/left-view/WonPrizeScreenLeftView';
import WonPrizeScreenRightView from './components/right-view/WonPrizeScreenRightView';
import PrizeDisplayModal from '../../../common/components/PrizeDisplayModal';
import WonPrizeScreenCenterView from './components/center-view/WonPrizeScreenCenterView';

import TEST_DATA from '../../../../../test-data/availablePrizes.json';
import useWonPrizesScreen from './useWonPrizesScreen';

const WonPrizesScreen = ({navigation}) => {
  const {
    isInitialized,
    isLoading,
    isPrizeFetchFailed,
    isShowingPrize,
    wonPrizes,
    handleShowPrize,
    handleHidePrize,
    handleDisplayPrizeTitleChange,
    displayPrizeTitle,
    handleDisplayPrizeDescChange,
    displayPrizeDesc,
    handleDisplayPrizeTierChange,
    displayPrizeTier,
    handleDisplayPrizeTypeChange,
    displayPrizeType,
  } = useWonPrizesScreen();

  return (
    <View style={styles.body}>
      <WonPrizeScreenLeftView />

      
      <WonPrizeScreenCenterView
        isInitialized={isInitialized}
        isLoading={isLoading}
        isPrizeFetchFailed={isPrizeFetchFailed}
        data={TEST_DATA}
        handleShowPrize={handleShowPrize}
        handleDisplayPrizeTitleChange={handleDisplayPrizeTitleChange}
        handleDisplayPrizeDescChange={handleDisplayPrizeDescChange}
        handleDisplayPrizeTypeChange={handleDisplayPrizeTypeChange}
        handleDisplayPrizeTierChange={handleDisplayPrizeTierChange}
      />

      <PrizeDisplayModal
        prizeTitle={displayPrizeTitle}
        prizeDesc={displayPrizeDesc}
        prizeTier={displayPrizeTier}
        prizeType={displayPrizeType}
        prizeIsClaimed={true} // In case something goes wrong, then this will prevent user from claiming prize they didn't win
        isWonPrize={false}
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
    backgroundColor: '#29211F',
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  prizeList: {
    display: 'flex',
  },
  text: {
    fontSize: 100,
  },
});

export default WonPrizesScreen;
