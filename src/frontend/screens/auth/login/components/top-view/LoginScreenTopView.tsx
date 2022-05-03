import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LoginForm from './LoginForm';
import ForgotPasswordText from './ForgotPasswordText';
import LoginButton from './LoginButton';

interface Props {
  isLoading: boolean;
  email: string;
  handleEmailChange: (value: string) => void;
  isEmailError: boolean;
  password: string;
  handlePasswordChange: (value: string) => void;
  isPasswordError: boolean;
  handleLoginClick: () => void;
  navToForgotPasswordScreen: () => void;
}

const LoginScreenTopView: FC<Props> = props => {
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

        <ForgotPasswordText
          navToForgotPasswordScreen={navToForgotPasswordScreen}
          isLoading={isLoading}
        />

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
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: hp('15%'),
  },
  formView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('75%'),
  },
});

export default LoginScreenTopView;
