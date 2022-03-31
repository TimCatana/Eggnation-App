import React, {useRef, useEffect} from 'react';
import {View, StyleSheet, Image, Pressable} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import egg from '../../../../../../assets/egg.png';
import LottieView from 'lottie-react-native';
import Won from '../../../../../../assets/lottie/won.json';
import Lost from '../../../../../../assets/lottie/lost.json';

const HomeScreenEgg = props => {
  const {
    playGame,
    resetAnimation,
    pauseAnimation,
    isWonAnimationShowing,
    loseAnimationRef,
    winAnimationRef,
  } = props;

  return (
    <View style={styles.body}>

      <Pressable
      onPress={playGame}
      >
        {isWonAnimationShowing ? (
          <LottieView
            ref={winAnimationRef}
            style={styles.egg}
            source={Won}
            autoPlay={false}
            loop={false}
            onAnimationFinish={() => {
              // TODO - need to fix the animation reset problem
              // resetAnimation();
            }}
          />
        ) : (
          <LottieView
            ref={loseAnimationRef}
            style={styles.egg}
            source={Lost}
            autoPlay={false}
            loop={false}
            onAnimationFinish={() => {
              // TODO - need to fix the animation reset problem
              // resetAnimation();
            }}
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
    // resizeMode: 'contain',
  },
});

export default HomeScreenEgg;
