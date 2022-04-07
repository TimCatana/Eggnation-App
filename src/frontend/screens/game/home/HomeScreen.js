import React from 'react';
import useHomeScreen from './useHomeScreen';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import HomeScreenCounter from './components/center-view/HomeScreenCounter';
import HomeScreenEgg from './components/bottom-view/HomeScreenEgg';
import BG from '../../../../../assets/bg.png';
import TopLeftCornerIcon from '../../../components/common/TopLeftCornerIcon';
import { SETTINGS_SCREEN } from '../../../util/NavigationConstants';

const HomeScreen = ({navigation}) => {
  const {
    isLoading,
    isInitialized,
    localCount,
    playGame,
    loseAnimationRef,
    winAnimationRef,
    resetAnimation,
    isWonAnimationShowing,
    isAnimationPlaying,
  } = useHomeScreen();

  if (!isInitialized) return null;

  return (
    <ImageBackground style={styles.body} source={BG} resizeMode="cover">
      <TopLeftCornerIcon
        icon={'settings'}
        onPress={() => {
          if (!isLoading && !isAnimationPlaying) {
            navigation.navigate(SETTINGS_SCREEN);
          }
        }}
        viewStyle={styles.icon}
        iconStyle={{}}
        iconSize={hp('3.5%')}
      />

      <HomeScreenCounter counter={localCount} />
      <HomeScreenEgg
        resetAnimation={resetAnimation}
        isWonAnimationShowing={isWonAnimationShowing}
        loseAnimationRef={loseAnimationRef}
        winAnimationRef={winAnimationRef}
        playGame={playGame}
        isAnimationPlaying={isAnimationPlaying}
        isLoading={isLoading}
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
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: wp('1%'),
    paddingTop: hp('1%'),
  },
});

export default HomeScreen;
