import {useState} from 'react';
import {Platform} from 'react-native';
import {APPLOVIN_INTERSTITIAL_ID} from '../../../../constants/Constants';
import AppLovinMAX from 'react-native-applovin-max';

const useAppLovin = () => {
  /******************/
  /***** STATES *****/
  /******************/
  const INTERSTITIAL_AD_UNIT_ID = Platform.select({
    android: APPLOVIN_INTERSTITIAL_ID,
  });

  const [retryAttempt, setRetryAttempt] = useState(0);

  /*************************/
  /***** FUNCTIONALITY *****/
  /*************************/

  const initializeApplovinAd = () => {
    AppLovinMAX.addEventListener('OnInterstitialLoadedEvent', () => {
      setRetryAttempt(0);
    });

    AppLovinMAX.addEventListener('OnInterstitialLoadFailedEvent', () => {
      setRetryAttempt(retryAttempt + 1);
      var retryDelay = Math.pow(2, Math.min(6, retryAttempt));
      setTimeout(function () {
        loadApplovinAd();
      }, retryDelay * 1000);
    });

    AppLovinMAX.addEventListener('OnInterstitialClickedEvent', () => {});
    AppLovinMAX.addEventListener('OnInterstitialDisplayedEvent', () => {});
    AppLovinMAX.addEventListener('OnInterstitialAdFailedToDisplayEvent', () => {
      loadApplovinAd();
    });
    AppLovinMAX.addEventListener('OnInterstitialHiddenEvent', () => {
      loadApplovinAd();
    });

    // Load the first interstitial
    loadApplovinAd();
  };

  /** Loads an Ad from AdMob server if an Ad is not loaded yet. */
  const loadApplovinAd = () => {
    AppLovinMAX.loadInterstitial(INTERSTITIAL_AD_UNIT_ID);
  };

  /** Plays an Ad if one is loaded. */
  const playApplovinAd = () => {
    if (AppLovinMAX.isInterstitialReady(INTERSTITIAL_AD_UNIT_ID)) {
      AppLovinMAX.showInterstitial(INTERSTITIAL_AD_UNIT_ID);
    }
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    loadApplovinAd,
    playApplovinAd,
  };
};

export default useAppLovin;
