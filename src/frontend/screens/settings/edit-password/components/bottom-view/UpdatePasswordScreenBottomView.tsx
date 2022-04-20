import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {S_EPS_UPDATE_PASSWORD_BUTTON} from '../../../../../theme/Strings';
import {
  C_BUTTON_ENABLED,
  C_BUTTON_DISABLED,
  C_TEXT_LIGHT,
} from '../../../../../theme/Colors';
import {CustomButton} from '../../../../../common/components';

interface Props {
  isLoading: boolean;
  isPasswordError: boolean;
  isConfirmPasswordError: boolean;
  handleShowPasswordModal: () => void;
}

const UpdatePasswordScreenBottomView: FC<Props> = props => {
  const {
    isLoading,
    isPasswordError,
    isConfirmPasswordError,
    handleShowPasswordModal,
  } = props;

  return (
    <View style={styles.body}>
      <CustomButton
        label={S_EPS_UPDATE_PASSWORD_BUTTON}
        onPress={handleShowPasswordModal}
        buttonEnabledColor={C_BUTTON_ENABLED}
        buttonDisabledColor={C_BUTTON_DISABLED}
        textColor={C_TEXT_LIGHT}
        fontSize={hp('2%')}
        disabled={isLoading || isPasswordError || isConfirmPasswordError}
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
