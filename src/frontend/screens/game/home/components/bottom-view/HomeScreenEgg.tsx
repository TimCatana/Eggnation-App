import React, {FC} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import LottieView from 'lottie-react-native';
import {WonAnimation} from '../../../../../../../assets';

interface Props {
  isLoading: boolean;
  adShowing: boolean;
  playGame: () => void;
  isAnimationPlaying: boolean;
  winAnimationRef: any;
  handleWinAnimationFinished: () => void;
}

const HomeScreenEgg: FC<Props> = props => {
  const {
    isLoading,
    adShowing,
    playGame,
    isAnimationPlaying,
    winAnimationRef,
    handleWinAnimationFinished,
  } = props;

  return (
    <View style={styles.body}>
      <Pressable
        disabled={isLoading || adShowing || isAnimationPlaying}
        onPress={playGame}>
        <LottieView
          ref={winAnimationRef}
          style={styles.egg}
          source={WonAnimation}
          autoPlay={false}
          loop={false}
          duration={6000}
          onAnimationFinish={handleWinAnimationFinished}
          resizeMode={'cover'}
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
    width: wp('100%'),
    height: hp('93%'),
    marginBottom: hp('15%'),
  },
});

export default HomeScreenEgg;
