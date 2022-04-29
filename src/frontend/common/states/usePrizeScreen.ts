import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  AvailablePrizesScreenProp,
  WonPrizeScreenProp,
} from '../../navigation/ScreenProps';
import {SUCCESS} from '../../../constants/ResultsConstants';
import getAvailablePrizesUC from '../../../domain/available-prizes-screen-uc/getAvailablePrizesUC';
import {AvailablePrizesArray, WonPrizesArray} from '../../../types/typeAliases';
import getWonPrizesUC from '../../../domain/won-prizes-screen-us/getWonPrizesUC';
import {Screens} from '../../../constants/NavigationConstants';

const usePrizeScreen = (
  isAvailablePrizeScreen: boolean,
) => {
  /******************/
  /***** STATES *****/
  /******************/
  const navigation = isAvailablePrizeScreen
    ? useNavigation<AvailablePrizesScreenProp>()
    : useNavigation<WonPrizeScreenProp>();

  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [isPrizeFetchFailed, setIsPrizeFetchFailed] = useState<boolean>(true);
  const [prizeFetchFailedText, setIsPrizeFetchFailedText] = useState<string>(
    'Failed to fetch prizes',
  );

  const [prizes, setPrizes] = useState<
    AvailablePrizesArray | WonPrizesArray | []
  >([]);
  const [isShowingPrize, setIsShowingPrize] = useState<boolean>(false);

  const [displayPrizeId, setDisplayPrizeId] = useState<string>('');
  const [displayPrizeTitle, setDisplayPrizeTitle] = useState<string>('');
  const [displayPrizeDesc, setDisplayPrizeDesc] = useState<string>('');
  const [displayPrizeType, setDisplayPrizeType] = useState<string>('');
  const [displayPrizeTier, setDisplayPrizeTier] = useState<string>('');
  const [displayPrizeClaimType, setDisplayPrizeClaimType] =
    useState<string>('');

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
    const result = isAvailablePrizeScreen
      ? await getAvailablePrizesUC()
      : await getWonPrizesUC();

    setPrizes(result.data);

    if (result.status === SUCCESS) {
      if (result.data.length === 0) {
        isAvailablePrizeScreen
          ? setIsPrizeFetchFailedText('No Prizes Available. More Coming Soon!')
          : setIsPrizeFetchFailedText("You haven't won anything yet!");
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

  /******************************/
  /***** NAVIGATION HELPERS *****/
  /******************************/

  /** Navigates back to the home tab if no process is currently running. */
  const navToHomeTab = () => {
    if (isInitialized && !isLoading && !isShowingPrize) {
      navigation.jumpTo(Screens.HOME_SCREEN);
    }
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
    prizes,
    handleShowPrize,
    handleHidePrize,
    displayPrizeId,
    displayPrizeTitle,
    displayPrizeDesc,
    displayPrizeTier,
    displayPrizeType,
    displayPrizeClaimType,
    navigation,
    navToHomeTab,
  };
};

export default usePrizeScreen;
