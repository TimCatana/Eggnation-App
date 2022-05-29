import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import App from './src/frontend/App';
import {name as appName} from './app.json';
import PushNotification from 'react-native-push-notification';
import AppLovinMAX from 'react-native-applovin-max';

AppLovinMAX.initialize(
  'masP3E71VyOUPooH0hZfzrb2U2a5EobZdLcnCqrRz9eTWmAHt9EG0nBAIDMVT_hTTfCsRX93OInzJNb62_TDSP',
  configuration => {},
);

PushNotification.configure({
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
  },
});

AppRegistry.registerComponent(appName, () => App);
