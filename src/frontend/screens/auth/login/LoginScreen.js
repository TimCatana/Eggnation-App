import React from 'react';
import useLoginScreen from './useLoginScreen';
import {View, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LoginScreenTopView from './components/top-view/LoginScreenTopView';
import LoginScreenBottomView from './components/bottom-view/LoginScreenBottomView';
// import { Platform } from 'react-native'; // TODO - use this later on for specific ios or android styling (use Platform.OS === 'ios', etc...)

const LoginScreen = ({navigation}) => {
  const {
    isLoading,
    email,
    handleEmailChange,
    isEmailError,
    password,
    handlePasswordChange,
    handleLoginClick,
  } = useLoginScreen();

  return (
    <View style={styles.body}>
      <LoginScreenTopView
        email={email}
        handleEmailChange={handleEmailChange}
        password={password}
        handlePasswordChange={handlePasswordChange}
        isLoading={isLoading}
        isEmailError={isEmailError}
        handleLoginClick={handleLoginClick}
        navigation={navigation}
      />

      <LoginScreenBottomView isLoading={isLoading} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    // backgroundColor: 'orange',
    flex: 1,
    display: 'flex',
    paddingBottom: hp('1.5%'),
  },
});

export default LoginScreen;
