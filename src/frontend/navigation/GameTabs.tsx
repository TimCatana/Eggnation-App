import React, {FC} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {HomeScreen, WonPrizesScreen, AvailablePrizesScreen} from '../screens';
import {Screens} from '../../constants/NavigationConstants';
import {GameTabParamList} from './ScreenProps';

const Tab = createMaterialTopTabNavigator<GameTabParamList>();

// TODO - set backBehaviour={none}. Right now the back button goes to the tab. I just want to exit

const GameTabs: FC = () => {
  return (
    <Tab.Navigator
      initialRouteName={Screens.HOME_SCREEN}
      tabBarPosition="bottom"
      screenOptions={{
        lazy: true,
        tabBarStyle: {display: 'none'},
      }}>
      <Tab.Screen
        name={Screens.AVAILABLE_PRIZES_SCREEN}
        component={AvailablePrizesScreen}
      />
      <Tab.Screen name={Screens.HOME_SCREEN} component={HomeScreen} />
      <Tab.Screen
        name={Screens.WON_PRIZES_SCREEN}
        component={WonPrizesScreen}
      />
    </Tab.Navigator>
  );
};

export default GameTabs;
