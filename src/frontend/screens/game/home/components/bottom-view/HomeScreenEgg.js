import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import LottieView from 'lottie-react-native';
import WonAnimation from '../../../../../../../assets/lottie/won.json';
import LostAnimation from '../../../../../../../assets/lottie/lost.json';

const HomeScreenEgg = props => {
  const {
    isLoading,
    adShowing,
    playGame,
    isAnimationPlaying,
    isWonAnimationShowing,
    loseAnimationRef,
    winAnimationRef,
    resetAnimation,
  } = props;

  return (
    <View style={styles.body}>
      <Pressable
        disabled={isLoading || adShowing || isAnimationPlaying}
        onPress={playGame}>
        {isWonAnimationShowing ? (
          <LottieView
            ref={winAnimationRef}
            style={styles.egg}
            source={WonAnimation}
            autoPlay={false}
            loop={false}
            duration={500}
            onAnimationFinish={resetAnimation}
          />
        ) : (
          <LottieView
            ref={loseAnimationRef}
            style={styles.egg}
            source={LostAnimation}
            autoPlay={false}
            loop={false}
            duration={100}
            onAnimationFinish={resetAnimation}
          />
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  egg: {
    width: wp('50%'),
    height: hp('35%'),
  },
});

export default HomeScreenEgg;
