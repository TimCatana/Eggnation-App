import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import SettingsItemLeftView from './left-view/SettingsItemLeftView';
import SettingsItemCenterView from './center-view/SettingsItemCenterView';
import SettingsItemRightView from './right-view/SettingsItemRightView';
// TODO import edit icon, chevron icon, checkmark icon, and send icon and dsisplay icon based on the JSON icon settings

const SettingsItem = () => {
  // const sampleSettings = [
  //   {
  //     title: 'email',
  //     content: 'userEmail',
  //     icon: 'edit',
  //   },
  //   {
  //     title: 'email',
  //     content: 'userEmail',
  //     icon: 'edit',
  //   },
  //   {
  //     title: 'email',
  //     content: 'userEmail',
  //     icon: 'edit',
  //   },
  // ];

  return (
    <View style={styles.body}>
      <SettingsItemLeftView />
      <SettingsItemCenterView />
      <SettingsItemRightView />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: wp('100%'),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default SettingsItem;
