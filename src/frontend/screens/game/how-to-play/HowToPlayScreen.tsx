import React, {FC} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {C_BACKGROUND_BOOKSHELF, C_BACKGROUND_DARK, C_ICON_LIGHT} from '../../../../constants/Colors';

import usePrivacyPolicyScreen from './useHowToPlayScreen';
import {PressableIcon} from '../../../common/components';
import {howToPlay} from '../../../../../assets';

const HowToPlayScreen: FC = () => {
  const {navigateBack} = usePrivacyPolicyScreen();

  return (
    <View style={styles.body}>
      <Text style={styles.headingText}>How To Play</Text>
      <Image source={howToPlay} style={styles.image} resizeMode={'contain'} />
      <PressableIcon
        icon={'arrow-left'}
        onPress={navigateBack}
        iconSize={hp('3.6%')}
        iconColor={C_ICON_LIGHT}
        viewStyle={styles.icon}
        iconStyle={{}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    display: 'flex',
    backgroundColor: C_BACKGROUND_BOOKSHELF,
  },
  headingText: {
    alignSelf: 'center',
    fontSize: hp('5%'),
    color: 'white',
    paddingTop: hp('2%')
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  icon: {
    position: 'absolute',
    left: hp('0.6%'),
    top: hp('0.6%'),
  },
});

export default HowToPlayScreen;
