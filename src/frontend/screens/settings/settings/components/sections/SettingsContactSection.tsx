import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  S_SS_CONTACT_HEADING,
  S_SS_CONTACT_US,
  S_SS_EGGNATION,
} from '../../../../../../constants/Strings';
import {C_BACKGROUND_SETTINGS_SECTION} from '../../../../../../constants/Colors';
import SettingsItem from '../settings-item/SettingsItem';
import SettingsSectionLabel from '../settings-label/SettingsSectionLabel';

interface Props {
  navToEggnationShop: () => void;
  navToContactUs: () => void;
}

const SettingsContactSection: FC<Props> = props => {
  const {navToEggnationShop, navToContactUs} = props;

  return (
    <View style={styles.body}>
      <SettingsSectionLabel label={S_SS_CONTACT_HEADING} />
      <View style={styles.contentView}>
        <SettingsItem
          title={S_SS_EGGNATION}
          content={''}
          icon={'chevron-right'}
          iconDisabled={false}
          isLast={false}
          onIconPress={navToEggnationShop}
        />
        <SettingsItem
          title={S_SS_CONTACT_US}
          content={''}
          icon={'chevron-right'}
          iconDisabled={false}
          isLast={true}
          onIconPress={navToContactUs}
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

export default SettingsContactSection;
