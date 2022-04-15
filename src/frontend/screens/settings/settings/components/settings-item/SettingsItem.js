import React from 'react';
import {View, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {C_BORDER_BOTTOM_SETTINGS_SECTION} from '../../../../../theme/Colors';
import SettingsItemLeftView from './SettingsItemLeftView';
import SettingsItemCenterView from './SettingsItemCenterView';
import SettingsItemRightView from './SettingsItemRightView';

const SettingsItem = props => {
  const {title, content, icon, isLast, onIconPress, iconDisabled} = props;

  //  TODO - add max character limit then add ellipse to content text
  return (
    <View
      style={[
        styles.body,
        isLast
          ? {}
          : {
              borderBottomWidth: hp('0.13%'),
              borderBottomColor: C_BORDER_BOTTOM_SETTINGS_SECTION,
            },
      ]}>
      <SettingsItemLeftView title={title} />
      <SettingsItemCenterView content={content} />
      <SettingsItemRightView
        icon={icon}
        onIconPress={onIconPress}
        iconDisabled={iconDisabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '97%',
    height: hp('5%'),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default SettingsItem;
