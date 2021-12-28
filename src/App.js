import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Store from './Store';

const Stack = createNativeStackNavigator();

const App = () =>  {
  return(
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='Home'
          screenOptions={{
            header: () => null
          }}
          > 
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Store" component={Store} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
