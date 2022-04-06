import React from 'react';
import useRegisterScreen from './useRegisterScreen';
import {ImageBackground, ActivityIndicator, StyleSheet} from 'react-native';
import RegisterScreenCenterView from './components/center-view/RegisterScreenCenterView';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import RegisterScreenBottomView from './components/bottom-view/RegisterScreenBottomView';
import BG from '../../../../../assets/bgAuth.png';
import TopLeftCornerIcon from '../../../components/common/TopLeftCornerIcon';

const RegisterScreen = ({navigation}) => {
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
  } = useRegisterScreen();

  // TODO - when I go back to loginScreen I need to not pop(), but rather to to login screen and clear stack so that the login screen inputs reset
  return (
    <ImageBackground style={styles.body} source={BG} resizeMode="cover">
      <TopLeftCornerIcon
        icon={'arrow-left'}
        onPress={() => {
          if (!isLoading) {
            navigation.pop();
          }
        }}
        viewStyle={styles.icon}
        iconStyle={{}}
        iconSize={hp('3.5%')}
      />

      <RegisterScreenCenterView
        isLoading={isLoading}
        email={email}
        handleEmailChange={handleEmailChange}
        isEmailError={isEmailError}
        password={password}
        handlePasswordChange={handlePasswordChange}
        isPasswordError={isPasswordError}
        confirmPassword={confirmPassword}
        handleConfirmPasswordChange={handleConfirmPasswordChange}
        isConfirmPasswordError={isConfirmPasswordError}
        handleRegisterClick={handleRegisterClick}
      />

      <RegisterScreenBottomView isLoading={isLoading} navigation={navigation} />

      <ActivityIndicator style={styles.loading} animating={isLoading} color="pink" size={hp('10%')} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    display: 'flex',
    paddingBottom: hp('1.5%'),
  },
  icon: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: wp('1%'),
    paddingTop: hp('1%'),
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: hp('30%'),
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default RegisterScreen;
