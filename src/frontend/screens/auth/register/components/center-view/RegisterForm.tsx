import React, {FC} from 'react';
import {Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  S_TI_EMAIL_PLACEHOLDER,
  S_TI_EMAIL_KEYBOARD_TYPE,
  S_TI_EMAIL_ERROR_TEXT,
  S_TI_PASSWORD_PLACEHOLDER,
  S_TI_PASSWORD_KEYBOARD_TYPE,
  S_TI_PASSWORD_ERROR_TEXT,
  S_TI_CONFIRM_PASSWORD_PLACEHOLDER,
  S_TI_CONFIRM_PASSWORD_KEYBOARD_TYPE,
  S_TI_CONFIRM_PASSWORD_ERROR_TEXT,
  S_RS_REGISTER_HEADING,
} from '../../../../../theme/Strings';
import {
  C_TEXT_INPUT_TEXT_PRIMARY,
  C_TEXT_PRIMARY,
} from '../../../../../theme/Colors';
import {CustomTextInput} from '../../../../../common/components';
import SubscribeBox from './SubscribeBox';

interface Props {
  isLoading: boolean;
  email: string;
  handleEmailChange: (value: string) => void;
  isEmailError: boolean;
  password: string;
  handlePasswordChange: (value: string) => void;
  isPasswordError: boolean;
  confirmPassword: string;
  handleConfirmPasswordChange: (value: string) => void;
  isConfirmPasswordError: boolean;
  isSubbedToMailingList: boolean;
  handleIsSubbedToMailingListChange: () => void;
  handleEggnationShopLinkClick: () => void;
}

const RegisterForm: FC<Props> = props => {
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
    isSubbedToMailingList,
    handleIsSubbedToMailingListChange,
    handleEggnationShopLinkClick,
  } = props;

  return (
    <>
      <Text style={styles.headingText}>{S_RS_REGISTER_HEADING}</Text>
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
        height={hp('6.5%')}
        marginBottom={hp('1.7%')}
        fontSize={hp('2%')}
        textColor={C_TEXT_INPUT_TEXT_PRIMARY}
        unfocusedBorderColor={'gray'}
        focusedBorderColor={'pink'}
        returnKeyType={'next'}
      />
      <CustomTextInput
        value={password}
        onValueChange={handlePasswordChange}
        isError={isPasswordError && password.length > 0}
        errorText={S_TI_PASSWORD_ERROR_TEXT}
        disabled={isLoading}
        isPassword={true}
        placeholder={S_TI_PASSWORD_PLACEHOLDER}
        keyboardType={S_TI_PASSWORD_KEYBOARD_TYPE}
        maxLength={30}
        width={'100%'}
        height={hp('6.5%')}
        marginBottom={hp('1.7%')}
        fontSize={hp('2%')}
        textColor={C_TEXT_INPUT_TEXT_PRIMARY}
        unfocusedBorderColor={'gray'}
        focusedBorderColor={'pink'}
        returnKeyType={'next'}
      />
      <CustomTextInput
        value={confirmPassword}
        onValueChange={handleConfirmPasswordChange}
        isError={isConfirmPasswordError && confirmPassword.length > 0}
        errorText={S_TI_CONFIRM_PASSWORD_ERROR_TEXT}
        disabled={isLoading}
        isPassword={true}
        placeholder={S_TI_CONFIRM_PASSWORD_PLACEHOLDER}
        keyboardType={S_TI_CONFIRM_PASSWORD_KEYBOARD_TYPE}
        maxLength={30}
        width={'100%'}
        height={hp('6.5%')}
        marginBottom={hp('1.7%')}
        fontSize={hp('2%')}
        textColor={C_TEXT_INPUT_TEXT_PRIMARY}
        unfocusedBorderColor={'gray'}
        focusedBorderColor={'pink'}
        returnKeyType={'done'}
      />

      <SubscribeBox
        isSubbedToMailingList={isSubbedToMailingList}
        handleIsSubbedToMailingListChange={handleIsSubbedToMailingListChange}
        handleEggnationShopLinkClick={handleEggnationShopLinkClick}
      />
    </>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: hp('5%'),
    marginBottom: hp('2%'),
    color: C_TEXT_PRIMARY,
  },
});

export default RegisterForm;
