import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {S_TI_CURRENT_PASSWORD_PLACEHOLDER} from '../../../../../../constants/Strings';
import {
  C_FOCUSED_BORDER_COLOR,
  C_TEXT_INPUT_TEXT_LIGHT,
  C_UNFOCUSED_BORDER_COLOR,
} from '../../../../../../constants/Colors';
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
        placeholder={S_TI_CURRENT_PASSWORD_PLACEHOLDER}
        errorText={''}
        isError={isPasswordError && password.length > 0}
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

export default DeleteAccountTopView;
