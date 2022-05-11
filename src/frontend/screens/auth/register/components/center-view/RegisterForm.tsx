import React, {FC} from 'react';
import {Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  S_TI_EMAIL_PLACEHOLDER,
  S_TI_EMAIL_ERROR_TEXT,
  S_TI_PASSWORD_PLACEHOLDER,
  S_TI_PASSWORD_ERROR_TEXT,
  S_TI_CONFIRM_PASSWORD_PLACEHOLDER,
  S_TI_CONFIRM_PASSWORD_ERROR_TEXT,
  S_RS_REGISTER_HEADING,
} from '../../../../../../constants/Strings';
import {
  C_FOCUSED_BORDER_COLOR,
  C_TEXT_HEADING,
  C_TEXT_INPUT_TEXT_PRIMARY,
  C_UNFOCUSED_BORDER_COLOR,
} from '../../../../../../constants/Colors';
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
        placeholder={S_TI_EMAIL_PLACEHOLDER}
        errorText={S_TI_EMAIL_ERROR_TEXT}
        isError={isEmailError && email.length > 0}
        disabled={isLoading}
        maxLength={120}
        width={'100%'}
        height={hp('6.5%')}
        marginBottom={hp('1.7%')}
        fontSize={hp('2%')}
        textColor={C_TEXT_INPUT_TEXT_PRIMARY}
        unfocusedBorderColor={C_UNFOCUSED_BORDER_COLOR}
        focusedBorderColor={C_FOCUSED_BORDER_COLOR}
        keyboardType={'email-address'}
        returnKeyType={'next'}
        isPassword={false}
      />
      <CustomTextInput
        value={password}
        onValueChange={handlePasswordChange}
        placeholder={S_TI_PASSWORD_PLACEHOLDER}
        errorText={S_TI_PASSWORD_ERROR_TEXT}
        isError={isPasswordError && password.length > 0}
        disabled={isLoading}
        maxLength={30}
        width={'100%'}
        height={hp('6.5%')}
        marginBottom={hp('1.7%')}
        fontSize={hp('2%')}
        textColor={C_TEXT_INPUT_TEXT_PRIMARY}
        unfocusedBorderColor={C_UNFOCUSED_BORDER_COLOR}
        focusedBorderColor={C_FOCUSED_BORDER_COLOR}
        keyboardType={'default'}
        returnKeyType={'next'}
        isPassword={true}
      />
      <CustomTextInput
        value={confirmPassword}
        onValueChange={handleConfirmPasswordChange}
        placeholder={S_TI_CONFIRM_PASSWORD_PLACEHOLDER}
        errorText={S_TI_CONFIRM_PASSWORD_ERROR_TEXT}
        isError={isConfirmPasswordError && confirmPassword.length > 0}
        disabled={isLoading}
        maxLength={30}
        width={'100%'}
        height={hp('6.5%')}
        marginBottom={hp('1.7%')}
        fontSize={hp('2%')}
        textColor={C_TEXT_INPUT_TEXT_PRIMARY}
        unfocusedBorderColor={C_UNFOCUSED_BORDER_COLOR}
        focusedBorderColor={C_FOCUSED_BORDER_COLOR}
        keyboardType={'default'}
        returnKeyType={'done'}
        isPassword={true}
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
    color: C_TEXT_HEADING,
  },
});

export default RegisterForm;
