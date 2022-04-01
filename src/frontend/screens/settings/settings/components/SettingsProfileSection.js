import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  EDIT_EMAIL_SCREEN,
  EDIT_PASSWORD_SCREEN,
} from '../../../../util/NavigationConstants';
import SettingsItem from './SettingsItem';
import SettingsSectionLabel from './SettingsSectionLabel';

const SettingsProfileSection = props => {
  const {email, emailVerificationStatus, navigation} = props;

  return (
    <View style={styles.body}>
      <SettingsSectionLabel label="PROFILE" />
      <View style={styles.contentView}>
        <SettingsItem
          title={'Email'}
          content={email}
          icon={'edit'}
          isLast={false}
          onIconPress={() => {
            navigation.navigate(EDIT_EMAIL_SCREEN);
          }}
        />
        <SettingsItem
          title={'EmailVerified'}
          content={`${emailVerificationStatus}`}
          icon={'done'}
          isLast={false}
        />
        <SettingsItem
          title={'Password'}
          content={'........'}
          icon={'edit'}
          isLast={true}
          onIconPress={() => {
            navigation.navigate(EDIT_PASSWORD_SCREEN);
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
  },
});

export default SettingsProfileSection;
