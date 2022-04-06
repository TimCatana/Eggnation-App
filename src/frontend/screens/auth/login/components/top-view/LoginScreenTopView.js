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
    email,
    handleEmailChange,
    password,
    handlePasswordChange,
    isLoading,
    isEmailError,
    isPasswordError,
    handleLoginClick,
    navigation,
  } = props;

  return (
    <View style={styles.body}>
      <View style={styles.formView}>
        <LoginForm
          email={email}
          handleEmailChange={handleEmailChange}
          isEmailError={isEmailError}
          password={password}
          handlePasswordChange={handlePasswordChange}
          isPasswordError={isPasswordError}
          isLoading={isLoading}
        />

        <ForgotPasswordText navigation={navigation} isLoading={isLoading} />

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
    marginTop: hp('15%'),
    alignItems: 'center',
  },
  formView: {
    width: wp('75%'),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreenTopView;
