import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  S_TI_EMAIL_ERROR_TEXT,
  S_TI_EMAIL_PLACEHOLDER,
  S_TI_EMAIL_KEYBOARD_TYPE,
  S_FPS_SEND_BUTTON,
} from '../../../../../theme/Strings';
import {
  C_TEXT_INPUT_TEXT_PRIMARY,
  C_BUTTON_DISABLED,
  C_BUTTON_ENABLED,
  C_TEXT_LIGHT,
} from '../../../../../theme/Colors';
import CustomTextInput from '../../../../../common/components/custom-text-input/CustomTextInput';
import CustomButton from '../../../../../common/components/custom-button/CustomButton';

const ForgotPasswordScreenCenterView = props => {
  const {
    isLoading,
    email,
    handleEmailChange,
    isEmailError,
    handleSendForgotPasswordEmailClick,
  } = props;

  return (
    <View style={styles.body}>
      <CustomTextInput
        value={email}
        onValueChange={handleEmailChange}
        isError={isEmailError && email.length > 0}
        errorText={S_TI_EMAIL_ERROR_TEXT}
        disabled={isLoading}
        isPassword={false}
        placeholder={S_TI_EMAIL_PLACEHOLDER}
        keyboardType={S_TI_EMAIL_KEYBOARD_TYPE}
        maxLength={100}
        width={'100%'}
        height={hp('6%')}
        marginBottom={hp('1.5%')}
        fontSize={hp('2%')}
        textColor={C_TEXT_INPUT_TEXT_PRIMARY}
        unfocusedBorderColor={'gray'}
        focusedBorderColor={'pink'}
        returnKeyType={'done'}
      />

      <CustomButton
        label={S_FPS_SEND_BUTTON}
        onPress={handleSendForgotPasswordEmailClick}
        buttonEnabledColor={C_BUTTON_ENABLED}
        buttonDisabledColor={C_BUTTON_DISABLED}
        textColor={C_TEXT_LIGHT}
        fontSize={hp('2%')}
        disabled={isLoading || isEmailError}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 6,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: wp('75%'),
    marginTop: hp('20%'),
  },
});

export default ForgotPasswordScreenCenterView;
