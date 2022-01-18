import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from '../screens/main/HomeScreen';
import StoreScreen from '../screens/main/StoreScreen';
import PrizeHistoryScreen from '../screens/main/PrizeHistoryScreen';
import LeaderboardScreen from '../screens/main/LeaderboardScreen';
import AvailablaPrizesScreen from '../screens/main/AvailablePrizesScreen';
import SettingsScreen from '../screens/main/SettingsScreen';
import TestScreen from '../screens/main/TestScreen.js';
// import SplashScreen from '../screens/SplashScreen';

const Tab = createMaterialBottomTabNavigator();

const App = () =>  {
  return(
      <Tab.Navigator 
        initialRouteName='Home'
        activeColor="#f3a"
        inactiveColor="#2a1"
        barStyle={{ backgroundColor: '#694fad' }}
      > 
        {/* <Tab.Screen name="Splash" component={SplashScreen} /> */}
        <Tab.Screen name="AvailablaPrizesScreen" component={AvailablaPrizesScreen} />
        <Tab.Screen name="PrizeHistory" component={PrizeHistoryScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Store" component={StoreScreen} />
        <Tab.Screen name="LeaderboardScreen" component={LeaderboardScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Test" component={TestScreen} />
      </Tab.Navigator>
  );
}

export default App;
