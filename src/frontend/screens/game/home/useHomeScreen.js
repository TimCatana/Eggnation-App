import {useState, useEffect, useRef} from 'react';
import {getLocalCountUC} from '../../../../domain/getLocalCountUC';
import {decrementLocalCountUC} from '../../../../domain/decrementLocalCountUC';
import {checkIfTimeToResetCountUC} from '../../../../domain/checkIfTimeToResetCountUC';
import {mainGameLogicUC} from '../../../../domain/mainGameLogicUC';
import { logoutUserUC } from '../../../../domain/logoutUserUC';

const useHomeScreen = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [localCount, setLocalCount] = useState(1000);

  const [isWonAnimationShowing, setIsWonAnimationShowing] = useState(false)
  const loseAnimationRef = useRef(null);
  const winAnimationRef = useRef(null);

  useEffect(() => {
    initCounter();
  }, []);

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
    setIsLoading(true)
    await decrementAndGetLocalCount();
    const result = await mainGameLogicUC();

    if(result.data === true) {
      setIsWonAnimationShowing(true)
    } else {
      setIsWonAnimationShowing(false)
    }
    playAnimation()

    setIsLoading(false)
  };

  const playAnimation = () => {
    if(isWonAnimationShowing) {
      winAnimationRef.current.play()
    } else {
      loseAnimationRef.current.play()
    }
  }

  const resetAnimation = () => {
    if(isWonAnimationShowing) {
      winAnimationRef.current.reset()
    } else {
      loseAnimationRef.current.reset()
    }
  }

  const pauseAnimation = () => {
    if(isWonAnimationShowing) {
      winAnimationRef.current.pause()
    } else {
      loseAnimationRef.current.pause()
    }
  }










  // TODO - need to make this more efficient. Apparently, redux has a listener feature. Async does not
  const decrementAndGetLocalCount = async () => {
    try {
      await decrementLocalCountUC();
      await getLocalCount();
    } catch (e) {
      console.log('failed to update local count');
    }
  };

  const logoutUser = () => {
    logoutUserUC()
  }








  return {
    isLoading,
    isInitialized,
    localCount,
    playGame,
    loseAnimationRef,
    winAnimationRef,
    resetAnimation,
    pauseAnimation,
    isWonAnimationShowing,
    logoutUser
  };
};

export default useHomeScreen;
