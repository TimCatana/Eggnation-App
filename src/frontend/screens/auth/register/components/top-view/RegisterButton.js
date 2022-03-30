import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const RegisterButton = props => {
  const {
    isLoading, 
    isEmailError,
    isPasswordError,
    isConfirmPasswordError,
    handleRegisterClick,
  } = props;

  return (
    <View style={styles.body}>
      <Pressable
        disabled={isLoading || isEmailError || isPasswordError || isConfirmPasswordError}
        onPress={() => {
          handleRegisterClick();
        }}
        style={styles.registerButton}>
        <Text style={styles.loginButtonText}>Register</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButton: {
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

export default RegisterButton;
