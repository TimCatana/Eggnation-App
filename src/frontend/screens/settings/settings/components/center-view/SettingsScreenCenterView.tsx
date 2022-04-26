import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import SettingsProfileSection from '../sections/SettingsProfileSection';
// TODO - once I release the app, work on implementing the contact section
import SettingsContactSection from '../sections/SettingsContactSection';
import SettingsLegalSection from '../sections/SettingsLegalSection';

interface Props {
  email: string;
  language: string;
  navToEditEmailScreen: () => void;
  navToEditPasswordScreen: () => void;
  navToEggnationShop: () => void;
  navToContactUs: () => void;
  navToPrivacyPolicyScreen: () => void;
  navToTermsScreen: () => void;
}

const SettingsScreenCenterView: FC<Props> = props => {
  const {
    email,
    language,
    navToEditEmailScreen,
    navToEditPasswordScreen,
    navToEggnationShop,
    navToContactUs,
    navToPrivacyPolicyScreen,
    navToTermsScreen,
  } = props;

  return (
    <View style={styles.body}>
      <SettingsProfileSection
        email={email}
        language={language}
        navToEditEmailScreen={navToEditEmailScreen}
        navToEditPasswordScreen={navToEditPasswordScreen}
      />

      <SettingsContactSection
        navToEggnationShop={navToEggnationShop}
        navToContactUs={navToContactUs}
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
