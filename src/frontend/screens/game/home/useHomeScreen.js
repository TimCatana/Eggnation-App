import {useState, useEffect, useRef} from 'react';
import {useInterstitialAd, TestIds} from '@react-native-admob/admob';
import {getLocalCountUC} from '../../../../domain/getLocalCountUC';
import {decrementLocalCountUC} from '../../../../domain/decrementLocalCountUC';
import {checkIfTimeToResetCountUC} from '../../../../domain/checkIfTimeToResetCountUC';
import {mainGameLogicUC} from '../../../../domain/mainGameLogicUC';

const useHomeScreen = () => {
  const {adLoaded, adDismissed, show, load} = useInterstitialAd(
    TestIds.INTERSTITIAL,
  );

  const loadAd = () => {
    if (adDismissed) {
      load();
    }
  };

  const playAd = () => {
    if (adLoaded && localCount != 1000) {
      show();
    }
  };

  const isMounted = useRef(false);

  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [localCount, setLocalCount] = useState(1000);

  const [isWonAnimationShowing, setIsWonAnimationShowing] = useState(false);
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);
  const loseAnimationRef = useRef(null);
  const winAnimationRef = useRef(null);

  useEffect(() => {
    initCounter();
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      if (isAnimationPlaying) {
        _playAnimation();
      } else {
        // _resetAnimation();
      }
    } else {
      isMounted.current = true;
    }
  }, [isAnimationPlaying]);

  const initCounter = async () => {
    await checkIfTimeToResetCountUC();
    await getLocalCount();
    setIsInitialized(true);
  };

  const getLocalCount = async () => {
    const result = await getLocalCountUC();
    if (result !== false) {
      setLocalCount(result);
    }
  };

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

  const playAnimation = () => {
    setIsAnimationPlaying(true);
  };

  const _playAnimation = () => {
    if (isWonAnimationShowing) {
      winAnimationRef.current.play();
    } else {
      loseAnimationRef.current.play();
    }
  };

  const resetAnimation = () => {
    setIsAnimationPlaying(false);
  };

  const _resetAnimation = () => {
    if (isWonAnimationShowing) {
      winAnimationRef.current.reset();
    } else {
      loseAnimationRef.current.reset();
    }
  };

  // TODO - need to make this more efficient. Apparently, redux has a listener feature. Async does not
  const decrementAndGetLocalCount = async () => {
    try {
      await decrementLocalCountUC();
      await getLocalCount();
    } catch (e) {
      console.log('failed to update local count');
    }
  };

  return {
    isLoading,
    isInitialized,
    localCount,
    playGame,
    loseAnimationRef,
    winAnimationRef,
    resetAnimation,
    isWonAnimationShowing,
    isAnimationPlaying,
  };
};

export default useHomeScreen;
