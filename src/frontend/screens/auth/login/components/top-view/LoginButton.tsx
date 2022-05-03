import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {S_LS_LOGIN_BUTTON} from '../../../../../../constants/Strings';
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
  handleLoginClick: () => void;
}

const LoginButton: FC<Props> = props => {
  const {isLoading, isEmailError, isPasswordError, handleLoginClick} = props;

  return (
    <View style={styles.body}>
      <CustomButton
        label={S_LS_LOGIN_BUTTON}
        onPress={handleLoginClick}
        disabled={isLoading || isEmailError || isPasswordError}
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

export default LoginButton;
