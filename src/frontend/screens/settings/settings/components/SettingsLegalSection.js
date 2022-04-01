import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { PRIVACY_POLICY_SCREEN, TERMS_SCREEN } from '../../../../util/NavigationConstants';
import SettingsItem from './SettingsItem';
import SettingsSectionLabel from './SettingsSectionLabel';

const SettingsLegalSection = (props) => {
  const {navigation} = props

  return (
    <View style={styles.body}>
      <SettingsSectionLabel label="LEGAL" />
      <View style={styles.contentView}>
        <SettingsItem
          title={'Privacy Policy'}
          content={''}
          icon={'chevron-right'}
          isLast={false}
          onIconPress={() => {
            navigation.navigate(PRIVACY_POLICY_SCREEN)
          }}
        />
        <SettingsItem
          title={'Terms and Conditions'}
          content={''}
          icon={'chevron-right'}
          isLast={true}
          onIconPress={() => {
            navigation.navigate(TERMS_SCREEN)
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
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    marginBottom: hp('3%'),
    borderRadius: wp('2.4%'),
  }
});

export default SettingsLegalSection;
