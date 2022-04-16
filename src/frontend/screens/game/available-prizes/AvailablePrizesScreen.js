import React from 'react';
import {View, StyleSheet} from 'react-native';
import { C_BACKGROUND_BOOKSHELF } from '../../../theme/Colors';
import PrizeDisplayModal from '../../../common/components/prize-display-modal/PrizeDisplayModal';
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
    prizeFetchFailedText,
    isShowingPrize,
    availablePrizes,
    handleShowPrize,
    handleHidePrize,
    handleDisplayPrizeIdChange,
    displayPrizeId,
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
        prizeFetchFailedText={prizeFetchFailedText}
        data={TEST_DATA}
        handleShowPrize={handleShowPrize}
        handleDisplayPrizeIdChange={handleDisplayPrizeIdChange}
        handleDisplayPrizeTitleChange={handleDisplayPrizeTitleChange}
        handleDisplayPrizeDescChange={handleDisplayPrizeDescChange}
        handleDisplayPrizeTypeChange={handleDisplayPrizeTypeChange}
        handleDisplayPrizeTierChange={handleDisplayPrizeTierChange}
      />

      <PrizeDisplayModal
        isLoading={isLoading}
        prizeId={displayPrizeId}
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
    backgroundColor: C_BACKGROUND_BOOKSHELF,
  },
});

export default AvailablePrizesScreen;
