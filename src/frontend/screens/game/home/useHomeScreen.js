import {useState, useEffect} from 'react';
import {getLocalCountUC} from '../../../../domain/getLocalCountUC';
import {decrementLocalCountUC} from '../../../../domain/decrementLocalCountUC';
import {checkIfTimeToResetCountUC} from '../../../../domain/checkIfTimeToResetCountUC';
import {mainGameLogicUC} from '../../../../domain/mainGameLogicUC';
import { logoutUserUC } from '../../../../domain/logoutUserUC';

const useHomeScreen = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [localCount, setLocalCount] = useState(1000);

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
    await mainGameLogicUC();
    setIsLoading(false)
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

  const logoutUser = () => {
    logoutUserUC()
  }

  return {
    isInitialized,
    localCount,
    playGame,
    logoutUser
  };
};

export default useHomeScreen;
