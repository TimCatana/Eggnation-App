import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import StoreScreen from '../screens/StoreScreen';
import PrizeHistoryScreen from '../screens/PrizeHistoryScreen';
import LoginScreen from '../screens/LoginScreen';
import SplashScreen from '../screens/SplashScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createNativeStackNavigator();

const App = () =>  {
  return(
      <Stack.Navigator 
        initialRouteName='HomeScreen'
        screenOptions={{
          header: () => null
        }}
      > 
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="StoreScreen" component={StoreScreen} />
        <Stack.Screen name="PrizeHistoryScreen" component={PrizeHistoryScreen} />
      </Stack.Navigator>
  );
}

export default App;
