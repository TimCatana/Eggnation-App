import React from 'react';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { Store } from '../redux/store';

/**
 * There are two stacks, the AuthStack and the AppStack.
 * Which one is displayed is determined whether the user is logged
 * in or not. The entire app is surrounded by the redux store which
 * handles whether the user is logged in or not
 */
const Providers = () => {
  return (
    <Provider store={Store}>
        <Routes />
    </Provider>
  );
}

export default Providers;
