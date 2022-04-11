import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {S_LS_FORGOT_PASSWORD} from '../../../../../theme/Strings';
import {C_TEXT_LINK_DARK} from '../../../../../theme/Colors';
import {FORGOT_PASSWORD_SCREEN} from '../../../../../util/NavigationConstants';

const ForgotPasswordText = props => {
  const {navigation, isLoading, clearTextInputs} = props;

  /**
   * Navigates to forgot password screen if no process is currently running.
   */
  const navToForgotPasswordScreen = () => {
    if (!isLoading) {
      navigation.navigate(FORGOT_PASSWORD_SCREEN);
      clearTextInputs();
    }
  };

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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
    paddingRight: '2%',
    marginBottom: hp('2%'),
  },
  forgotPasswordText: {
    fontSize: hp('1.6%'),
    color: C_TEXT_LINK_DARK,
  },
});

export default ForgotPasswordText;
