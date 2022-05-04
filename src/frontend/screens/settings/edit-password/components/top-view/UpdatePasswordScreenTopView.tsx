import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  S_TI_PASSWORD_ERROR_TEXT,
  S_TI_CONFIRM_PASSWORD_ERROR_TEXT,
  S_TI_CURRENT_PASSWORD_PLACEHOLDER,
  S_TI_NEW_PASSWORD_PLACEHOLDER,
  S_TI_CONFIRM_NEW_PASSWORD_PLACEHOLDER,
} from '../../../../../../constants/Strings';
import {
  C_FOCUSED_BORDER_COLOR,
  C_TEXT_INPUT_TEXT_LIGHT,
  C_UNFOCUSED_BORDER_COLOR,
} from '../../../../../../constants/Colors';
import {CustomTextInput} from '../../../../../common/components';

interface Props {
  isLoading: boolean;
  newPassword: string;
  handleNewPasswordChange: (value: string) => void;
  isNewPasswordError: boolean;
  confirmPassword: string;
  handleConfirmPasswordChange: (value: string) => void;
  isConfirmPasswordError: boolean;
  currentPassword: string;
  handleCurrentPasswordChange: (value: string) => void;
  isCurrentPasswordError: boolean;
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
    currentPassword,
    handleCurrentPasswordChange,
    isCurrentPasswordError,
  } = props;

  return (
    <View style={styles.formView}>
      <CustomTextInput
        value={currentPassword}
        onValueChange={handleCurrentPasswordChange}
        placeholder={S_TI_CURRENT_PASSWORD_PLACEHOLDER}
        errorText={''}
        isError={isCurrentPasswordError && currentPassword.length > 0}
        disabled={isLoading}
        maxLength={100}
        width={'100%'}
        height={hp('6.5%')}
        marginBottom={hp('2%')}
        fontSize={hp('2%')}
        textColor={C_TEXT_INPUT_TEXT_LIGHT}
        unfocusedBorderColor={C_UNFOCUSED_BORDER_COLOR}
        focusedBorderColor={C_FOCUSED_BORDER_COLOR}
        keyboardType={'default'}
        returnKeyType={'next'}
        isPassword={true}
      />
      <CustomTextInput
        value={newPassword}
        onValueChange={handleNewPasswordChange}
        placeholder={S_TI_NEW_PASSWORD_PLACEHOLDER}
        errorText={S_TI_PASSWORD_ERROR_TEXT}
        isError={isNewPasswordError && newPassword.length > 0}
        disabled={isLoading}
        maxLength={30}
        width={'100%'}
        height={hp('6.5%')}
        marginBottom={hp('2%')}
        fontSize={hp('2%')}
        textColor={C_TEXT_INPUT_TEXT_LIGHT}
        unfocusedBorderColor={C_UNFOCUSED_BORDER_COLOR}
        focusedBorderColor={C_FOCUSED_BORDER_COLOR}
        keyboardType={'default'}
        returnKeyType={'next'}
        isPassword={true}
      />
      <CustomTextInput
        value={confirmPassword}
        onValueChange={handleConfirmPasswordChange}
        placeholder={S_TI_CONFIRM_NEW_PASSWORD_PLACEHOLDER}
        errorText={S_TI_CONFIRM_PASSWORD_ERROR_TEXT}
        isError={isConfirmPasswordError && confirmPassword.length > 0}
        disabled={isLoading}
        maxLength={30}
        width={'100%'}
        height={hp('6.5%')}
        fontSize={hp('2%')}
        textColor={C_TEXT_INPUT_TEXT_LIGHT}
        unfocusedBorderColor={C_UNFOCUSED_BORDER_COLOR}
        focusedBorderColor={C_FOCUSED_BORDER_COLOR}
        keyboardType={'default'}
        returnKeyType={'done'}
        isPassword={true}
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
