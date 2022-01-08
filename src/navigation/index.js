import React from 'react';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { Store } from '../redux/store';

const Providers = () => {
  return (
    <Provider store={Store}>
        <Routes />
    </Provider>
  );
}

export default Providers;
