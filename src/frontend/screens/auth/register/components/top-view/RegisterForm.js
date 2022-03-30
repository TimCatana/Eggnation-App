import React from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const RegisterForm = props => {
  const {
    email,
    handleEmailChange,
    password,
    handlePasswordChange,
    confirmPassword,
    handleConfirmPasswordChange,
  } = props;

  return (
    <>
      <Text style={styles.headingText}>REGISTER</Text>
      <TextInput
        value={email}
        onChangeText={handleEmailChange}
        placeholder="email"
        keyboardType="email-address"
        style={styles.textInput}
      />
      <TextInput
        value={password}
        onChangeText={handlePasswordChange}
        placeholder="password"
        keyboardType="default"
        style={styles.textInput}
      />
      <TextInput
        value={confirmPassword}
        onChangeText={handleConfirmPasswordChange}
        placeholder="confirm password"
        keyboardType="default"
        style={[styles.textInput, {marginBottom: 0}]}
      />
    </>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: hp('5%'),
    marginBottom: hp('2%'),
  },
  textInput: {
    // backgroundColor: 'purple',
    width: '100%',
    height: hp('5%'),
    fontSize: hp('1.5%'),
    marginBottom: hp('2%'),
  },
});

export default RegisterForm;
