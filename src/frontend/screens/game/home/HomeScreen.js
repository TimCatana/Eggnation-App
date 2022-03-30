import React from 'react';
import useHomeScreen from './useHomeScreen';
import {View, Text, StyleSheet, Button} from 'react-native';
import {SETTINGS_SCREEN} from '../../../util/NavigationConstants';

const HomeScreen = ({navigation}) => {
  const {isInitialized, localCount, playGame, logoutUser} = useHomeScreen();

  if (!isInitialized) return null;

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{localCount}</Text>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="logout"
        onPress={() => {
          logoutUser();
        }}
      />
      <Button
        title="Settings"
        onPress={() => {
          navigation.navigate(SETTINGS_SCREEN);
        }}
      />
      <Button
        title="play game"
        onPress={async () => {
          await playGame();
        }}
      />
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

export default HomeScreen;
