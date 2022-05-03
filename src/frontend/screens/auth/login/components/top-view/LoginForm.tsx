import React, {FC} from 'react';
import {Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  S_LS_LOGIN_HEADING,
  S_TI_EMAIL_PLACEHOLDER,
  S_TI_EMAIL_ERROR_TEXT,
  S_TI_PASSWORD_PLACEHOLDER,
} from '../../../../../../constants/Strings';
import {
  C_FOCUSED_BORDER_COLOR,
  C_TEXT_HEADING,
  C_TEXT_INPUT_TEXT_PRIMARY,
  C_UNFOCUSED_BORDER_COLOR,
} from '../../../../../../constants/Colors';
import {CustomTextInput} from '../../../../../common/components';

interface Props {
  isLoading: boolean;
  email: string;
  handleEmailChange: (value: string) => void;
  isEmailError: boolean;
  password: string;
  handlePasswordChange: (value: string) => void;
}

const LoginForm: FC<Props> = props => {
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
        placeholder={S_TI_EMAIL_PLACEHOLDER}
        errorText={S_TI_EMAIL_ERROR_TEXT}
        isError={isEmailError && email.length > 0}
        disabled={isLoading}
        maxLength={100}
        width={'100%'}
        height={hp('6.5%')}
        marginBottom={hp('2%')}
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
        errorText={''}
        isError={false}
        disabled={isLoading}
        maxLength={30}
        width={'100%'}
        height={hp('6.5%')}
        marginBottom={hp('0.6%')}
        fontSize={hp('2%')}
        textColor={C_TEXT_INPUT_TEXT_PRIMARY}
        unfocusedBorderColor={C_UNFOCUSED_BORDER_COLOR}
        focusedBorderColor={C_FOCUSED_BORDER_COLOR}
        keyboardType={'default'}
        returnKeyType={'done'}
        isPassword={true}
      />
    </>
  );
};

const styles = StyleSheet.create({
  headingText: {
    marginBottom: hp('2%'),
    fontSize: hp('5%'),
    color: C_TEXT_HEADING,
  },
});

export default LoginForm;
