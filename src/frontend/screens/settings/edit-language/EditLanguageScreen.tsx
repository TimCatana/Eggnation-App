import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import useEditLanguageScreen from './useEditLanguageScreen';

const EditLanguageScreen: FC = () => {
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
