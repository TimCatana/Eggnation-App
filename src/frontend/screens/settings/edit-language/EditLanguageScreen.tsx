import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {C_TEXT_PRIMARY} from '../../../../constants/Colors';
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
    fontSize: hp('2%'),
    color: C_TEXT_PRIMARY,
  },
});

export default EditLanguageScreen;
