import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  S_TI_EMAIL_PLACEHOLDER,
  S_TI_EMAIL_KEYBOARD_TYPE,
  S_TI_EMAIL_ERROR_TEXT,
  S_TI_PASSWORD_KEYBOARD_TYPE,
} from '../../../../../theme/Strings';
import {C_TEXT_INPUT_TEXT_LIGHT} from '../../../../../theme/Colors';
import {CustomTextInput} from '../../../../../common/components';

interface Props {
  isLoading: boolean;
  password: string;
  handlePasswordChange: (value: string) => void;
  isPasswordError: boolean;
}

const DeleteAccountTopView: FC<Props> = props => {
  const {isLoading, password, handlePasswordChange, isPasswordError} = props;

  return (
    <View style={styles.formView}>
      <CustomTextInput
        value={password}
        onValueChange={handlePasswordChange}
        isError={isPasswordError && password.length > 0}
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

export default DeleteAccountTopView;
