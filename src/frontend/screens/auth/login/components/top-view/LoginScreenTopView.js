import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LoginForm from './LoginForm';
import ForgotPasswordText from './ForgotPasswordText';
import LoginButton from './LoginButton';

const LoginScreenTopView = props => {
  const {
    navigation,
    isLoading,
    email,
    handleEmailChange,
    isEmailError,
    password,
    handlePasswordChange,
    isPasswordError,
    clearTextInputs,
    handleLoginClick,
  } = props;

  return (
    <View style={styles.body}>
      <View style={styles.formView}>
        <LoginForm
          isLoading={isLoading}
          email={email}
          handleEmailChange={handleEmailChange}
          isEmailError={isEmailError}
          password={password}
          handlePasswordChange={handlePasswordChange}
        />

        <ForgotPasswordText navigation={navigation} isLoading={isLoading} clearTextInputs={clearTextInputs} />

        <LoginButton
          isLoading={isLoading}
          isEmailError={isEmailError}
          isPasswordError={isPasswordError}
          handleLoginClick={handleLoginClick}
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
    alignItems: 'center',
    marginTop: hp('15%'),
  },
  formView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('75%'),
  },
});

export default LoginScreenTopView;
