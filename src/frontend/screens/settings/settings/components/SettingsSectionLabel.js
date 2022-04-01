import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
 
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
   },
   text: {
     fontSize: hp('1.5%'),
   }
});

export default SettingsSectionLabel;
