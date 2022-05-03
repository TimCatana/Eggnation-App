import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {C_TEXT_LIGHT} from '../../../../../constants/Colors';
import {
  S_PCM_CONGRATULATIONS,
  S_PCM_INFO_TEXT,
} from '../../../../../constants/Strings';

const PrizeClaimedModalCenterView: FC = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.titleText}>{S_PCM_CONGRATULATIONS}</Text>
      <Text style={styles.contentText}>{S_PCM_INFO_TEXT}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
  },
  titleText: {
    fontSize: hp('5%'),
    color: C_TEXT_LIGHT,
    marginBottom: hp('4%'),
  },
  contentText: {
    fontSize: hp('2%'),
    color: C_TEXT_LIGHT,
    textAlign: 'justify',
  },
});

export default PrizeClaimedModalCenterView;
