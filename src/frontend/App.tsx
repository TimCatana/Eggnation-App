import React, {FC, useEffect} from 'react';
import Providers from './navigation'; // looks for index.js
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import mobileAds, {MaxAdContentRating} from 'react-native-google-mobile-ads';

const App: FC = () => {
  useEffect(() => {
    initAds();
  }, []);

  const initAds = async () => {
    await mobileAds().setRequestConfiguration({
      maxAdContentRating: MaxAdContentRating.PG,
      tagForChildDirectedTreatment: false,
      tagForUnderAgeOfConsent: true,
      testDeviceIdentifiers: ['EMULATOR'],
    });

    await mobileAds().initialize();
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Providers />
    </GestureHandlerRootView>
  );
};

export default App;
