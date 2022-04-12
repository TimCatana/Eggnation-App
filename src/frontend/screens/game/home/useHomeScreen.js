import {useState, useEffect, useRef} from 'react';
import {useInterstitialAd, TestIds} from '@react-native-admob/admob';
import getLocalCountUC from '../../../../domain/home-screen-uc/getLocalCountUC';
import decrementLocalCountUC from '../../../../domain/home-screen-uc/decrementLocalCountUC';
import checkIfTimeToResetCountUC from '../../../../domain/home-screen-uc/checkIfTimeToResetCountUC';
import mainGameLogicUC from '../../../../domain/home-screen-uc/mainGameLogicUC';

const useHomeScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/

  const isMounted = useRef(false);

  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [localCount, setLocalCount] = useState(1000);

  const [isWonAnimationShowing, setIsWonAnimationShowing] = useState(false);
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);

  const loseAnimationRef = useRef(null);
  const winAnimationRef = useRef(null);

  const {adLoaded, adDismissed, show, load} = useInterstitialAd(
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
    if (result !== false) {
      setLocalCount(result.data);
    }
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

    if (localCount % 5 === 0 && localCount != 1000) {
      playAd();
      await decrementAndGetLocalCount();
    } else {
      loadAd();

      await decrementAndGetLocalCount();
      const result = await mainGameLogicUC();

      result.data === true
        ? setIsWonAnimationShowing(true)
        : setIsWonAnimationShowing(false);

      playAnimation();
    }

    setIsLoading(false);
  };

  // TODO - need to make this more efficient. Apparently, redux has a listener feature. Async does not
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
      winAnimationRef.current.play();
    } else {
      loseAnimationRef.current.play();
    }
  };

  /**
   * Uses the reference to the lottie animation to reset
   * the animation on the UI.
   */
  const _resetAnimation = () => {
    if (isWonAnimationShowing) {
      winAnimationRef.current.reset();
    } else {
      loseAnimationRef.current.reset();
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

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    isInitialized,
    isLoading,
    playGame,
    localCount,
    isAnimationPlaying,
    isWonAnimationShowing,
    winAnimationRef,
    loseAnimationRef,
    resetAnimation,
  };
};

export default useHomeScreen;
