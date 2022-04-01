import {useState, useEffect} from 'react';
import {getAvailablePrizesUC} from '../../../../domain/getAvailablePrizesUC';
import {SUCCESS} from '../../../util/Results';

  // TODO - Add frontend form validation stuff heree
const useAvailablePrizesScreen = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPrizeFetchFailed, setIsPrizeFetchFailed] = useState(true);
  const [availablePrizes, setAvailablePrizes] = useState([]);
  const [isShowingPrize, setIsShowingPrize] = useState(false);

  useEffect(() => {
    initialPrizeFetch();
  }, []);

  const initialPrizeFetch = async () => {
    await getAvailablePrizes();
    setIsInitialized(true);
  };

  const getAvailablePrizes = async () => {
    const result = await getAvailablePrizesUC();
    setAvailablePrizes(result.data);
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
    availablePrizes,
    handleShowPrize,
    handleHidePrize,
  };
};

export default useAvailablePrizesScreen;
