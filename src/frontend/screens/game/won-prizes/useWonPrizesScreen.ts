import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {WonPrizeScreenProp} from '../../../navigation/ScreenProps';
import {SUCCESS} from '../../../../constants/ResultsConstants';
import getWonPrizesUC from '../../../../domain/won-prizes-screen-us/getWonPrizesUC';

const useWonPrizesScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/
  const navigation = useNavigation<WonPrizeScreenProp>();

  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [isPrizeFetchFailed, setIsPrizeFetchFailed] = useState(true);
  const [prizeFetchFailedText, setIsPrizeFetchFailedText] = useState(
    'Failed to fetch prizes',
  );

  const [isShowingPrize, setIsShowingPrize] = useState(false);
  const [wonPrizes, setWonPrizes] = useState([]);

  const [displayPrizeId, setDisplayPrizeId] = useState('');
  const [displayPrizeTitle, setDisplayPrizeTitle] = useState('');
  const [displayPrizeDesc, setDisplayPrizeDesc] = useState('');
  const [displayPrizeType, setDisplayPrizeType] = useState('');
  const [displayPrizeTier, setDisplayPrizeTier] = useState('');
  const [displayPrizeClaimType, setDisplayPrizeClaimType] = useState('');

  /***********************/
  /***** USE EFFECTS *****/
  /***********************/

  /**
   * Fetches all of the won prizes from the database and
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
   * Fetches the won prizes from the database.
   */
  const initialPrizeFetch = async () => {
    await getWonPrizes();
    setIsInitialized(true);
  };

  /**
   * Fetches the won prizes from the database and
   * checks whether the fetch was successful or not.
   */
  const getWonPrizes = async () => {
    const result = await getWonPrizesUC();
    setWonPrizes(result.data);

    console.log('running');

    if (result.status === SUCCESS) {
      if (result.data.length === 0) {
        console.log('no prizes');
        setIsPrizeFetchFailedText("You haven't won anything yet!");
      } else {
        console.log('prizes exist');
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
  const handleShowPrize = (
    prizeId: string,
    prizeTitle: string,
    prizeDesc: string,
    prizeType: string,
    prizeTier: string,
    prizeClaimType: string,
  ) => {
    setIsShowingPrize(true);
    handleDisplayPrizeIdChange(prizeId);
    handleDisplayPrizeTitleChange(prizeTitle);
    handleDisplayPrizeDescChange(prizeDesc);
    handleDisplayPrizeTypeChange(prizeType);
    handleDisplayPrizeTierChange(prizeTier);
    handleDisplayPrizeClaimTypeChange(prizeClaimType);
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

  /**
   * Sets the prize tier of the prize being shown in the prize modal.
   * @param claimType (string) The e prize tier of the prize to be shown in the prize modal
   */
  const handleDisplayPrizeClaimTypeChange = (claimType: string) => {
    setDisplayPrizeClaimType(claimType);
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
    wonPrizes,
    handleShowPrize,
    handleHidePrize,
    displayPrizeId,
    displayPrizeTitle,
    displayPrizeDesc,
    displayPrizeTier,
    displayPrizeType,
    displayPrizeClaimType,
    navigation,
  };
};

export default useWonPrizesScreen;
