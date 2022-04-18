import React, { FC } from 'react';
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
