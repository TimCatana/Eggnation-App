import React, {FC} from 'react';
import {Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {C_TEXT_PRIMARY} from '../../../../../constants/Colors';

interface Props {
  prizeDesc: string;
}

const PrizeDisplayContentBottomView: FC<Props> = props => {
  const {prizeDesc} = props;

  return <Text style={styles.text}>{prizeDesc}</Text>;
};

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: hp('2%'),
    paddingTop: hp('2%'),
    fontSize: hp('2%'),
    textAlign: 'justify',
    color: C_TEXT_PRIMARY,
  },
});

export default PrizeDisplayContentBottomView;
