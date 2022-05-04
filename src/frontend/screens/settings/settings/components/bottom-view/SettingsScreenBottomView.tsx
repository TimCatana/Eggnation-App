import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  S_SS_LOGOUT_BUTTON,
  S_SS_DELETE_ACCOUNT_BUTTON,
} from '../../../../../../constants/Strings';
import {
  C_BUTTON_TRANSPARENT,
  C_TEXT_ERROR,
  C_TEXT_LIGHT,
} from '../../../../../../constants/Colors';
import {CustomButton} from '../../../../../common/components';

interface Props {
  isLoading: boolean;
  logoutUser: () => void;
  navToDeleteAccountScreenScreen: () => void;
}

const SettingsScreenBottomView: FC<Props> = props => {
  const {isLoading, logoutUser, navToDeleteAccountScreenScreen} = props;

  return (
    <View style={styles.body}>
      <CustomButton
        label={S_SS_LOGOUT_BUTTON}
        onPress={logoutUser}
        disabled={isLoading}
        textColor={C_TEXT_LIGHT}
        buttonEnabledColor={C_BUTTON_TRANSPARENT}
        buttonDisabledColor={C_BUTTON_TRANSPARENT} // TODO find a disabled color that looks good
        fontSize={hp('2%')}
        marginBottom={hp('0.7%')}
      />
      <CustomButton
        label={S_SS_DELETE_ACCOUNT_BUTTON}
        onPress={navToDeleteAccountScreenScreen}
        disabled={isLoading}
        textColor={C_TEXT_ERROR}
        buttonEnabledColor={C_BUTTON_TRANSPARENT}
        buttonDisabledColor={C_BUTTON_TRANSPARENT} // TODO find a disabled color that looks good
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
    alignItems: 'flex-start',
  },
});

export default SettingsScreenBottomView;
