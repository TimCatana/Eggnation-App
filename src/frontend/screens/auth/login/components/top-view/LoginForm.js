import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  S_LS_LOGIN_HEADING,
  S_TI_EMAIL_PLACEHOLDER,
  S_TI_EMAIL_ERROR_TEXT,
  S_TI_EMAIL_KEYBOARD_TYPE,
  S_TI_PASSWORD_PLACEHOLDER,
  S_TI_PASSWORD_KEYBOARD_TYPE,
} from '../../../../../theme/Strings';
import {C_TEXT_INPUT_TEXT_PRIMARY} from '../../../../../theme/Colors';
import CustomTextInput from '../../../../../common/components/CustomTextInput';

const LoginForm = props => {
  const {
    isLoading,
    email,
    handleEmailChange,
    isEmailError,
    password,
    handlePasswordChange,
  } = props;

  return (
    <>
      <Text style={styles.headingText}>{S_LS_LOGIN_HEADING}</Text>
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
        marginBottom={hp('2%')}
        fontSize={hp('2%')}
        textColor={C_TEXT_INPUT_TEXT_PRIMARY}
        returnKeyType={'next'}
      />
      <CustomTextInput
        value={password}
        onValueChange={handlePasswordChange}
        isError={false}
        errorText={''}
        disabled={isLoading}
        isPassword={true}
        placeholder={S_TI_PASSWORD_PLACEHOLDER}
        keyboardType={S_TI_PASSWORD_KEYBOARD_TYPE}
        maxLength={30}
        width={'100%'}
        height={hp('6%')}
        marginBottom={hp('0.6%')}
        fontSize={hp('2%')}
        textColor={C_TEXT_INPUT_TEXT_PRIMARY}
        returnKeyType={'done'}
      />
    </>
  );
};

const styles = StyleSheet.create({
  headingText: {
    marginBottom: hp('2%'),
    fontSize: hp('5%'),
  },
});

export default LoginForm;
