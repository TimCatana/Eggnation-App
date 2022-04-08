import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SettingsMediaSection = () => {
  return (
    <>
      <Pressable style={{paddingRight: 20}}>
        <FontAwesome name={'facebook'} size={hp('6%')} color="white" />
      </Pressable>
      <Pressable>
        <FontAwesome name={'twitter'} size={hp('6%')} color="white" />
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({});

export default SettingsMediaSection;
