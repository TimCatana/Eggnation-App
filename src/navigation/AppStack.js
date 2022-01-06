import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
        initialRouteName='Home'
        screenOptions={{
          header: () => null
        }}
      > 
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Store" component={StoreScreen} />
        <Stack.Screen name="PrizeHistory" component={PrizeHistoryScreen} />
      </Stack.Navigator>
  );
}

export default App;
