import {useState, useEffect} from 'react';
import {getAvailablePrizesUC} from '../../../../domain/getAvailablePrizesUC';
import {SUCCESS} from '../../../util/ResultsConstants';

// TODO - Add frontend form validation stuff heree
const useAvailablePrizesScreen = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPrizeFetchFailed, setIsPrizeFetchFailed] = useState(true);
  const [availablePrizes, setAvailablePrizes] = useState([]);

  const [isShowingPrize, setIsShowingPrize] = useState(false);

  const [displayPrizeTitle, setDisplayPrizeTitle] = useState('');
  const [displayPrizeDesc, setDisplayPrizeDesc] = useState('');
  const [displayPrizeType, setDisplayPrizeType] = useState('');
  const [displayPrizeTier, setDisplayPrizeTier] = useState('');

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

  handleDisplayPrizeTitleChange = title => {
    setDisplayPrizeTitle(title);
  };

  handleDisplayPrizeDescChange = desc => {
    setDisplayPrizeDesc(desc);
  };

  handleDisplayPrizeTypeChange = type => {
    setDisplayPrizeType(type);
  };
  
  handleDisplayPrizeTierChange = tier => {
    setDisplayPrizeTier(tier);
  };

  return {
    isInitialized,
    isLoading,
    isPrizeFetchFailed,
    isShowingPrize,
    availablePrizes,
    handleShowPrize,
    handleHidePrize,
    handleDisplayPrizeTitleChange,
    displayPrizeTitle,
    handleDisplayPrizeDescChange,
    displayPrizeDesc,
    handleDisplayPrizeTierChange,
    displayPrizeTier,
    handleDisplayPrizeTypeChange,
    displayPrizeType
  };
};

export default useAvailablePrizesScreen;
