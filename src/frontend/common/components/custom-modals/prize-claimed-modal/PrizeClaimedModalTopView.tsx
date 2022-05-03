import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import {PresentPlaceholder} from '../../../../../../assets';

const PrizeClaimedModalTopView: FC = () => {
  return (
    <View style={styles.body}>
      <LottieView
        style={styles.lottie}
        source={PresentPlaceholder}
        autoPlay={true}
        loop={false}
        resizeMode={'cover'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    height: '100%',
  },
});

export default PrizeClaimedModalTopView;
