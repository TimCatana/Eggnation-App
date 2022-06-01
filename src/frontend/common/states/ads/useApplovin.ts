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
  const [isShowing, setIsShowing] = useState(false);

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
        _loadApplovinAd();
      }, retryDelay * 1000);
    });

    AppLovinMAX.addEventListener('OnInterstitialClickedEvent', () => {});
    AppLovinMAX.addEventListener('OnInterstitialDisplayedEvent', () => {
      setIsShowing(true);
    });
    AppLovinMAX.addEventListener('OnInterstitialAdFailedToDisplayEvent', () => {
      _loadApplovinAd();
    });
    AppLovinMAX.addEventListener('OnInterstitialHiddenEvent', () => {
      setIsShowing(false);
      _loadApplovinAd();
    });

    // Load the first interstitial
    _loadApplovinAd();
  };

  /** Loads an Ad from AdMob server if an Ad is not loaded yet. */
  const _loadApplovinAd = () => {
    AppLovinMAX.loadInterstitial(INTERSTITIAL_AD_UNIT_ID);
  };

  /** Plays an Ad if one is loaded.
   *  before the code gets here, I already check to make sure that an ad is loaded
   */
  const playApplovinAd = () => {
    AppLovinMAX.showInterstitial(INTERSTITIAL_AD_UNIT_ID);
  };

  /** Checks to see if ad is loaded */
  const getApplovinAdLoadStatus = () => {
    return AppLovinMAX.isInterstitialReady(INTERSTITIAL_AD_UNIT_ID);
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    initializeApplovinAd,
    playApplovinAd,
    getApplovinAdLoadStatus,
    isShowing,
  };
};

export default useAppLovin;
