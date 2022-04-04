import React from 'react';
import useLoginScreen from './useLoginScreen';
import {View, ImageBackground, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LoginScreenTopView from './components/top-view/LoginScreenTopView';
import LoginScreenBottomView from './components/bottom-view/LoginScreenBottomView';
import BG from '../../../../../assets/bgAuth.png'
// import { Platform } from 'react-native'; // TODO - use this later on for specific ios or android styling (use Platform.OS === 'ios', etc...)


const LoginScreen = ({navigation}) => {
  const {
    isLoading,
    email,
    handleEmailChange,
    isEmailError,
    password,
    handlePasswordChange,
    isPasswordError,
    handleLoginClick,
  } = useLoginScreen();

  return (
    <ImageBackground style={styles.body} source={BG} resizeMode="cover">
      <LoginScreenTopView
        email={email}
        handleEmailChange={handleEmailChange}
        password={password}
        handlePasswordChange={handlePasswordChange}
        isLoading={isLoading}
        isEmailError={isEmailError}
        isPasswordError={isPasswordError}
        handleLoginClick={handleLoginClick}
        navigation={navigation}
      />

      <LoginScreenBottomView isLoading={isLoading} navigation={navigation} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    display: 'flex',
    paddingBottom: hp('1.5%'),
  },
});

export default LoginScreen;
