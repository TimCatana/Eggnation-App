import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CustomButton from '../../../../../components/common/CustomButton';

const LoginButton = props => {
  const {isLoading, isEmailError, isPasswordError, handleLoginClick} = props;

  return (
    <View style={styles.body}>
      <CustomButton
        label={'Login'}
        onPress={handleLoginClick}
        buttonEnabledColor={'pink'}
        buttonDisabledColor={'gray'}
        textColor={'white'}
        fontSize={hp('2%')}
        disabled={isEmailError || isPasswordError ||  isLoading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    width: wp('20%'),
    height: hp('5%'),
    borderRadius: wp('2%'),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  loginButtonText: {
    fontSize: hp('2%'),
    color: 'white',
  },
});

export default LoginButton;
