import React, {FC} from 'react';
import {ImageBackground, ActivityIndicator, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {backgroundAuth} from '../../../../../assets';
import {
  C_ICON_PRIMARY,
  C_ACTIVITY_INDICATOR,
} from '../../../../constants/Colors';
import {PressableIcon} from '../../../common/components';
import ForgotPasswordScreenCenterView from './components/center-view/ForgotPasswordScreenCenterView';

import useForgotPasswordScreen from './useForgotPasswordScreen';

const ForgotPasswordScreen: FC = () => {
  const {
    isLoading,
    email,
    handleEmailChange,
    isEmailError,
    handleSendForgotPasswordEmailClick,
    navigateBack,
  } = useForgotPasswordScreen();

  return (
    <ImageBackground
      style={styles.body}
      source={backgroundAuth}
      resizeMode="cover">
      <ForgotPasswordScreenCenterView
        isLoading={isLoading}
        email={email}
        handleEmailChange={handleEmailChange}
        isEmailError={isEmailError}
        handleSendForgotPasswordEmailClick={handleSendForgotPasswordEmailClick}
      />

      <PressableIcon
        icon={'arrow-left'}
        onPress={navigateBack}
        iconSize={hp('4%')}
        iconColor={C_ICON_PRIMARY}
        viewStyle={styles.icon}
        iconStyle={{}}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    left: hp('0.4%'),
    top: hp('0.4%'),
  },
  loading: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});

export default ForgotPasswordScreen;
