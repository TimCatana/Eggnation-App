import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {S_EPS_UPDATE_PASSWORD_BUTTON} from '../../../../../../constants/Strings';
import {
  C_BUTTON_ENABLED,
  C_BUTTON_DISABLED,
  C_TEXT_LIGHT,
} from '../../../../../../constants/Colors';
import {CustomButton} from '../../../../../common/components';

interface Props {
  isLoading: boolean;
  isPasswordError: boolean;
  isConfirmPasswordError: boolean;
  isCurrentPasswordError: boolean;
  updatePasswordAndNavBackIfSuccess: () => void;
}

const UpdatePasswordScreenBottomView: FC<Props> = props => {
  const {
    isLoading,
    isPasswordError,
    isConfirmPasswordError,
    isCurrentPasswordError,
    updatePasswordAndNavBackIfSuccess,
  } = props;

  return (
    <View style={styles.body}>
      <CustomButton
        label={S_EPS_UPDATE_PASSWORD_BUTTON}
        onPress={updatePasswordAndNavBackIfSuccess}
        disabled={
          isLoading ||
          isPasswordError ||
          isConfirmPasswordError ||
          isCurrentPasswordError
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UpdatePasswordScreenBottomView;
