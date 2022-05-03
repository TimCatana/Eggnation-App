import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  S_TI_EMAIL_ERROR_TEXT,
  S_TI_EMAIL_PLACEHOLDER,
  S_FPS_SEND_BUTTON,
} from '../../../../../../constants/Strings';
import {
  C_TEXT_INPUT_TEXT_PRIMARY,
  C_BUTTON_DISABLED,
  C_BUTTON_ENABLED,
  C_TEXT_LIGHT,
  C_UNFOCUSED_BORDER_COLOR,
  C_FOCUSED_BORDER_COLOR,
} from '../../../../../../constants/Colors';
import {CustomTextInput, CustomButton} from '../../../../../common/components';

interface Props {
  isLoading: boolean;
  email: string;
  handleEmailChange: (value: string) => void;
  isEmailError: boolean;
  handleSendForgotPasswordEmailClick: () => void;
}

const ForgotPasswordScreenCenterView: FC<Props> = props => {
  const {
    isLoading,
    email,
    handleEmailChange,
    isEmailError,
    handleSendForgotPasswordEmailClick,
  } = props;

  return (
    <View style={styles.body}>
      <View style={styles.formView}>
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
          marginBottom={hp('1.5%')}
          fontSize={hp('2%')}
          textColor={C_TEXT_INPUT_TEXT_PRIMARY}
          unfocusedBorderColor={C_UNFOCUSED_BORDER_COLOR}
          focusedBorderColor={C_FOCUSED_BORDER_COLOR}
          keyboardType={'default'}
          returnKeyType={'done'}
          isPassword={false}
        />

        <CustomButton
          label={S_FPS_SEND_BUTTON}
          onPress={handleSendForgotPasswordEmailClick}
          disabled={isLoading || isEmailError}
          buttonEnabledColor={C_BUTTON_ENABLED}
          buttonDisabledColor={C_BUTTON_DISABLED}
          textColor={C_TEXT_LIGHT}
          fontSize={hp('2%')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 6,
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: hp('25%'),
  },
  formView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('75%'),
  },
});

export default ForgotPasswordScreenCenterView;
