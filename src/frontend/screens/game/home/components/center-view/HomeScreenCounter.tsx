import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {C_TEXT_INPUT_TEXT_PRIMARY} from '../../../../../../constants/Colors';

interface Props {
  counter: number;
}

const HomeScreenCounter: FC<Props> = props => {
  const {counter} = props;

  return (
    <View style={styles.body}>
      <Text style={styles.counterText}>{counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: hp('7%'),
    color: C_TEXT_INPUT_TEXT_PRIMARY,
  },
});

export default HomeScreenCounter;
