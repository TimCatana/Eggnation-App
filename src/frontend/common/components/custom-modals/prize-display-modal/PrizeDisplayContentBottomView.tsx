import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {C_TEXT_PRIMARY} from '../../../../../constants/Colors';

interface Props {
  prizeDesc: string;
}

const PrizeDisplayContentBottomView: FC<Props> = props => {
  const {prizeDesc} = props;

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{prizeDesc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {},
  text: {
    paddingHorizontal: hp('2%'),
    paddingTop: hp('2%'),
    fontSize: hp('2%'),
    textAlign: 'justify',
    color: C_TEXT_PRIMARY,
  },
});

export default PrizeDisplayContentBottomView;
