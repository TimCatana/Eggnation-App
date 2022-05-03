import React, {FC} from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {backgroundHome} from '../../../../../assets';
import {C_ICON_PRIMARY} from '../../../../constants/Colors';
import {PressableIcon, PrizeDisplayModal} from '../../../common/components';
import HomeScreenCounter from './components/center-view/HomeScreenCounter';
import HomeScreenEgg from './components/bottom-view/HomeScreenEgg';
import useHomeScreen from './useHomeScreen';
import {Flash} from '../../../common/animation-components';

interface Props {
  setSwipeEnabled: (isEnabled: boolean) => void;
}

const HomeScreen: FC<Props> = props => {
  const {setSwipeEnabled} = props;

  const {
    isInitialized,
    isLoading,
    adShowing,
    playGame,
    localCount,
    isAnimationPlaying,
    winAnimationRef,
    handleWinAnimationFinished,
    isFlashAnimationPlaying,
    displayPrizeId,
    displayPrizeTitle,
    displayPrizeDesc,
    displayPrizeTier,
    displayPrizeType,
    displayPrizeClaimType,
    isShowingPrize,
    handleHidePrize,
    handleFlashAnimationFinished,
    navigation,
    navToSettingsScreen,
    navToAvailablePrizesTab,
    navToWonPrizesTab,
    navToHowToPlayScreen,
  } = useHomeScreen(setSwipeEnabled);

  if (!isInitialized) return null;

  return (
    <ImageBackground
      style={styles.body}
      source={backgroundHome}
      resizeMode="cover">
      <PressableIcon
        icon={'settings'}
        onPress={navToSettingsScreen}
        iconSize={hp('3.5%')}
        iconColor={C_ICON_PRIMARY}
        viewStyle={styles.iconView}
        iconStyle={{}}
      />

      <PressableIcon
        icon={'info'}
        onPress={navToHowToPlayScreen}
        iconSize={hp('3.5%')}
        iconColor={C_ICON_PRIMARY}
        viewStyle={styles.infoIconView}
        iconStyle={{}}
      />

      <HomeScreenCounter counter={localCount} />

      <HomeScreenEgg
        isLoading={isLoading}
        adShowing={adShowing}
        playGame={playGame}
        isAnimationPlaying={isAnimationPlaying}
        winAnimationRef={winAnimationRef}
        handleWinAnimationFinished={handleWinAnimationFinished}
      />

      <PressableIcon
        icon={'chevron-left'}
        onPress={navToAvailablePrizesTab}
        iconSize={hp('8%')}
        iconColor={C_ICON_PRIMARY}
        viewStyle={styles.leftArrowView}
        iconStyle={{}}
      />

      <PressableIcon
        icon={'chevron-right'}
        onPress={navToWonPrizesTab}
        iconSize={hp('8%')}
        iconColor={C_ICON_PRIMARY}
        viewStyle={styles.rightArrowView}
        iconStyle={{}}
      />

      {isFlashAnimationPlaying && (
        <Flash
          style={styles.flashView}
          onAnimationFinish={handleFlashAnimationFinished}
          duration={1000}
          isFlashAnimationPlaying={isFlashAnimationPlaying}>
          <View></View>
        </Flash>
      )}

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
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconView: {
    position: 'absolute',
    top: hp('1%'),
    left: wp('1%'),
  },
  infoIconView: {
    position: 'absolute',
    top: hp('1%'),
    right: wp('1%'),
  },
  leftArrowView: {
    position: 'absolute',
    top: '50%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    left: wp('1%'),
  },
  rightArrowView: {
    position: 'absolute',
    top: '50%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    right: wp('1%'),
  },
  flashView: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('100%'),
    height: hp('100%'),
    backgroundColor: 'white',
  },
});

export default HomeScreen;
