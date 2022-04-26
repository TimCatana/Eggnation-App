import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {C_BACKGROUND_BOOKSHELF} from '../../../theme/Colors';
import {PrizeDisplayModal} from '../../../common/components';

import TEST_DATA from '../../../../../test-data/availablePrizes.json';
import BookShelfLeftView from '../../../common/components/bookshelf-background/BookShelfLeftView';
import BookShelfRightView from '../../../common/components/bookshelf-background/BookShelfRightView';
import PrizeScreenCenterView from '../../../common/components/bookshelf-background/PrizeScreenCenterView';
import usePrizeScreen from '../../../common/states/usePrizeScreen';

interface Props {
  setSwipeEnabled: (isEnabled: boolean) => void;
}

const WonPrizesScreen: FC<Props> = props => {
  const {setSwipeEnabled} = props;

  const {
    isInitialized,
    isLoading,
    isPrizeFetchFailed,
    prizeFetchFailedText,
    isShowingPrize,
    prizes,
    handleShowPrize,
    handleHidePrize,
    displayPrizeId,
    displayPrizeTitle,
    displayPrizeDesc,
    displayPrizeTier,
    displayPrizeType,
    displayPrizeClaimType,
    navigation,
  } = usePrizeScreen(false, setSwipeEnabled);

  return (
    <View style={styles.body}>
      <BookShelfLeftView />

      <PrizeScreenCenterView
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

      <BookShelfRightView />
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
