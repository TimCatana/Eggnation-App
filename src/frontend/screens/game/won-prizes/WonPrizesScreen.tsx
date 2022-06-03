import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {S_WPS_TITLE} from '../../../../constants/Strings';
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

const WonPrizesScreen: FC = () => {
  const {
    isInitialized,
    isLoading,
    isRefreshing,
    isPrizeFetchFailed,
    prizeFetchFailedText,
    isShowingPrize,
    prizes,
    handleRefresh,
    handleShowPrize,
    handleHidePrize,
    displayPrizeId,
    displayPrizeTitle,
    displayPrizeDesc,
    displayPrizeTier,
    displayPrizeType,
    displayPrizeClaimType,
    displayPrizeClaimed,
    displayPrizeDelivered,
    displayPrizeWonDate,
    navigation,
    navToHomeTab,
  } = usePrizeScreen(false);

  return (
    <View style={styles.body}>
      <BookShelfLeftView />

      <PrizeScreenCenterView
        isInitialized={isInitialized}
        isLoading={isLoading}
        isRefreshing={isRefreshing}
        isPrizeFetchFailed={isPrizeFetchFailed}
        prizeFetchFailedText={prizeFetchFailedText}
        data={prizes}
        handleRefresh={handleRefresh}
        handleShowPrize={handleShowPrize}
        title={S_WPS_TITLE}
      />

      <PrizeDisplayModal
        isLoading={isLoading}
        prizeId={displayPrizeId}
        prizeTitle={displayPrizeTitle}
        prizeDesc={displayPrizeDesc}
        prizeTier={displayPrizeTier}
        prizeType={displayPrizeType}
        prizeClaimType={displayPrizeClaimType}
        prizeClaimed={displayPrizeClaimed}
        prizeDelivered={displayPrizeDelivered}
        prizeWonDate={displayPrizeWonDate}
        isWonPrize={true}
        isModalVisible={isShowingPrize}
        handleHidePrize={handleHidePrize}
        navigation={navigation}
      />

      <BookShelfRightView />

      <PressableIcon
        icon={'chevron-left'}
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
    left: hp('-0.5%'),
    top: hp('0.2%'),
  },
});

export default WonPrizesScreen;
