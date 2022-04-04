import React from 'react';
import useForgotPasswordScreen from './useForgotPasswordScreen';
import {View, StyleSheet, TextInput} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomButton from '../../../components/common/CustomButton';
import CustomTextInput from '../../../components/common/CustomTextInput';

const ForgotPasswordScreen = () => {
  const {
    isLoading,
    email,
    handleEmailChange,
    isEmailError,
    handleSendForgotPasswordEmailClick,
  } = useForgotPasswordScreen();

  return (
    <View style={styles.body}>
      <View style={styles.formView}>
        <CustomTextInput
          value={email}
          onValueChange={handleEmailChange}
          placeholder="email"
          keyboardType="email-address"
          width={'100%'}
          height={hp('5%')}
          isPassword={false}
          maxLength={100}
        />

        <CustomButton
          label={'Send'}
          onPress={handleSendForgotPasswordEmailClick}
          buttonEnabledColor={'pink'}
          buttonDisabledColor={'gray'}
          textColor={'white'}
          fontSize={hp('2%')}
          disabled={isEmailError || isLoading}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formView: {
    width: wp('75%'),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    height: hp('5%'),
    fontSize: hp('1.5%'),
    marginBottom: hp('2%'),
  },
  text: {
    fontSize: 50,
  },
});

export default ForgotPasswordScreen;
