import React from 'react';
import useLoginScreen from './useLoginScreen';
import {ActivityIndicator, ImageBackground, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LoginScreenTopView from './components/top-view/LoginScreenTopView';
import LoginScreenBottomView from './components/bottom-view/LoginScreenBottomView';
import BG from '../../../../../assets/bgAuth.png';
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
    handleLoginClick
  } = useLoginScreen();



  return (
    <ImageBackground style={styles.body} source={BG} resizeMode="cover">
      <LoginScreenTopView
        email={email}
        handleEmailChange={handleEmailChange}
        isEmailError={isEmailError}
        password={password}
        isPasswordError={isPasswordError}
        handlePasswordChange={handlePasswordChange}
        isLoading={isLoading}
        handleLoginClick={handleLoginClick}
        navigation={navigation}
      />

      <LoginScreenBottomView isLoading={isLoading} navigation={navigation} />

      <ActivityIndicator
        style={styles.loading}
        animating={isLoading}
        color="pink"
        size={hp('10%')}
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
    left: 0,
    right: 0,
    top: 0,
    bottom: hp('36%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
