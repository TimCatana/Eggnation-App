import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  S_TI_PASSWORD_ERROR_TEXT,
  S_TI_PASSWORD_KEYBOARD_TYPE,
  S_TI_PASSWORD_PLACEHOLDER,
  S_TI_CONFIRM_PASSWORD_ERROR_TEXT,
  S_TI_CONFIRM_PASSWORD_KEYBOARD_TYPE,
  S_TI_CONFIRM_PASSWORD_PLACEHOLDER,
} from '../../../../../theme/Strings';
import {C_TEXT_INPUT_TEXT_LIGHT} from '../../../../../theme/Colors';
import {CustomTextInput} from '../../../../../common/components';

interface Props {
  isLoading: boolean;
  newPassword: string;
  handleNewPasswordChange: (value: string) => void;
  isNewPasswordError: boolean;
  confirmPassword: string;
  handleConfirmPasswordChange: (value: string) => void;
  isConfirmPasswordError: boolean;
}

const UpdatePasswordScreenTopView: FC<Props> = props => {
  const {
    isLoading,
    newPassword,
    handleNewPasswordChange,
    isNewPasswordError,
    confirmPassword,
    handleConfirmPasswordChange,
    isConfirmPasswordError,
  } = props;

  return (
    <View style={styles.formView}>
      <CustomTextInput
        value={newPassword}
        onValueChange={handleNewPasswordChange}
        isError={isNewPasswordError && newPassword.length > 0}
        errorText={S_TI_PASSWORD_ERROR_TEXT}
        disabled={isLoading}
        isPassword={true}
        placeholder={S_TI_PASSWORD_PLACEHOLDER}
        keyboardType={S_TI_PASSWORD_KEYBOARD_TYPE}
        maxLength={30}
        width={'100%'}
        height={hp('5.5%')}
        marginBottom={hp('2%')}
        fontSize={hp('2%')}
        textColor={C_TEXT_INPUT_TEXT_LIGHT}
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
        height={hp('5.5%')}
        fontSize={hp('2%')}
        textColor={C_TEXT_INPUT_TEXT_LIGHT}
        unfocusedBorderColor={'gray'}
        focusedBorderColor={'pink'}
        returnKeyType={'done'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formView: {
    flex: 9,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('75%'),
  },
});

export default UpdatePasswordScreenTopView;
