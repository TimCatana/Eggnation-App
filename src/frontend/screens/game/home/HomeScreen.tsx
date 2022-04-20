import React, {FC} from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import LottieView from 'lottie-react-native';
import {backgroundHome} from '../../../../../assets';
import {C_ICON_PRIMARY} from '../../../theme/Colors';
import {TopLeftCornerIcon} from '../../../common/components';
import HomeScreenCounter from './components/center-view/HomeScreenCounter';
import HomeScreenEgg from './components/bottom-view/HomeScreenEgg';
import useHomeScreen from './useHomeScreen';

const HomeScreen: FC = () => {
  const {
    isInitialized,
    isLoading,
    adShowing,
    playGame,
    localCount,
    isAnimationPlaying,
    isWonAnimationShowing,
    winAnimationRef,
    loseAnimationRef,
    resetAnimation,
    navToSettingsScreen,
  } = useHomeScreen();

  if (!isInitialized) return null;

  return (
    <ImageBackground
      style={styles.body}
      source={backgroundHome}
      resizeMode="cover">
      <TopLeftCornerIcon
        icon={'settings'}
        onPress={navToSettingsScreen}
        iconSize={hp('3.5%')}
        iconColor={C_ICON_PRIMARY}
        viewStyle={styles.icon}
        iconStyle={{}}
      />

      <HomeScreenCounter counter={localCount} />
      <HomeScreenEgg
        isLoading={isLoading}
        adShowing={adShowing}
        playGame={playGame}
        isAnimationPlaying={isAnimationPlaying}
        isWonAnimationShowing={isWonAnimationShowing}
        loseAnimationRef={loseAnimationRef}
        winAnimationRef={winAnimationRef}
        resetAnimation={resetAnimation}
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
  icon: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    paddingLeft: wp('1%'),
    paddingTop: hp('1%'),
  },
});

export default HomeScreen;
