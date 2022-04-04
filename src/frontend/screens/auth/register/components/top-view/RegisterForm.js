import React from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CustomTextInput from '../../../../../components/common/CustomTextInput';

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
      <CustomTextInput
        value={email}
        onValueChange={handleEmailChange}
        placeholder="email"
        keyboardType="email-address"
        width={'100%'}
        height={hp('5%')}
        isPassword={false}
        maxLength={100}
      />
      <CustomTextInput
        value={password}
        onValueChange={handlePasswordChange}
        placeholder="password"
        keyboardType="default"
        width={'100%'}
        height={hp('5%')}
        isPassword={true}
        maxLength={30}
      />
      <CustomTextInput
        value={confirmPassword}
        onValueChange={handleConfirmPasswordChange}
        placeholder="confirm password"
        keyboardType="default"
        width={'100%'}
        height={hp('5%')}
        isPassword={true}
        maxLength={30}
      />
    </>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: hp('5%'),
    marginBottom: hp('2%'),
  },
});

export default RegisterForm;
