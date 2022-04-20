import {useState, useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenProp} from '../../../navigation/ScreenProps';
import {Screens} from '../../../../constants/NavigationConstants';
import {useInterstitialAd, TestIds} from '@react-native-admob/admob';
import {MGL_AD_FREQUENCY} from '../../../../constants/Constants';
import getLocalCountUC from '../../../../domain/home-screen-uc/getLocalCountUC';
import checkIfTimeToResetCountUC from '../../../../domain/home-screen-uc/checkIfTimeToResetCountUC';
import decrementLocalCountUC from '../../../../domain/home-screen-uc/decrementLocalCountUC';
import mainGameLogicUC from '../../../../domain/home-screen-uc/mainGameLogicUC';

const useHomeScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/
  const navigation = useNavigation<HomeScreenProp>();

  const isMounted = useRef(false);

  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [localCount, setLocalCount] = useState(1000);

  const [isWonAnimationShowing, setIsWonAnimationShowing] = useState(false);
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);

  const loseAnimationRef = useRef<any>(null);
  const winAnimationRef = useRef<any>(null);

  const {adLoaded, adDismissed, adShowing, show, load} = useInterstitialAd(
    TestIds.INTERSTITIAL,
  );

  /***********************/
  /***** USE EFFECTS *****/
  /***********************/

  /**
   * Initializes the local counter.
   * @dependent onMount
   */
  useEffect(() => {
    initCounter();
  }, []);

  /**
   * Plays and resets the crack animation.
   * @dependent isAnimationPlaying
   */
  useEffect(() => {
    if (isMounted.current) {
      if (isAnimationPlaying) {
        _playAnimation();
      } else {
        _resetAnimation();
      }
    } else {
      isMounted.current = true;
    }
  }, [isAnimationPlaying]);

  /******************************/
  /***** USE EFFECT HELPERS *****/
  /******************************/

  /**
   * Get's the local count from async storage.
   * Resets the count to 1000 is a certain amount of time passed since the last
   * time that the user opened the app.
   */
  const initCounter = async () => {
    await checkIfTimeToResetCountUC();
    await getLocalCount();
    setIsInitialized(true);
  };

  /**
   * Get's the local count from async storage.
   * Handles any possible errors with fetching the local count.
   */
  const getLocalCount = async () => {
    const result = await getLocalCountUC();
    setLocalCount(result.data);
  };

  /*************************/
  /***** BUTTON CLICKS *****/
  /*************************/

  /**
   * Does the main game logic.
   * If count is !1000, do game.
   * If user loses, play lose animation.
   * If user wins, play win animation.
   * If user % x == true, play ad.
   * If user % x == false, load ad.
   */
  const playGame = async () => {
    setIsLoading(true);

    if (localCount % MGL_AD_FREQUENCY === 0 && localCount != 1000) {
      playAd();
      await decrementAndGetLocalCount();
    } else {
      loadAd();

      await decrementAndGetLocalCount();

      const result = await mainGameLogicUC(localCount);

      result.data.isWon === true
        ? setIsWonAnimationShowing(true)
        : setIsWonAnimationShowing(false);

      playAnimation();
    }

    setIsLoading(false);
  };

  /**
   * Decrements the local count.
   */
  const decrementAndGetLocalCount = async () => {
    try {
      await decrementLocalCountUC();
      await getLocalCount();
    } catch (e) {
      console.log('failed to update local count');
    }
  };

  /**********************/
  /***** ANIMATIONS *****/
  /**********************/

  /**
   * Sets the playing animation state to true.
   */
  const playAnimation = () => {
    setIsAnimationPlaying(true);
  };

  /**
   * Sets the playing animation state to false.
   */
  const resetAnimation = () => {
    setIsAnimationPlaying(false);
  };

  /**
   * Uses the reference to the lottie animation to play
   * the animation on the UI.
   */
  const _playAnimation = () => {
    if (isWonAnimationShowing) {
      winAnimationRef.current ? winAnimationRef.current.play() : null;
    } else {
      loseAnimationRef.current ? loseAnimationRef.current.play() : null;
    }
  };

  /**
   * Uses the reference to the lottie animation to reset
   * the animation on the UI.
   */
  const _resetAnimation = () => {
    if (isWonAnimationShowing) {
      winAnimationRef.current ? winAnimationRef.current.reset() : null;
    } else {
      loseAnimationRef.current ? loseAnimationRef.current.reset() : null;
    }
  };

  /***************/
  /***** ADS *****/
  /***************/

  /** Loads an Ad from AdMob server if an Ad is not loaded yet. */
  const loadAd = () => {
    if (adDismissed) {
      load();
    }
  };

  /** Plays an Ad if one is loaded. */
  const playAd = () => {
    if (adLoaded && localCount != 1000) {
      show();
    }
  };

  /******************************/
  /***** NAVIGATION HELPERS *****/
  /******************************/

  /** Navigates back to the settings screen if no process is currently running. */
  const navToSettingsScreen = () => {
    if (!isLoading && !isAnimationPlaying && !adShowing) {
      navigation.navigate(Screens.SETTINGS_SCREEN);
    }
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    isInitialized,
    isLoading,
    adShowing,
    playGame,
    localCount,
    isAnimationPlaying,
    isWonAnimationShowing,
    winAnimationRef,
    loseAnimationRef,
    resetAnimation,
    navToSettingsScreen,
  };
};

export default useHomeScreen;
