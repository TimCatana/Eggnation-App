import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {S_EES_UPDATE_EMAIL_BUTTON} from '../../../../../../constants/Strings';
import {
  C_BUTTON_ENABLED,
  C_BUTTON_DISABLED,
  C_TEXT_INPUT_TEXT_LIGHT,
} from '../../../../../../constants/Colors';
import {CustomButton} from '../../../../../common/components';

interface Props {
  isLoading: boolean;
  isNewEmailError: boolean;
  isPasswordError: boolean;
  updateEmailAndNavBackIfSuccess: () => void;
}

const UpdateEmailScreenBottomView: FC<Props> = props => {
  const {
    isLoading,
    isNewEmailError,
    isPasswordError,
    updateEmailAndNavBackIfSuccess,
  } = props;

  return (
    <View style={styles.body}>
      <CustomButton
        label={S_EES_UPDATE_EMAIL_BUTTON}
        onPress={updateEmailAndNavBackIfSuccess}
        disabled={isLoading || isNewEmailError || isPasswordError}
        buttonEnabledColor={C_BUTTON_ENABLED}
        buttonDisabledColor={C_BUTTON_DISABLED}
        textColor={C_TEXT_INPUT_TEXT_LIGHT}
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

export default UpdateEmailScreenBottomView;
