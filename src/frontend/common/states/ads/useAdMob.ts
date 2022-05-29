import {useInterstitialAd, TestIds} from 'react-native-google-mobile-ads';
import {
  DV_LOCAL_COUNT,
  ADMOB_INTERSTITIAL_ID,
} from '../../../../constants/Constants';

const useAdMob = () => {
  /******************/
  /***** STATES *****/
  /******************/

  const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : ADMOB_INTERSTITIAL_ID;
  const {isLoaded, isClosed, isShowing, load, show} =
    useInterstitialAd(adUnitId);

  /*************************/
  /***** FUNCTIONALITY *****/
  /*************************/

  /** Loads an Ad from AdMob server if an Ad is not loaded yet. */
  const loadAdMobAd = (localCount: number) => {
    if ((isClosed || !isLoaded) && localCount % 10 == 0) {
      load();
    }
  };

  /** Plays an Ad if one is loaded. */
  const playAdMobAd = (localCount: number) => {
    if (isLoaded && localCount != parseInt(DV_LOCAL_COUNT) && localCount != 0) {
      show();
    }
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    loadAdMobAd,
    playAdMobAd,
    isShowing,
  };
};

export default useAdMob;
