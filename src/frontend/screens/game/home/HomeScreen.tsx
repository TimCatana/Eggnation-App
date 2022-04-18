import React, {FC} from 'react';
import useHomeScreen from './useHomeScreen';
import {View, ImageBackground, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {C_ICON_PRIMARY} from '../../../theme/Colors';
import background from '../../../../../assets/backgrounds/bg_home.png';
import HomeScreenCounter from './components/center-view/HomeScreenCounter';
import HomeScreenEgg from './components/bottom-view/HomeScreenEgg';
import TopLeftCornerIcon from '../../../common/components/top-left-corner-icon/TopLeftCornerIcon';
import LottieView from 'lottie-react-native';

interface Props {
  isInitialized: boolean;
  isLoading: boolean;
  adShowing: boolean;
  playGame: () => void;
  localCount: number;
  isAnimationPlaying: boolean;
  isWonAnimationShowing: boolean;
  winAnimationRef: React.LegacyRef<LottieView> | undefined; // TODO - find out what to do for this
  loseAnimationRef: React.LegacyRef<LottieView> | undefined; // TODO - find out what to do for this
  resetAnimation: () => void;
}

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
    <View style={styles.body}>
      <ImageBackground
        style={styles.body}
        source={background}
        resizeMode="cover"
      />
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
    </View>
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
