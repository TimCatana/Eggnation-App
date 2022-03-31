import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import IconFeather from 'react-native-vector-icons/Feather';
import {SETTINGS_SCREEN} from '../../../../util/NavigationConstants';

const HomeScreenSettingsIcon = props => {
  const {navigation} = props;

  return (
    <View style={styles.body}>
      <Pressable
        onPress={() => {
          navigation.navigate(SETTINGS_SCREEN);
        }}>
        <IconFeather style={styles.icon} name="settings" size={hp('3.5%')} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  icon: {
    paddingLeft: wp('1%'),
    paddingTop: hp('1%'),
  },
});

export default HomeScreenSettingsIcon;
