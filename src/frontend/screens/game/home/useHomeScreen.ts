import {useState, useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenProp} from '../../../navigation/ScreenProps';
import {Screens} from '../../../../constants/NavigationConstants';
import {useInterstitialAd, TestIds} from '@react-native-admob/admob';
import {
  MGL_AD_FREQUENCY,
  DV_LOCAL_COUNT,
} from '../../../../constants/Constants';
import getLocalCountUC from '../../../../domain/home-screen-uc/getLocalCountUC';
import checkIfTimeToResetCountUC from '../../../../domain/home-screen-uc/checkIfTimeToResetCountUC';
import decrementLocalCountUC from '../../../../domain/home-screen-uc/decrementLocalCountUC';
import mainGameLogicUC from '../../../../domain/home-screen-uc/mainGameLogicUC';
import {AvailablePrize, ContestPrize} from '../../../../types/typeAliases';
import Snackbar from 'react-native-snackbar';

const useHomeScreen = (setSwipeEnabled: (isEnabled: boolean) => void) => {
  /******************/
  /***** STATES *****/
  /******************/
  const navigation = useNavigation<HomeScreenProp>();

  const isMounted = useRef<boolean>(false);

  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [localCount, setLocalCount] = useState<number>(1000);

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
   * Disables swipe when some important logic is running
   */
  useEffect(() => {
    setSwipeEnabled(
      isInitialized &&
        !isLoading &&
        !isAnimationPlaying &&
        !isFlashAnimationPlaying,
    );
  }, [isInitialized, isLoading, isAnimationPlaying, isFlashAnimationPlaying]);

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
   * Resets the count to 1000 is a certain amount of time passed since the last
   * time that the user opened the app.
   */
  const initCounter = async () => {
    await checkIfTimeToResetCountUC();
    await getLocalCount();
    setIsInitialized(true);
  };

  /**
   * Get's the local count from async storage.
   * Handles any possible errors with fetching the local count.
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
      console.log('failed to update local count');
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
    handleDisplayPrizeDescChange(prize.prizeTitle);
    handleDisplayPrizeTypeChange(prize.prizeType);
    handleDisplayPrizeTierChange(prize.prizeTier);
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
    if (adLoaded && localCount != 1000) {
      show();
    }
  };

  /******************************/
  /***** NAVIGATION HELPERS *****/
  /******************************/

  /** Navigates back to the settings screen if no process is currently running. */
  const navToSettingsScreen = () => {
    if (!isLoading && !isAnimationPlaying && !adShowing) {
      navigation.navigate(Screens.SETTINGS_SCREEN);
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
    navToSettingsScreen,
    displayPrizeId,
    displayPrizeTitle,
    displayPrizeDesc,
    displayPrizeTier,
    displayPrizeType,
    isShowingPrize,
    handleHidePrize,
    handleFlashAnimationFinished,
    navigation,
  };
};

export default useHomeScreen;
