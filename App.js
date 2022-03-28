import React from 'react';
import Providers from './src/frontend/navigation'; // looks for index.js
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Providers />
    </GestureHandlerRootView>
  );
};

export default App;
