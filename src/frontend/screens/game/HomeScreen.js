import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';
import {logoutUserUC} from '../../../domain/logoutUserUC';
import { SETTINGS_SCREEN, SETTINGS_STACK } from '../../util/NavigationConstants';

const HomeScreen = ({navigation}) =>  {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
      title="logout"
      onPress={() => {logoutUserUC()}}
      />
      <Button 
      title="Settings"
      onPress={() => {navigation.navigate(SETTINGS_SCREEN)}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
   body: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
   },
   text: {
     fontSize: 50,
   }
});

export default HomeScreen;
