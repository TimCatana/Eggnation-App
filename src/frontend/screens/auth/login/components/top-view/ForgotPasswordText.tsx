import React, {FC} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {S_LS_FORGOT_PASSWORD} from '../../../../../../constants/Strings';
import {C_TEXT_LINK_DARK} from '../../../../../../constants/Colors';

interface Props {
  isLoading: boolean;
  navToForgotPasswordScreen: () => void;
}

const ForgotPasswordText: FC<Props> = props => {
  const {isLoading, navToForgotPasswordScreen} = props;

  return (
    <View style={styles.body}>
      <Pressable disabled={isLoading} onPress={navToForgotPasswordScreen}>
        <Text style={styles.forgotPasswordText}>{S_LS_FORGOT_PASSWORD}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: wp('2%'),
    marginBottom: hp('2%'),
  },
  forgotPasswordText: {
    fontSize: hp('1.6%'),
    color: C_TEXT_LINK_DARK,
  },
});

export default ForgotPasswordText;
