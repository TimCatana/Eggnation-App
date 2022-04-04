import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const SettingsMediaSection = () => {
  return (
    <>
      <Pressable style={styles.icon}>
        <FontAwesome name={'facebook'} size={50} color="blue" />
      </Pressable>
      <Pressable style={styles.icon}>
        <FontAwesome name={'instagram'} size={50} color="red" />
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    paddingRight: 20
  }
});

export default SettingsMediaSection;
