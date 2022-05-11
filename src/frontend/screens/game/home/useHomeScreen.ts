import {useState, useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenProp} from '../../../navigation/ScreenProps';
import {Screens} from '../../../../constants/NavigationConstants';
import {useInterstitialAd, TestIds} from '@react-native-admob/admob';
import {
  MGL_AD_FREQUENCY,
  DV_LOCAL_COUNT,
} from '../../../../constants/Constants';
import {AvailablePrize, ContestPrize} from '../../../../constants/typeAliases';
import getLocalCountUC from '../../../../domain/home-screen-uc/getLocalCountUC';
import checkIfTimeToResetCountUC from '../../../../domain/home-screen-uc/checkIfTimeToResetCountUC';
import decrementLocalCountUC from '../../../../domain/home-screen-uc/decrementLocalCountUC';
import mainGameLogicUC from '../../../../domain/home-screen-uc/mainGameLogicUC';
import Snackbar from 'react-native-snackbar';

const useHomeScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/
  const navigation = useNavigation<HomeScreenProp>();

  const isMounted = useRef<boolean>(false);

  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [localCount, setLocalCount] = useState<number>(
    parseInt(DV_LOCAL_COUNT),
  );

  const [isAnimationPlaying, setIsAnimationPlaying] = useState<boolean>(false);
  const winAnimationRef = useRef<any>(null);

  const [isFlashAnimationPlaying, setIsFlashAnimationPlaying] =
    useState<boolean>(false);

  const [isShowingPrize, setIsShowingPrize] = useState<boolean>(false);

  const [displayPrizeId, setDisplayPrizeId] = useState<string>('');
  const [displayPrizeTitle, setDisplayPrizeTitle] = useState<string>('');
  const [displayPrizeDesc, setDisplayPrizeDesc] = useState<string>('');
  const [displayPrizeType, setDisplayPrizeType] = useState<string>('');
  const [displayPrizeTier, setDisplayPrizeTier] = useState<string>('');
  const [displayPrizeClaimType, setDisplayPrizeClaimType] =
    useState<string>('');

  const [snackbarText, setSnackbarText] = useState<string>('');
  const [showSnackbar, setShowSnackbar] = useState<number>(0); // each time this increments, the useEffect for snackbar is triggered

  const {adLoaded, adDismissed, adShowing, show, load} = useInterstitialAd(
    TestIds.INTERSTITIAL,
  );

  /***********************/
  /***** USE EFFECTS *****/
  /***********************/

  /**
   * Initializes the local counter.
   * @dependent onMount
   */
  useEffect(() => {
    initCounter();
  }, []);

  /**
   * Plays and resets the crack animation.
   * @dependent isAnimationPlaying
   */
  useEffect(() => {
    if (isMounted.current) {
      if (isAnimationPlaying) {
        _playAnimation();
      } else {
        _resetAnimation();
      }
    } else {
      isMounted.current = true;
    }
  }, [isAnimationPlaying]);

  /**
   * Displays a Snackbar showing a message.
   * Usually used for error messages.
   * @dependent showSnackbar
   */
  useEffect(() => {
    if (showSnackbar != 0) {
      Snackbar.show({
        text: snackbarText,
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  }, [showSnackbar]);

  /******************************/
  /***** USE EFFECT HELPERS *****/
  /******************************/

  /**
   * Get's the local count from async storage.
   * Resets the count to the default counter value is a certain amount of time
   * passed since the last time that the user opened the app.
   */
  const initCounter = async () => {
    await checkIfTimeToResetCountUC();
    await getLocalCount();
    setIsInitialized(true);
  };

  /**
   * Get's the local count from async storage.
   */
  const getLocalCount = async () => {
    const result = await getLocalCountUC();
    setLocalCount(result.data);
  };

  /*************************/
  /***** BUTTON CLICKS *****/
  /*************************/

  /**
   * Does the main game logic.
   * If count is !1000, do game.
   * If user loses, play lose animation.
   * If user wins, play win animation.
   * If user % x == true, play ad.
   * If user % x == false, load ad.
   */
  const playGame = async () => {
    setIsLoading(true);

    if (
      localCount % MGL_AD_FREQUENCY === 0 &&
      localCount != parseInt(DV_LOCAL_COUNT)
    ) {
      playAd();
      await decrementAndGetLocalCount();
    } else {
      loadAd();
      const result = await mainGameLogicUC(
        localCount,
        decrementAndGetLocalCount,
      );

      if (!result.data.isConnected) {
        setSnackbarText(result.message);
        setShowSnackbar(showSnackbar + 1);
      }

      if (result.data.isWon) {
        handlePopulateDisplayPrize(result.data.prize);
        playAnimation();
      }
    }

    setIsLoading(false);
  };

  /**
   * Decrements the local count.
   */
  const decrementAndGetLocalCount = async () => {
    try {
      await decrementLocalCountUC();
      await getLocalCount();
    } catch (e) {
      if (__DEV__) {
        console.log('failed to update local count');
      }
    }
  };

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
   * Populates the display prize for the modal to be shown when the user wins a prize.
   * @param prize The prize the user won
   */
  const handlePopulateDisplayPrize = (prize: AvailablePrize | ContestPrize) => {
    handleDisplayPrizeIdChange(prize.prizeId);
    handleDisplayPrizeTitleChange(prize.prizeTitle);
    handleDisplayPrizeDescChange(prize.prizeDesc);
    handleDisplayPrizeTypeChange(prize.prizeType);
    handleDisplayPrizeTierChange(prize.prizeTier);
    handleDisplayPrizeClaimTypeChange(prize.prizeClaimType);
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

  /**********************/
  /***** ANIMATIONS *****/
  /**********************/

  /**
   * Sets the playing animation state to true.
   */
  const playAnimation = () => {
    setIsAnimationPlaying(true);
  };

  /**
   * Sets the playing animation state to false.
   */
  const resetAnimation = () => {
    setIsAnimationPlaying(false);
  };

  /**
   * Uses the reference to the lottie animation to play
   * the animation on the UI.
   */
  const _playAnimation = () => {
    winAnimationRef.current ? winAnimationRef.current.play(1, 44) : null;
  };

  /**
   * Uses the reference to the lottie animation to reset
   * the animation on the UI.
   */
  const _resetAnimation = () => {
    winAnimationRef.current ? winAnimationRef.current.reset() : null;
  };

  /**
   * Triggered when the won animation is finished
   */
  const handleWinAnimationFinished = () => {
    _showFlashAnimation();
    setTimeout(() => {
      resetAnimation();
    }, 500);
  };

  /**
   * Triggered when the won animation is finished
   */
  const handleFlashAnimationFinished = () => {
    handleShowPrize();
    setTimeout(() => {
      _hideFlashAnimation();
    }, 500);
  };

  /**
   * Trigger flash animation
   */
  const _showFlashAnimation = () => {
    setIsFlashAnimationPlaying(true);
  };

  /**
   * Trigger flash animation
   */
  const _hideFlashAnimation = () => {
    setIsFlashAnimationPlaying(false);
  };

  /***************/
  /***** ADS *****/
  /***************/

  /** Loads an Ad from AdMob server if an Ad is not loaded yet. */
  const loadAd = () => {
    if (adDismissed || !adLoaded) {
      load();
    }
  };

  /** Plays an Ad if one is loaded. */
  const playAd = () => {
    if (adLoaded && localCount != parseInt(DV_LOCAL_COUNT)) {
      show();
    }
  };

  /******************************/
  /***** NAVIGATION HELPERS *****/
  /******************************/

  /**
   * Navigates back to the settings screen if no process is currently running.
   */
  const navToSettingsScreen = () => {
    if (!isLoading && !isAnimationPlaying && !adShowing) {
      navigation.navigate(Screens.SETTINGS_SCREEN);
    }
  };

  /**
   * Navigates back to the how to play screen if no process is currently running.
   */
  const navToHowToPlayScreen = () => {
    if (!isLoading && !isAnimationPlaying && !adShowing) {
      navigation.navigate(Screens.HOW_TO_PLAY_SCREEN);
    }
  };

  /**
   * Navigates back to the available prizes tab if no process is currently running.
   */
  const navToAvailablePrizesTab = () => {
    if (!isLoading && !isAnimationPlaying && !adShowing) {
      navigation.jumpTo(Screens.AVAILABLE_PRIZES_SCREEN);
    }
  };

  /**
   * Navigates back to the won prizes tab if no process is currently running.
   */
  const navToWonPrizesTab = () => {
    if (!isLoading && !isAnimationPlaying && !adShowing) {
      navigation.jumpTo(Screens.WON_PRIZES_SCREEN);
    }
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    isInitialized,
    isLoading,
    adShowing,
    playGame,
    localCount,
    isAnimationPlaying,
    winAnimationRef,
    handleWinAnimationFinished,
    isFlashAnimationPlaying,
    displayPrizeId,
    displayPrizeTitle,
    displayPrizeDesc,
    displayPrizeTier,
    displayPrizeType,
    displayPrizeClaimType,
    isShowingPrize,
    handleHidePrize,
    handleFlashAnimationFinished,
    navigation,
    navToSettingsScreen,
    navToAvailablePrizesTab,
    navToWonPrizesTab,
    navToHowToPlayScreen,
  };
};

export default useHomeScreen;
