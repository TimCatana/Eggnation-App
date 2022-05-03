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
} from '../../../../../../constants/Strings';
import {C_TEXT_INPUT_TEXT_LIGHT} from '../../../../../../constants/Colors';
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
        isError={isCurrentPasswordError && currentPassword.length > 0}
        errorText={''}
        disabled={isLoading}
        isPassword={true}
        placeholder={'current password'}
        keyboardType={S_TI_PASSWORD_KEYBOARD_TYPE}
        maxLength={100}
        width={'100%'}
        height={hp('6.5%')}
        marginBottom={hp('2%')}
        fontSize={hp('2%')}
        textColor={C_TEXT_INPUT_TEXT_LIGHT}
        unfocusedBorderColor={'gray'}
        focusedBorderColor={'pink'}
        returnKeyType={'done'}
      />
      <CustomTextInput
        value={newPassword}
        onValueChange={handleNewPasswordChange}
        isError={isNewPasswordError && newPassword.length > 0}
        errorText={S_TI_PASSWORD_ERROR_TEXT}
        disabled={isLoading}
        isPassword={true}
        placeholder={'new password'}
        keyboardType={S_TI_PASSWORD_KEYBOARD_TYPE}
        maxLength={30}
        width={'100%'}
        height={hp('6.5%')}
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
        placeholder={'confirm new password'}
        keyboardType={S_TI_CONFIRM_PASSWORD_KEYBOARD_TYPE}
        maxLength={30}
        width={'100%'}
        height={hp('6.5%')}
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
