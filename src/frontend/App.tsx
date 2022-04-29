import React, {FC, useEffect} from 'react';
import {BackHandler, Alert} from 'react-native';
import Providers from './navigation'; // looks for index.js
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App: FC = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Providers />
    </GestureHandlerRootView>
  );
};

export default App;
