import React from 'react';
import {View,StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomTextInput from '../../../../../components/common/CustomTextInput'
import CustomButton from '../../../../../components/common/CustomButton';

const ForgotPasswordScreenCenterView = props => {
  const {
    email,
    handleEmailChange,
    isEmailError,
    handleSendForgotPasswordEmailClick,
    isLoading,
  } = props;

  return (
    <View style={styles.body}>
      <CustomTextInput
        value={email}
        onValueChange={handleEmailChange}
        placeholder="email"
        keyboardType="email-address"
        width={'100%'}
        height={hp('6%')}
        fontSize={hp('2%')}
        marginBottom={hp('1.5%')}
        isPassword={false}
        maxLength={100}
        isError={isEmailError && email.length > 0}
        errorText={'please enter a valid email'}
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
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 6,
    width: wp('75%'),
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: hp('20%'),
    alignItems: 'center',
  },
});

export default ForgotPasswordScreenCenterView;
