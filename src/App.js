import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Store from './Store';
import PrizeHistory from './PrizeHistory';
import Splash from './Splash';

const Stack = createNativeStackNavigator();

const App = () =>  {
  return(
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='Splash'
          screenOptions={{
            header: () => null
          }}
          > 
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Store" component={Store} />
          <Stack.Screen name="PrizeHistory" component={PrizeHistory} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
