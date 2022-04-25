import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  S_SS_PROFILE_HEADING,
  S_SS_EMAIL,
  S_SS_EMAIL_VERIFIED,
  S_SS_PASSWORD,
} from '../../../../../theme/Strings';
import {C_BACKGROUND_SETTINGS_SECTION} from '../../../../../theme/Colors';
import SettingsItem from '../settings-item/SettingsItem';
import SettingsSectionLabel from '../settings-label/SettingsSectionLabel';

interface Props {
  email: string;
  emailVerificationStatus: boolean | null;
  handleSendVerificationEmailClick: () => void;
  navToEditEmailScreen: () => void;
  navToEditPasswordScreen: () => void;
}

const SettingsProfileSection: FC<Props> = props => {
  const {
    email,
    emailVerificationStatus,
    handleSendVerificationEmailClick,
    navToEditEmailScreen,
    navToEditPasswordScreen,
  } = props;

  return (
    <View style={styles.body}>
      <SettingsSectionLabel label={S_SS_PROFILE_HEADING} />
      <View style={styles.contentView}>
        <SettingsItem
          title={S_SS_EMAIL}
          content={email}
          icon={'edit'}
          isLast={false}
          onIconPress={navToEditEmailScreen}
          iconDisabled={false}
        />
        <SettingsItem
          title={S_SS_EMAIL_VERIFIED}
          content={
            emailVerificationStatus != null ? `${emailVerificationStatus}` : 'unknown'
          }
          icon={emailVerificationStatus ? 'done' : 'send'}
          isLast={false}
          onIconPress={handleSendVerificationEmailClick}
          iconDisabled={
            emailVerificationStatus ? emailVerificationStatus : true
          }
        />
        <SettingsItem
          title={S_SS_PASSWORD}
          content={'●●●●●●●'}
          icon={'edit'}
          isLast={true}
          onIconPress={navToEditPasswordScreen}
          iconDisabled={false}
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

export default SettingsProfileSection;
