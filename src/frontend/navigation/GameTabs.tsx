import React, {FC, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {HomeScreen, WonPrizesScreen, AvailablePrizesScreen} from '../screens';
import {Screens} from '../../constants/NavigationConstants';
import {GameTabParamList} from './ScreenProps';

const Tab = createMaterialTopTabNavigator<GameTabParamList>();

const GameTabs: FC = () => {
  const [swipeEnabled, setSwipeEnabled] = useState(true);

  return (
    <Tab.Navigator
      initialRouteName={Screens.HOME_SCREEN}
      tabBarPosition="bottom"
      screenOptions={{
        lazy: true,
        tabBarStyle: {display: 'none'},
        swipeEnabled: swipeEnabled,
      }}
      backBehavior="none">
      <Tab.Screen name={Screens.AVAILABLE_PRIZES_SCREEN}>
        {() => <AvailablePrizesScreen setSwipeEnabled={setSwipeEnabled} />}
      </Tab.Screen>
      <Tab.Screen name={Screens.HOME_SCREEN}>
        {() => <HomeScreen setSwipeEnabled={setSwipeEnabled} />}
      </Tab.Screen>
      <Tab.Screen
        name={Screens.WON_PRIZES_SCREEN}
        component={WonPrizesScreen}
      />
    </Tab.Navigator>
  );
};

export default GameTabs;
