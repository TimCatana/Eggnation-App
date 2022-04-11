import React from 'react';
import {Pressable} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {C_ICON_LIGHT} from '../../../../../theme/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SettingsMediaSection = props => {
  const {isLoading} = props;

  return (
    <>
      <Pressable
        onPress={() => {
          console.log('facebook clicked');
        }}
        disabled={isLoading}
        style={{paddingRight: 20}}>
        <FontAwesome name={'facebook'} size={hp('6%')} color={C_ICON_LIGHT} />
      </Pressable>
      <Pressable
        onPress={() => {
          console.log('instagram clicked');
        }}
        disabled={isLoading}
        style={{paddingRight: 20}}>
        <FontAwesome name={'instagram'} size={hp('6%')} color={C_ICON_LIGHT} />
      </Pressable>
      <Pressable
        onPress={() => {
          console.log('twitter clicked');
        }}
        disabled={isLoading}>
        <FontAwesome name={'twitter'} size={hp('6%')} color={C_ICON_LIGHT} />
      </Pressable>
    </>
  );
};

export default SettingsMediaSection;
