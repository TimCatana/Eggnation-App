import React from 'react';
import {View, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {S_EES_UPDATE_EMAIL_BUTTON} from '../../../../../theme/Strings';
import {
  C_BUTTON_ENABLED,
  C_BUTTON_DISABLED,
  C_TEXT_INPUT_TEXT_LIGHT,
} from '../../../../../theme/Colors';
import CustomButton from '../../../../../common/components/CustomButton';

const UpdateEmailScreenBottomView = props => {
  const {isLoading, isNewEmailError, handleShowPasswordModal} = props;

  return (
    <View style={styles.body}>
      <CustomButton
        label={S_EES_UPDATE_EMAIL_BUTTON}
        onPress={handleShowPasswordModal}
        buttonEnabledColor={C_BUTTON_ENABLED}
        buttonDisabledColor={C_BUTTON_DISABLED}
        textColor={C_TEXT_INPUT_TEXT_LIGHT}
        fontSize={hp('2%')}
        disabled={isLoading || isNewEmailError}
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

export default UpdateEmailScreenBottomView;
