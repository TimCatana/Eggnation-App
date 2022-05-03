import React, {FC} from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {S_LS_REGISTER_HERE} from '../../../../../../constants/Strings';
import {C_TEXT_LINK_PRIMARY} from '../../../../../../constants/Colors';

interface Props {
  isLoading: boolean;
  navToRegisterScreen: () => void;
}

const RegisterHereText: FC<Props> = props => {
  const {isLoading, navToRegisterScreen} = props;

  return (
    <Pressable disabled={isLoading} onPress={navToRegisterScreen}>
      <Text style={styles.text}>{S_LS_REGISTER_HERE}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: hp('2%'),
    color: C_TEXT_LINK_PRIMARY,
  },
});

export default RegisterHereText;
