import React from 'react';
import {View, StyleSheet} from 'react-native';
import SettingsProfileSection from '../sections/SettingsProfileSection';
// TODO - once I release the app, work on implementing the contact section
import SettingsLegalSection from '../sections/SettingsLegalSection';

const SettingsScreenCenterView = props => {
  const {navigation, isLoading, email, emailVerificationStatus, handleSendVerificationEmailClick} = props;

  return (
    <View style={styles.body}>
      <SettingsProfileSection
        navigation={navigation}
        isLoading={isLoading}
        email={email}
        emailVerificationStatus={emailVerificationStatus}
        handleSendVerificationEmailClick={handleSendVerificationEmailClick}
      />
      <SettingsLegalSection navigation={navigation} isLoading={isLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 8,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default SettingsScreenCenterView;
