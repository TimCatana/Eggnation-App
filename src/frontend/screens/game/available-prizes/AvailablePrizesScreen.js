import React from 'react';
import {View, StyleSheet} from 'react-native';
import PrizeDisplayModal from '../../../common/components/PrizeDisplayModal';
import AvailablePrizeScreenLeftView from './components/left-view/AvailablePrizeScreenLeftView';
import AvailablePrizeScreenCenterView from './components/center-view/AvailablePrizeScreenCenterView';
import AvailablePrizeScreenRightView from './components/right-view/AvailablePrizeScreenRightView';

import TEST_DATA from '../../../../../test-data/availablePrizes.json'; // TODO - get rid of this after...
import useAvailablePrizesScreen from './useAvailablePrizesScreen';

const AvailablePrizesScreen = ({navigation}) => {
  const {
    isInitialized,
    isLoading,
    isPrizeFetchFailed,
    isShowingPrize,
    availablePrizes,
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
  } = useAvailablePrizesScreen();

  return (
    <View style={styles.body}>
      <AvailablePrizeScreenLeftView />

      <AvailablePrizeScreenCenterView
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

      <AvailablePrizeScreenRightView />
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

export default AvailablePrizesScreen;
