import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {S_APS_TITLE} from '../../../../constants/Strings';
import {
  C_BACKGROUND_BOOKSHELF,
  C_ICON_BOOKSHELF,
} from '../../../../constants/Colors';
import {
  PrizeDisplayModal,
  PressableIcon,
  BookShelfLeftView,
  BookShelfRightView,
  PrizeScreenCenterView,
} from '../../../common/components';
import usePrizeScreen from '../../../common/states/usePrizeScreen';

const AvailablePrizesScreen: FC = () => {
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
        data={prizes}
        handleShowPrize={handleShowPrize}
        title={S_APS_TITLE}
      />

      <PrizeDisplayModal
        isLoading={isLoading}
        prizeId={displayPrizeId}
        prizeTitle={displayPrizeTitle}
        prizeDesc={displayPrizeDesc}
        prizeTier={displayPrizeTier}
        prizeType={displayPrizeType}
        prizeClaimType={displayPrizeClaimType}
        prizeClaimed={true} // In case something goes wrong, then this will prevent user from claiming prize they didn't win
        prizeDelivered={true} // In case something goes wrong, then this will prevent user from claiming prize they didn't win
        prizeWonDate={''} // Available prizes have no won date since they were not won yet
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
