import React from 'react';
import {View, StyleSheet} from 'react-native';
import SettingsProfileSection from '../sections/SettingsProfileSection';
// TODO - once I release the app, work on implementing the contact section
import SettingsLegalSection from '../sections/SettingsLegalSection';

const SettingsScreenCenterView = props => {
  const {
    email,
    emailVerificationStatus,
    handleSendVerificationEmailClick,
    navToEditEmailScreen,
    navToEditPasswordScreen,
    navToPrivacyPolicyScreen,
    navToTermsScreen,
  } = props;

  return (
    <View style={styles.body}>
      <SettingsProfileSection
        email={email}
        emailVerificationStatus={emailVerificationStatus}
        handleSendVerificationEmailClick={handleSendVerificationEmailClick}
        navToEditEmailScreen={navToEditEmailScreen}
        navToEditPasswordScreen={navToEditPasswordScreen}
      />
      <SettingsLegalSection
        navToPrivacyPolicyScreen={navToPrivacyPolicyScreen}
        navToTermsScreen={navToTermsScreen}
      />
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
