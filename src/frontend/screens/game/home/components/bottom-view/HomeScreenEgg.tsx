import React, {FC} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import LottieView from 'lottie-react-native';
import {
  WonAnimation,
  Particles,
  LostAnimation,
} from '../../../../../../../assets';

interface Props {
  isLoading: boolean;
  adShowing: boolean;
  playGame: () => void;
  isAnimationPlaying: boolean;
  isWonAnimationShowing: boolean;
  loseAnimationRef: React.LegacyRef<LottieView> | null; // TODO - find out what to do for this
  winAnimationRef: React.LegacyRef<LottieView> | null; // TODO - find out what to do for this
  resetAnimation: () => void;
}

const HomeScreenEgg: FC<Props> = props => {
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
        disabled={isLoading || adShowing }
        onPress={playGame}>
        <LottieView
          ref={loseAnimationRef}
          style={styles.particle}
          source={Particles}
          autoPlay={true}
          loop={false}
          duration={200}
          onAnimationFinish={() => {
            resetAnimation();
          }}
        />

        <LottieView
          ref={winAnimationRef}
          style={styles.egg}
          source={LostAnimation}
          autoPlay={false}
          loop={false}
          duration={500}
          onAnimationFinish={resetAnimation}
        />
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
  particle: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});

export default HomeScreenEgg;
