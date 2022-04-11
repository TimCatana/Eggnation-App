import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  PRIVACY_POLICY_SCREEN,
  TERMS_SCREEN,
} from '../../../../../util/NavigationConstants';
import {
  S_SS_LEGAL_HEADING,
  S_SS_CONTACT_US,
  S_SS_PRIVACY_POLICY,
  S_SS_TERMS_AND_CONDITIONS,
} from '../../../../../theme/Strings';
import {C_BACKGROUND_SETTINGS_SECTION} from '../../../../../theme/Colors';
import SettingsItem from '../settings-item/SettingsItem';
import SettingsSectionLabel from '../settings-label/SettingsSectionLabel';

const SettingsLegalSection = props => {
  const {navigation, isLoading} = props;

  /** Navigates to privacy policy screen if no process is currently running. */
  const navToPrivacyPolicyScreen = () => {
    if (!isLoading) {
      navigation.navigate(PRIVACY_POLICY_SCREEN);
    }
  };

  /** Navigates to terms screen if no process is currently running. */
  const navToTermsScreen = () => {
    if (!isLoading) {
      navigation.navigate(TERMS_SCREEN);
    }
  };

  return (
    <View style={styles.body}>
      <SettingsSectionLabel label={S_SS_LEGAL_HEADING} />
      <View style={styles.contentView}>
        <SettingsItem
          title={S_SS_CONTACT_US}
          content={''}
          icon={'chevron-right'}
          isLast={false}
          onIconPress={() => {
            console.log('contact us pressed!');
          }}
        />
        <SettingsItem
          title={S_SS_PRIVACY_POLICY}
          content={''}
          icon={'chevron-right'}
          isLast={false}
          onIconPress={navToPrivacyPolicyScreen}
        />
        <SettingsItem
          title={S_SS_TERMS_AND_CONDITIONS}
          content={''}
          icon={'chevron-right'}
          isLast={true}
          onIconPress={navToTermsScreen}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: wp('95%'),
  },
  contentView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: hp('3%'),
    borderRadius: wp('2.4%'),
    backgroundColor: C_BACKGROUND_SETTINGS_SECTION,
  },
});

export default SettingsLegalSection;
