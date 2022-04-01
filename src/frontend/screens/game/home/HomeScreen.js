import React from 'react';
import useHomeScreen from './useHomeScreen';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import HomeScreenSettingsIcon from './components/HomeScreenSettingsIcon';
import HomeScreenCounter from './components/HomeScreenCounter';
import HomeScreenEgg from './components/HomeScreenEgg';
import BG from '../../../../../assets/bg.png';

const HomeScreen = ({navigation}) => {
  const {
    isLoading,
    isInitialized,
    localCount,
    playGame,
    loseAnimationRef,
    winAnimationRef,
    resetAnimation,
    pauseAnimation,
    isWonAnimationShowing,
  } = useHomeScreen();

  if (!isInitialized) return null;

  return (
    <ImageBackground style={styles.body} source={BG} resizeMode="cover">
      <HomeScreenSettingsIcon navigation={navigation} />
      <HomeScreenCounter counter={localCount} />
      <HomeScreenEgg
        resetAnimation={resetAnimation}
        pauseAnimation={pauseAnimation}
        isWonAnimationShowing={isWonAnimationShowing}
        loseAnimationRef={loseAnimationRef}
        winAnimationRef={winAnimationRef}
        playGame={playGame}
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
});

export default HomeScreen;
