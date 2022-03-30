import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FORGOT_PASSWORD_SCREEN } from '../../../../../util/NavigationConstants';

const ForgotPasswordText = (props) => {
const {navigation, isLoading} = props

  return (
    <View style={[styles.body, {marginBottom: hp('2%')}]}>
      <Pressable
        disabled={isLoading}
        onPress={() => {
          navigation.navigate(FORGOT_PASSWORD_SCREEN);
        }}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '100%',
    paddingRight: '2%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    color: 'black',
    fontSize: hp('1.6%'),
  },
});

export default ForgotPasswordText;
