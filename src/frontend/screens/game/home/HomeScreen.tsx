import React, {FC} from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  Pressable,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {backgroundHome} from '../../../../../assets';
import {C_ICON_PRIMARY} from '../../../../constants/Colors';
import {
  CustomPressableImage,
  PressableIcon,
  PrizeDisplayModal,
} from '../../../common/components';
import {Flash} from '../../../common/animation-components';
import HomeScreenCounter from './components/center-view/HomeScreenCounter';
import HomeScreenEgg from './components/bottom-view/HomeScreenEgg';
import useHomeScreen from './useHomeScreen';

import {post} from '../../../../../assets';

const HomeScreen: FC = () => {
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
  } = useHomeScreen();

  if (!isInitialized) return null;

  return (
    <ImageBackground
      style={styles.body}
      source={backgroundHome}
      resizeMode="cover">
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
        icon={'settings'}
        onPress={navToSettingsScreen}
        iconSize={hp('4%')}
        iconColor={C_ICON_PRIMARY}
        viewStyle={styles.iconView}
        iconStyle={{}}
      />

      <PressableIcon
        icon={'info'}
        onPress={navToHowToPlayScreen}
        iconSize={hp('4%')}
        iconColor={C_ICON_PRIMARY}
        viewStyle={styles.infoIconView}
        iconStyle={{}}
      />

      <View style={styles.rightArrowView}>
        <CustomPressableImage
          disabled={false}
          image={post}
          onPress={navToWonPrizesTab}
          style={{flex: 1}}
        />
      </View>

      <View style={styles.leftArrowView}>
        <CustomPressableImage
          disabled={false}
          image={post}
          onPress={navToAvailablePrizesTab}
          style={{flex: 1}}
        />
      </View>

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
        prizeClaimed={true} // In case something goes wrong, then this will prevent user from claiming prize they didn't win
        prizeDelivered={false}
        prizeWonDate={''}
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
    bottom: 0,
    left: 0,
    flex: 1,
    backgroundColor: 'red',
    width: wp('25%'),
    height: hp('16%'),
  },
  rightArrowView: {
    position: 'absolute',
    bottom: -hp('2%'),
    right: 0,
    flex: 1,
    backgroundColor: 'red',
    width: wp('25%'),
    height: hp('16%'),
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
