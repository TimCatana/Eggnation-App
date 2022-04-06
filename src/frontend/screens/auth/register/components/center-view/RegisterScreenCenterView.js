import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RegisterForm from './RegisterForm';
import RegisterButton from './RegisterButton';

const RegisterScreenCenterView = props => {
  const {
    isLoading,
    email,
    handleEmailChange,
    isEmailError,
    password,
    handlePasswordChange,
    isPasswordError,
    confirmPassword,
    handleConfirmPasswordChange,
    isConfirmPasswordError,
    handleRegisterClick,
  } = props;

  return (
    <View style={styles.body}>
      <View style={styles.formView}>
        <RegisterForm
          email={email}
          handleEmailChange={handleEmailChange}
          isEmailError={isEmailError}
          password={password}
          handlePasswordChange={handlePasswordChange}
          isPasswordError={isPasswordError}
          confirmPassword={confirmPassword}
          handleConfirmPasswordChange={handleConfirmPasswordChange}
          isConfirmPasswordError={isConfirmPasswordError}
          isLoading={isLoading}
        />

        <RegisterButton
          isLoading={isLoading}
          isEmailError={isEmailError}
          isPasswordError={isPasswordError}
          isConfirmPasswordError={isConfirmPasswordError}
          handleRegisterClick={handleRegisterClick}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 9,
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: hp('6%'),
    alignItems: 'center',
  },
  formView: {
    width: wp('75%'),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RegisterScreenCenterView;
