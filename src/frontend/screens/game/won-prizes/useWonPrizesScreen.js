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

  const [displayPrizeTitle, setDisplayPrizeTitle] = useState('');
  const [displayPrizeDesc, setDisplayPrizeDesc] = useState('');
  const [displayPrizeType, setDisplayPrizeType] = useState('');
  const [displayPrizeTier, setDisplayPrizeTier] = useState('');

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

  /*************************/
  /***** BUTTON CLICKS *****/
  /*************************/

  /**
   * Shows the prize modal.
   */
  const handleShowPrize = () => {
    setIsShowingPrize(true);
  };

  /**
   * Hides the prize modal.
   */
  const handleHidePrize = () => {
    setIsShowingPrize(false);
  };

  /**
   * Sets the title to be shown in the prize modal.
   * @param title (string) The title to be shown in the prize modal
   */
  handleDisplayPrizeTitleChange = title => {
    setDisplayPrizeTitle(title);
  };

  /**
   * Sets the description to be shown in the prize modal.
   * @param desc (string) The description to be shown in the prize modal
   */
  handleDisplayPrizeDescChange = desc => {
    setDisplayPrizeDesc(desc);
  };

  /**
   * Sets the prize type of the prize being shown in the prize modal.
   * @param type (string) The e prize type of the prize to be shown in the prize modal
   */
  handleDisplayPrizeTypeChange = type => {
    setDisplayPrizeType(type);
  };

  /**
   * Sets the prize tier of the prize being shown in the prize modal.
   * @param tier (string) The e prize tier of the prize to be shown in the prize modal
   */
  handleDisplayPrizeTierChange = tier => {
    setDisplayPrizeTier(tier);
  };

  return {
    isInitialized,
    isLoading,
    isPrizeFetchFailed,
    isShowingPrize,
    wonPrizes,
    handleShowPrize,
    handleHidePrize,
    handleDisplayPrizeTitleChange,
    displayPrizeTitle,
    handleDisplayPrizeDescChange,
    displayPrizeDesc,
    handleDisplayPrizeTierChange,
    displayPrizeTier,
    handleDisplayPrizeTypeChange,
    displayPrizeType,
  };
};

export default useWonPrizesScreen;
