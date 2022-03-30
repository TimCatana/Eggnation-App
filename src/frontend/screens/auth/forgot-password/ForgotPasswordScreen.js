import React from 'react';
import useForgotPasswordScreen from './useForgotPasswordScreen';
import {View, StyleSheet, TextInput} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SendForgotPasswordEmailButton from './components/SendForgotPasswordEmailButton';

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
        <TextInput
          value={email}
          onChangeText={handleEmailChange}
          placeholder="email"
          keyboardType="email-address"
          style={styles.textInput}
        />

        <SendForgotPasswordEmailButton
          isLoading={isLoading}
          isEmailError={isEmailError}
          handleSendForgotPasswordEmailClick={
            handleSendForgotPasswordEmailClick
          }
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
    // backgroundColor: 'purple',
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
