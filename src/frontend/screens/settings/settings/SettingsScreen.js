import React from 'react';
import {View, StyleSheet} from 'react-native';
import {C_BACKGROUND_DARK} from '../../../theme/Colors';
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

  if (!isInitialized) return null;

  return (
    <View style={styles.body}>
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
});

export default SettingsScreen;
