import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/game/HomeScreen';
import WonPrizesScreen from '../screens/game/WonPrizesScreen';
import AvailablePrizesScreen from '../screens/game/AvailablePrizesScreen';
import {
  HOME_SCREEN,
  WON_PRIZES_SCREEN,
  AVAILABLE_PRIZES_SCREEN,
} from '../util/NavigationConstants';

const Tab = createMaterialTopTabNavigator();

const GameTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={HOME_SCREEN}
      tabBarPosition="bottom"
      activeColor="#f3a"
      inactiveColor="#2a1"
      barStyle={{backgroundColor: '#694fad'}}
      screenOptions={{
        lazy: true
      }}
      >
      <Tab.Screen name={WON_PRIZES_SCREEN} component={WonPrizesScreen} />
      <Tab.Screen name={HOME_SCREEN} component={HomeScreen} />
      <Tab.Screen
        name={AVAILABLE_PRIZES_SCREEN}
        component={AvailablePrizesScreen}
      />
    </Tab.Navigator>
  );
};

export default GameTabs;
