import {useState, useEffect} from 'react';
import getAvailablePrizesUC from '../../../../domain/available-prizes-screen-uc/getAvailablePrizesUC';
import {SUCCESS} from '../../../../constants/ResultsConstants';
import {useNavigation} from '@react-navigation/native';
import {AvailablePrizesScreenProp} from '../../../navigation/ScreenProps';

const useAvailablePrizesScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/
  const navigation = useNavigation<AvailablePrizesScreenProp>();

  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [isPrizeFetchFailed, setIsPrizeFetchFailed] = useState(true);
  const [prizeFetchFailedText, setIsPrizeFetchFailedText] = useState(
    'Failed to fetch prizes',
  );

  const [availablePrizes, setAvailablePrizes] = useState([]);
  const [isShowingPrize, setIsShowingPrize] = useState(false);

  const [displayPrizeId, setDisplayPrizeId] = useState('');
  const [displayPrizeTitle, setDisplayPrizeTitle] = useState('');
  const [displayPrizeDesc, setDisplayPrizeDesc] = useState('');
  const [displayPrizeType, setDisplayPrizeType] = useState('');
  const [displayPrizeTier, setDisplayPrizeTier] = useState('');

  /***********************/
  /***** USE EFFECTS *****/
  /***********************/

  /**
   * Fetches all of the available prizes from the database and
   * sets the state to display on the UI.
   * @dependent onMount
   */
  useEffect(() => {
    initialPrizeFetch();
  }, []);

  /******************************/
  /***** USE EFFECT HELPERS *****/
  /******************************/

  /**
   * Fetches the available prizes from the database.
   */
  const initialPrizeFetch = async () => {
    await getAvailablePrizes();
    setIsInitialized(true);
  };

  /**
   * Fetches the available prizes from the database and
   * checks whether the fetch was successful or not.
   */
  const getAvailablePrizes = async () => {
    const result = await getAvailablePrizesUC();
    setAvailablePrizes(result.data);

    if (result.status === SUCCESS) {
      if (result.data.length === 0) {
        setIsPrizeFetchFailedText('No Prizes Available. More Coming Soon!');
      } else {
        setIsPrizeFetchFailed(false);
      }
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
   * Sets the id to be shown in the prize modal.
   * @param id (string) The id to be shown in the prize modal
   */
  const handleDisplayPrizeIdChange = (id: string) => {
    setDisplayPrizeId(id);
  };

  /**
   * Sets the title to be shown in the prize modal.
   * @param title (string) The title to be shown in the prize modal
   */
  const handleDisplayPrizeTitleChange = (title: string) => {
    setDisplayPrizeTitle(title);
  };

  /**
   * Sets the description to be shown in the prize modal.
   * @param desc (string) The description to be shown in the prize modal
   */
  const handleDisplayPrizeDescChange = (desc: string) => {
    setDisplayPrizeDesc(desc);
  };

  /**
   * Sets the prize type of the prize being shown in the prize modal.
   * @param type (string) The e prize type of the prize to be shown in the prize modal
   */
  const handleDisplayPrizeTypeChange = (type: string) => {
    setDisplayPrizeType(type);
  };

  /**
   * Sets the prize tier of the prize being shown in the prize modal.
   * @param tier (string) The e prize tier of the prize to be shown in the prize modal
   */
  const handleDisplayPrizeTierChange = (tier: string) => {
    setDisplayPrizeTier(tier);
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    isInitialized,
    isLoading,
    isPrizeFetchFailed,
    prizeFetchFailedText,
    isShowingPrize,
    availablePrizes,
    handleShowPrize,
    handleHidePrize,
    handleDisplayPrizeIdChange,
    displayPrizeId,
    handleDisplayPrizeTitleChange,
    displayPrizeTitle,
    handleDisplayPrizeDescChange,
    displayPrizeDesc,
    handleDisplayPrizeTierChange,
    displayPrizeTier,
    handleDisplayPrizeTypeChange,
    displayPrizeType,
    navigation,
  };
};

export default useAvailablePrizesScreen;
