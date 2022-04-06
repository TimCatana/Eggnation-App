import React from 'react';
import useForgotPasswordScreen from './useForgotPasswordScreen';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomButton from '../../../components/common/CustomButton';
import CustomTextInput from '../../../components/common/CustomTextInput';
import TopLeftCornerIcon from '../../../components/common/TopLeftCornerIcon';
import BG from '../../../../../assets/bgAuth.png';
import ForgotPasswordScreenCenterView from './components/center-view/ForgotPasswordScreenCenterView';

const ForgotPasswordScreen = ({navigation}) => {
  const {
    isLoading,
    email,
    handleEmailChange,
    isEmailError,
    handleSendForgotPasswordEmailClick,
  } = useForgotPasswordScreen();

  return (
    <ImageBackground style={styles.body} source={BG} resizeMode="cover">
      <TopLeftCornerIcon
        icon={'arrow-left'}
        onPress={() => {
          navigation.pop();
        }}
        viewStyle={styles.icon}
        iconStyle={{}}
        iconSize={hp('3.5%')}
      />

      <ForgotPasswordScreenCenterView
        email={email}
        handleEmailChange={handleEmailChange}
        isEmailError={isEmailError}
        handleSendForgotPasswordEmailClick={handleSendForgotPasswordEmailClick}
        isLoading={isLoading}
      />

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
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    flex: 1,
    width: '100%',
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
    top: hp('5%'),
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ForgotPasswordScreen;
