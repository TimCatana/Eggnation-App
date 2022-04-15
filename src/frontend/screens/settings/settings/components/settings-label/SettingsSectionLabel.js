import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { C_TEXT_SETTINGS_LIGHT } from '../../../../../theme/Colors';
 
const SettingsSectionLabel = (props) =>  {
  const {label} = props

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
   body: {
     width: '97%',
     display: 'flex',
     justifyContent: 'flex-start',
     alignItems: 'flex-start',
     marginBottom: hp('0.5%'),
     marginLeft: hp('0.8%')
   },
   text: {
     fontSize: hp('1.5%'),
     color: C_TEXT_SETTINGS_LIGHT
   }
});

export default SettingsSectionLabel;
