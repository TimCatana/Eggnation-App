import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Screens} from '../../../constants/NavigationConstants';
import {SUCCESS} from '../../../constants/ResultsConstants';
import {
  AvailablePrizesScreenProp,
  WonPrizeScreenProp,
} from '../../navigation/ScreenProps';
import {
  S_PS_FAILED_PRIZE_FETCH,
  S_PS_NO_AVAILABLE_PRIZES,
  S_PS_NO_WON_PRIZES,
} from '../../../constants/Strings';
import {
  AvailablePrizesArray,
  WonPrizesArray,
} from '../../../constants/typeAliases';
import getAvailablePrizesUC from '../../../domain/available-prizes-screen-uc/getAvailablePrizesUC';
import getWonPrizesUC from '../../../domain/won-prizes-screen-us/getWonPrizesUC';

// TODO - need to find a way to effeciently refresh wonprizes once the prize has been claimed
const usePrizeScreen = (isAvailablePrizeScreen: boolean) => {
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
    S_PS_FAILED_PRIZE_FETCH,
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
  const [displayPrizeClaimed, setDisplayPrizeClaimed] = useState<boolean>(true);
  const [displayPrizeDelivered, setDisplayPrizeDelivered] =
    useState<boolean>(true);
  const [displayPrizeWonDate, setDisplayPrizeWonDate] = useState<string>('');

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
   * Fetches the prizes from the database.
   */
  const initialPrizeFetch = async () => {
    await getPrizes();
    setIsInitialized(true);
  };

  /**
   * Fetches the available prizes from the database and
   * checks whether the fetch was successful or not.
   */
  const getPrizes = async () => {
    const result = isAvailablePrizeScreen
      ? await getAvailablePrizesUC()
      : await getWonPrizesUC();

    setPrizes(result.data);

    if (result.status === SUCCESS) {
      if (result.data.length === 0) {
        isAvailablePrizeScreen
          ? setIsPrizeFetchFailedText(S_PS_NO_AVAILABLE_PRIZES)
          : setIsPrizeFetchFailedText(S_PS_NO_WON_PRIZES);
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
    prizeWonDate: string,
    prizeClaimed: boolean,
    prizeDelivered: boolean,
  ) => {
    // console.log(
    //   `${prizeId} ${prizeTitle} ${prizeDesc} ${prizeType} ${prizeTier} ${prizeClaimType} ${prizeClaimed} ${prizeDelivered} ${prizeWonDate}`,
    // );
    setIsShowingPrize(true);
    handleDisplayPrizeIdChange(prizeId);
    handleDisplayPrizeTitleChange(prizeTitle);
    handleDisplayPrizeDescChange(prizeDesc);
    handleDisplayPrizeTypeChange(prizeType);
    handleDisplayPrizeTierChange(prizeTier);
    handleDisplayPrizeClaimTypeChange(prizeClaimType);
    handleDisplayPrizeClaimedChange(prizeClaimed);
    handleDisplayPrizeDeliveredChange(prizeDelivered);
    handleDisplayPrizeWonDateChange(prizeWonDate);
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
   * @param type (string) The prize type of the prize to be shown in the prize modal
   */
  const handleDisplayPrizeTypeChange = (type: string) => {
    setDisplayPrizeType(type);
  };

  /**
   * Sets the prize tier of the prize being shown in the prize modal.
   * @param tier (string) The prize tier of the prize to be shown in the prize modal
   */
  const handleDisplayPrizeTierChange = (tier: string) => {
    setDisplayPrizeTier(tier);
  };

  /**
   * Sets the prize claim type of the prize being shown in the prize modal.
   * @param claimType (string) The prize claim type of the prize to be shown in the prize modal
   */
  const handleDisplayPrizeClaimTypeChange = (claimType: string) => {
    setDisplayPrizeClaimType(claimType);
  };

  /**
   * Sets the prize claimed status of the prize being shown in the prize modal.
   * @param claimed (boolean) The prize claimed status of the prize to be shown in the prize modal
   */
  const handleDisplayPrizeClaimedChange = (claimed: boolean) => {
    setDisplayPrizeClaimed(claimed);
  };
  /**
   * Sets the prize delivered status of the prize being shown in the prize modal.
   * @param delivered (boolean) The prize delivered status of the prize to be shown in the prize modal
   */

  const handleDisplayPrizeDeliveredChange = (delivered: boolean) => {
    setDisplayPrizeDelivered(delivered);
  };
  /**
   * Sets the prize won date of the prize being shown in the prize modal.
   * @param wonDate (boolean) The prize won date of the prize to be shown in the prize modal
   */
  const handleDisplayPrizeWonDateChange = (wonDate: string) => {
    setDisplayPrizeWonDate(wonDate);
  };

  /******************************/
  /***** NAVIGATION HELPERS *****/
  /******************************/

  /**
   * Navigates back to the home tab if no process is currently running.
   */
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
    displayPrizeClaimed,
    displayPrizeDelivered,
    displayPrizeWonDate,
    navigation,
    navToHomeTab,
  };
};

export default usePrizeScreen;
