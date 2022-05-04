import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  S_SS_PROFILE_HEADING,
  S_SS_EMAIL,
  S_SS_PASSWORD,
  S_SS_LANGUAGE,
  S_SS_PASSWORD_DOTS,
} from '../../../../../../constants/Strings';
import {C_BACKGROUND_SETTINGS_SECTION} from '../../../../../../constants/Colors';
import SettingsItem from '../settings-item/SettingsItem';
import SettingsSectionLabel from '../settings-label/SettingsSectionLabel';

interface Props {
  email: string;
  language: string;
  navToEditEmailScreen: () => void;
  navToEditPasswordScreen: () => void;
}

const SettingsProfileSection: FC<Props> = props => {
  const {email, language, navToEditEmailScreen, navToEditPasswordScreen} =
    props;

  return (
    <View style={styles.body}>
      <SettingsSectionLabel label={S_SS_PROFILE_HEADING} />
      <View style={styles.contentView}>
        <SettingsItem
          title={S_SS_EMAIL}
          content={email}
          icon={'edit'}
          iconDisabled={false}
          isLast={false}
          onIconPress={navToEditEmailScreen}
        />
        <SettingsItem
          title={S_SS_PASSWORD}
          content={S_SS_PASSWORD_DOTS}
          icon={'edit'}
          iconDisabled={false}
          isLast={false}
          onIconPress={navToEditPasswordScreen}
        />
        <SettingsItem
          title={S_SS_LANGUAGE}
          content={language}
          icon={'check'}
          iconDisabled={false}
          isLast={true}
          onIconPress={() => {}}
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
