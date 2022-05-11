import React, {FC} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  C_BACKGROUND_BOOKSHELF,
  C_ICON_LIGHT,
} from '../../../../constants/Colors';

import usePrivacyPolicyScreen from './useHowToPlayScreen';
import {PressableIcon} from '../../../common/components';
import {
  HTPAd,
  HTPDelivered,
  HTPDelivery,
  HTPLose,
  HTPTap,
  HTPWin,
} from '../../../../../assets';
import HowToPlayScreenIconTextView from './components/HowToPlayScreenIconTextView';
import {
  S_HTPS_AD,
  S_HTPS_CLAIM_WON_PRIZES,
  S_HTPS_LOSE,
  S_HTPS_TAP_EGG,
  S_HTPS_WE_DELIVER_THE_PRIZE,
  S_HTPS_WIN,
  S_HTPS_YOU_RECEIVE_THE_PRIZE,
} from '../../../../constants/Strings';

const HowToPlayScreen: FC = () => {
  const {navigateBack} = usePrivacyPolicyScreen();

  return (
    <ScrollView
      style={styles.body}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <Text style={styles.headingText}>How To Play</Text>

      <HowToPlayScreenIconTextView
        image={HTPTap}
        text={S_HTPS_TAP_EGG}
        height={hp('20%')}
        width={'100%'}
      />

      <View style={styles.loseWinAdRow}>
        <HowToPlayScreenIconTextView
          image={HTPLose}
          text={S_HTPS_LOSE}
          height={hp('20%')}
          width={'33%'}
        />
        <HowToPlayScreenIconTextView
          image={HTPWin}
          text={S_HTPS_WIN}
          height={hp('20%')}
          width={'33%'}
        />
        <HowToPlayScreenIconTextView
          image={HTPAd}
          text={S_HTPS_AD}
          height={hp('20%')}
          width={'33%'}
        />
      </View>

      <HowToPlayScreenIconTextView
        image={HTPTap}
        text={S_HTPS_CLAIM_WON_PRIZES}
        height={hp('20%')}
        width={'100%'}
      />

      <HowToPlayScreenIconTextView
        image={HTPDelivery}
        text={S_HTPS_WE_DELIVER_THE_PRIZE}
        height={hp('20%')}
        width={'100%'}
      />

      <HowToPlayScreenIconTextView
        image={HTPDelivered}
        text={S_HTPS_YOU_RECEIVE_THE_PRIZE}
        height={hp('20%')}
        width={'100%'}
      />

      <PressableIcon
        icon={'arrow-left'}
        onPress={navigateBack}
        iconSize={hp('3.6%')}
        iconColor={C_ICON_LIGHT}
        viewStyle={styles.icon}
        iconStyle={{}}
      />
    </ScrollView>
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
    paddingTop: hp('2%'),
    marginBottom: hp('5%'),
  },
  loseWinAdRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    position: 'absolute',
    left: hp('0.6%'),
    top: hp('0.6%'),
  },
});

export default HowToPlayScreen;
