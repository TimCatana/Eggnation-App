import React, {FC} from 'react';
import {
  View,
  ImageBackground,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {backgroundAuth} from '../../../../../assets';
import {C_ACTIVITY_INDICATOR} from '../../../theme/Colors';
import LoginScreenTopView from './components/top-view/LoginScreenTopView';
import LoginScreenBottomView from './components/bottom-view/LoginScreenBottomView';

import useLoginScreen from './useLoginScreen';

const LoginScreen: FC = () => {
  const {
    isLoading,
    email,
    handleEmailChange,
    isEmailError,
    password,
    handlePasswordChange,
    isPasswordError,
    handleLoginClick,
    navToForgotPasswordScreen,
    navToRegisterScreen,
  } = useLoginScreen();

  return (
    <ImageBackground
      style={styles.body}
      source={backgroundAuth}
      resizeMode="cover">
      <LoginScreenTopView
        navToForgotPasswordScreen={navToForgotPasswordScreen}
        isLoading={isLoading}
        email={email}
        handleEmailChange={handleEmailChange}
        isEmailError={isEmailError}
        password={password}
        handlePasswordChange={handlePasswordChange}
        isPasswordError={isPasswordError}
        handleLoginClick={handleLoginClick}
      />

      <LoginScreenBottomView
        navToRegisterScreen={navToRegisterScreen}
        isLoading={isLoading}
      />

      <ActivityIndicator
        style={styles.loading}
        animating={isLoading}
        size={hp('10%')}
        color={C_ACTIVITY_INDICATOR}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    display: 'flex',
    paddingBottom: hp('1.5%'),
  },
  loading: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: hp('36%'),
    left: 0,
  },
});

export default LoginScreen;
