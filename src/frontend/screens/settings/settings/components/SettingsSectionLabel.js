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
     marginBottom: hp('0.5%')
   },
   text: {
     fontSize: hp('1.5%'),
     color: '#e2e2e2'
   }
});

export default SettingsSectionLabel;
