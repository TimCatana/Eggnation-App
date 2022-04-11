import React from 'react';
import {View, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  S_SS_LOGOUT_BUTTON,
  S_SS_DELETE_ACCOUNT_BUTTON,
} from '../../../../../theme/Strings';
import {
  C_BUTTON_ENABLED_SETTINGS,
  C_BUTTON_DISABLED,
  C_TEXT_ERROR,
  C_TEXT_LIGHT,
} from '../../../../../theme/Colors';
import CustomButton from '../../../../../common/components/CustomButton';

const SettingsScreenBottomView = props => {
  const {isLoading, logoutUser, deleteUser} = props;

  return (
    <View style={styles.body}>
      <CustomButton
        label={S_SS_LOGOUT_BUTTON}
        onPress={logoutUser}
        disabled={isLoading}
        textColor={C_TEXT_LIGHT}
        buttonEnabledColor={C_BUTTON_ENABLED_SETTINGS}
        buttonDisabledColor={C_BUTTON_DISABLED}
        fontSize={hp('2%')}
        marginBottom={hp('0.7%')}
      />
      <CustomButton
        label={S_SS_DELETE_ACCOUNT_BUTTON}
        onPress={deleteUser}
        disabled={isLoading}
        textColor={C_TEXT_ERROR}
        buttonEnabledColor={C_BUTTON_ENABLED_SETTINGS}
        buttonDisabledColor={C_BUTTON_DISABLED}
        fontSize={hp('2%')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsScreenBottomView;
