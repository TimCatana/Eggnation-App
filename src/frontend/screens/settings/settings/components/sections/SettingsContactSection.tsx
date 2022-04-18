import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  S_SS_CONTACT_HEADING,
  S_SS_MYNZA,
  S_SS_CONTACT_US,
} from '../../../../../theme/Strings';
import {C_BACKGROUND_SETTINGS_SECTION} from '../../../../../theme/Colors';
import SettingsItem from '../settings-item/SettingsItem';
import SettingsSectionLabel from '../settings-label/SettingsSectionLabel';

const SettingsContactSection: FC = () => {
  return (
    <View style={styles.body}>
      <SettingsSectionLabel label={S_SS_CONTACT_HEADING} />
      <View style={styles.contentView}>
        <SettingsItem
          title={S_SS_MYNZA}
          content={''}
          icon={'chevron-right'}
          isLast={false}
          onIconPress={() => {
            console.log('mynza clicked');
          }}
        />
        <SettingsItem
          title={S_SS_CONTACT_US}
          content={''}
          icon={'chevron-right'}
          isLast={true}
          onIconPress={() => {
            console.log('Contact us clicked');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: wp('95%'),
    alignItems: 'center',
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

export default SettingsContactSection;
