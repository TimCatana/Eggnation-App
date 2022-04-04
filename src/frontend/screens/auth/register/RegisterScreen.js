import React from 'react';
import useRegisterScreen from './useRegisterScreen';
import {View, ImageBackground, StyleSheet} from 'react-native';
import RegisterScreenTopView from './components/top-view/RegisterScreenTopView';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RegisterScreenBottomView from './components/bottom-view/RegisterScreenBottomView';
import BG from '../../../../../assets/bgAuth.png';

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

  // TODO - need to add some form of front end text validation and disable the button until all text is valid

  return (
    <ImageBackground style={styles.body} source={BG} resizeMode="cover">
      <RegisterScreenTopView
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
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    display: 'flex',
    paddingBottom: hp('1.5%'),
  },
  form: {
    width: '75%',
    height: '50%',
  },
  text: {
    fontSize: 50,
  },
  textInput: {
    height: '25%',
    width: '100%',
  },
});

export default RegisterScreen;
