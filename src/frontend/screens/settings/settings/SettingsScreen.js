import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {C_BACKGROUND_DARK, C_ICON_LIGHT} from '../../../theme/Colors';
import TopLeftCornerIcon from '../../../common/components/TopLeftCornerIcon';
import SettingsScreenTopView from './components/top-view/SettingsScreenTopView';
import SettingsScreenCenterView from './components/center-view/SettingsScreenCenterView';
import SettingsScreenBottomView from './components/bottom-view/SettingsScreenBottomView';

import useSettingsScreen from './useSettingsScreen';

// TODO - there's something wrong with the way flex is working for the sections, I need to fix it later on
const SettingsScreen = ({navigation}) => {
  const {
    isLoading,
    isInitialized,
    email,
    emailVerificationStatus,
    language,
    handleSendVerificationEmailClick,
    logoutUser,
    deleteUser,
  } = useSettingsScreen();

  /** Navigates back to the login screen if no process is currently running. */
  const navigateBack = () => {
    if (!isLoading) {
      navigation.pop();
    }
  };

  // if (!isInitialized) return null;

  return (
    <View style={styles.body}>
      <TopLeftCornerIcon
        icon={'arrow-left'}
        onPress={navigateBack}
        iconSize={hp('3.5%')}
        iconColor={C_ICON_LIGHT}
        viewStyle={styles.icon}
        iconStyle={{}}
      />
      <SettingsScreenTopView isLoading={isLoading} />
      <SettingsScreenCenterView
        navigation={navigation}
        isLoading={isLoading}
        email={email}
        emailVerificationStatus={emailVerificationStatus}
        handleSendVerificationEmailClick={handleSendVerificationEmailClick}
      />
      <SettingsScreenBottomView
        isLoading={isLoading}
        logoutUser={logoutUser}
        deleteUser={deleteUser}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: C_BACKGROUND_DARK,
  },
  icon: {
    flex: 0.5,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    paddingLeft: wp('1%'),
    paddingTop: hp('1%'),
  },
});

export default SettingsScreen;
