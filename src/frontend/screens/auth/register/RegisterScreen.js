import React from 'react';
import {ImageBackground, ActivityIndicator, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {C_ICON_PRIMARY, C_ACTIVITY_INDICATOR} from '../../../theme/Colors';
import background from '../../../../../assets/backgrounds/bg_auth.png';
import TopLeftCornerIcon from '../../../common/components/top-left-corner-icon/TopLeftCornerIcon';
import RegisterScreenCenterView from './components/center-view/RegisterScreenCenterView';
import RegisterScreenBottomView from './components/bottom-view/RegisterScreenBottomView';

import useRegisterScreen from './useRegisterScreen';

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
    navigateBack,
    navToPrivacyPolicyScreen,
    navToTermsScreen,
  } = useRegisterScreen(navigation);

  return (
    <ImageBackground style={styles.body} source={background} resizeMode="cover">
      <TopLeftCornerIcon
        icon={'arrow-left'}
        onPress={navigateBack}
        iconSize={hp('3.5%')}
        iconColor={C_ICON_PRIMARY}
        viewStyle={styles.icon}
        iconStyle={{}}
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

      <RegisterScreenBottomView
        isLoading={isLoading}
        navToPrivacyPolicyScreen={navToPrivacyPolicyScreen}
        navToTermsScreen={navToTermsScreen}
      />

      <ActivityIndicator
        style={styles.loading}
        animating={isLoading}
        color={C_ACTIVITY_INDICATOR}
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
    top: 0,
    right: 0,
    bottom: hp('30%'),
    left: 0,
  },
});

export default RegisterScreen;
