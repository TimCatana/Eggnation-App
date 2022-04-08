import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { EDIT_EMAIL_SCREEN } from '../../../../util/NavigationConstants';
import SettingsItem from './SettingsItem';
import SettingsSectionLabel from './SettingsSectionLabel';

const SettingsContactSection = (props) => {
  const {navigation} = props

  return (
    <View style={styles.body}>
      <SettingsSectionLabel label="CONTACT" />
      <View style={styles.contentView}>
        <SettingsItem
          title={'Mynza'}
          content={''}
          icon={'chevron-right'}
          isLast={false}
        />
        <SettingsItem
          title={'Contact Us'}
          content={''}
          icon={'chevron-right'}
          isLast={true}
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
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    marginBottom: hp('3%'),
    borderRadius: wp('2.4%'),
  }
});

export default SettingsContactSection;
