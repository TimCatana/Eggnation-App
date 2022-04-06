import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CustomTextInput from '../../../../../components/common/CustomTextInput';

const RegisterForm = props => {
  const {
    email,
    handleEmailChange,
    isEmailError,
    password,
    handlePasswordChange,
    isPasswordError,
    confirmPassword,
    handleConfirmPasswordChange,
    isConfirmPasswordError,
    isLoading
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
        height={hp('6%')}
        fontSize={hp('2%')}
        marginBottom={hp('1.7%')}
        isPassword={false}
        maxLength={100}
        disabled={isLoading}
        isError={isEmailError && email.length > 0}
        errorText={'please enter a valid email address'}
      />
      <CustomTextInput
        value={password}
        onValueChange={handlePasswordChange}
        placeholder="password"
        keyboardType="default"
        width={'100%'}
        height={hp('6%')}
        fontSize={hp('2%')}
        marginBottom={hp('1.7%')}
        isPassword={true}
        maxLength={30}
        disabled={isLoading}
        isError={isPasswordError && password.length > 0}
        errorText={'change password error'}
      />
      <CustomTextInput
        value={confirmPassword}
        onValueChange={handleConfirmPasswordChange}
        placeholder="confirm password"
        keyboardType="default"
        width={'100%'}
        height={hp('6%')}
        fontSize={hp('2%')}
        marginBottom={hp('1.7%')}
        isPassword={true}
        maxLength={30}
        disabled={isLoading}
        isError={isConfirmPasswordError && confirmPassword.length > 0}
        errorText={'passwords must match'}
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
