import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {C_BACKGROUND_DARK, C_ICON_LIGHT} from '../../../theme/Colors';

import usePrivacyPolicyScreen from './useHowToPlayScreen';
import {ScrollView} from 'react-native-gesture-handler';
import {PressableIcon} from '../../../common/components';

const HowToPlayScreen: FC = () => {
  const {navigateBack} = usePrivacyPolicyScreen();

  return (
    <ScrollView
      style={styles.body}
      contentContainerStyle={{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}>
      <PressableIcon
        icon={'arrow-left'}
        onPress={navigateBack}
        iconSize={hp('3.5%')}
        iconColor={C_ICON_LIGHT}
        viewStyle={styles.icon}
        iconStyle={{}}
      />
      <Text style={{fontSize: 100}}>LOL</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: C_BACKGROUND_DARK,
  },
  icon: {
    marginLeft: hp('0.5%'),
    marginTop: hp('0.5%'),
    marginBottom: hp('1%'),
  },
});

export default HowToPlayScreen;
