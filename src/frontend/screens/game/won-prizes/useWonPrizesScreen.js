import {useState, useEffect} from 'react';
import {getWonPrizesUC} from '../../../../domain/getWonPrizesUC';
import {SUCCESS} from '../../../util/ResultsConstants';

// TODO - Add frontend form validation stuff heree
const useWonPrizesScreen = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPrizeFetchFailed, setIsPrizeFetchFailed] = useState(true);
  const [isShowingPrize, setIsShowingPrize] = useState(false);
  const [wonPrizes, setWonPrizes] = useState([]);

  useEffect(() => {
    initialPrizeFetch();
  }, []);

  const initialPrizeFetch = async () => {
    await getWonPrizes();
    setIsInitialized(true);
  };

  const getWonPrizes = async () => {
    const result = await getWonPrizesUC();
    setWonPrizes(result.data);
    if (result.status === SUCCESS) {
      setIsPrizeFetchFailed(false);
    }
  };

  const handleShowPrize = () => {
    setIsShowingPrize(true);
  };

  const handleHidePrize = () => {
    setIsShowingPrize(false);
  };

  return {
    isInitialized,
    isLoading,
    isPrizeFetchFailed,
    isShowingPrize,
    wonPrizes,
    handleShowPrize,
    handleHidePrize,
  };
};

export default useWonPrizesScreen;
