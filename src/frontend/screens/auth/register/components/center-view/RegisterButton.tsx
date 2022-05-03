import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {S_RS_REGISTER_BUTTON} from '../../../../../../constants/Strings';
import {
  C_BUTTON_ENABLED,
  C_BUTTON_DISABLED,
  C_TEXT_LIGHT,
} from '../../../../../../constants/Colors';
import {CustomButton} from '../../../../../common/components';

interface Props {
  isLoading: boolean;
  isEmailError: boolean;
  isPasswordError: boolean;
  isConfirmPasswordError: boolean;
  handleRegisterClick: () => void;
}

const RegisterButton: FC<Props> = props => {
  const {
    isLoading,
    isEmailError,
    isPasswordError,
    isConfirmPasswordError,
    handleRegisterClick,
  } = props;

  return (
    <View style={styles.body}>
      <CustomButton
        label={S_RS_REGISTER_BUTTON}
        onPress={handleRegisterClick}
        disabled={
          isLoading || isEmailError || isPasswordError || isConfirmPasswordError
        }
        buttonEnabledColor={C_BUTTON_ENABLED}
        buttonDisabledColor={C_BUTTON_DISABLED}
        textColor={C_TEXT_LIGHT}
        fontSize={hp('2%')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export default RegisterButton;
