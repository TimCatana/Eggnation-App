import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {C_BACKGROUND_BOOKSHELF, C_ICON_BOOKSHELF, C_ICON_PRIMARY} from '../../../theme/Colors';
import {PrizeDisplayModal, PressableIcon} from '../../../common/components';

import TEST_DATA from '../../../../../test-data/availablePrizes.json'; // TODO - get rid of this after...
import BookShelfLeftView from '../../../common/components/bookshelf-background/BookShelfLeftView';
import BookShelfRightView from '../../../common/components/bookshelf-background/BookShelfRightView';
import PrizeScreenCenterView from '../../../common/components/bookshelf-background/PrizeScreenCenterView';
import usePrizeScreen from '../../../common/states/usePrizeScreen';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

interface Props {
  setSwipeEnabled: (isEnabled: boolean) => void;
}

const AvailablePrizesScreen: FC<Props> = props => {
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
    navToHomeTab,
  } = usePrizeScreen(true);

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
        title={'Available Prizes'}
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
        isWonPrize={false}
        isModalVisible={isShowingPrize}
        handleHidePrize={handleHidePrize}
        navigation={navigation}
      />

      <BookShelfRightView />

      <PressableIcon
        icon={'chevron-right'}
        onPress={navToHomeTab}
        iconSize={hp('5%')}
        iconColor={C_ICON_BOOKSHELF}
        viewStyle={styles.backArrowView}
        iconStyle={{}}
      />
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
  backArrowView: {
    position: 'absolute',
    right: hp('-0.5%'),
    top: hp('0.2%'),
  },
});

export default AvailablePrizesScreen;
