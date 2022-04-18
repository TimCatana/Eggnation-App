import React from 'react';
import useEditLanguageScreen from './useEditLanguageScreen';
import {View, Text, StyleSheet} from 'react-native';

const EditLanguageScreen = () => {
  const {language} = useEditLanguageScreen();

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{language}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
  },
});

export default EditLanguageScreen;
