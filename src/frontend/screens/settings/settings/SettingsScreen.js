import React from 'react';
import useSettingsScreen from './useSettingsScreen';
import {View, Text, StyleSheet, Button} from 'react-native';
import SettingsSection from './components/SettingsSection';

import {
  EDIT_EMAIL_SCREEN,
  EDIT_PASSWORD_SCREEN,
} from '../../../util/NavigationConstants';

const SettingsScreen = ({navigation}) => {
  const {
    isInitialized,
    email,
    emailVerificationStatus,
    language,
    handleSendVerificationEmailClick,
  } = useSettingsScreen();

  if (!isInitialized) return null;

  return (
    <View style={styles.body}>
      <SettingsSection/>
      {/* <Text style={styles.text}>SettingsScreen</Text>
      <Text>{email}</Text>
      <Button
        title="change email"
        onPress={() => {
          navigation.navigate(EDIT_EMAIL_SCREEN);
        }}
      />
      <Text>{emailVerificationStatus.toString()}</Text>
      <Button
        title="Send VerificationStatus"
        onPress={() => {
          handleSendVerificationEmailClick();
        }}
      />
      <Button
        title="Update password"
        onPress={() => {
          navigation.navigate(EDIT_PASSWORD_SCREEN);
        }}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
  },
});

export default SettingsScreen;
