import {useState, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  ClaimPrizeScreenProp,
  ClaimPrizeRouteProp,
} from '../../../navigation/ScreenProps';
import {Countries, Regions} from '../../../../types/typeAliases';
import claimPrizeUC from '../../../../domain/claim-prize-screen-uc/claimPrizeUC';
import countriesData from '../../../../util/countries.json';
import {ERROR} from '../../../../constants/ResultsConstants';
import Snackbar from 'react-native-snackbar';

const useClaimPrizeScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/
  const navigation = useNavigation<ClaimPrizeScreenProp>();
  const route = useRoute<ClaimPrizeRouteProp>();

  const [isLoading, setIsLoading] = useState(false);

  const [allCountries, setAllCountries] = useState<Countries | []>([]);
  const [allRegions, setAllRegions] = useState<Regions | []>([]);

  const [selectedCountry, setSelectedCountry] = useState<string>('Afghanistan');
  const [isCountryError, setIsCountryError] = useState<boolean>(true);

  const [selectedRegion, setSelectedRegion] = useState<string>('Badakhshan');
  const [isRegionError, setIsRegionError] = useState<boolean>(true);

  const [address, setAddress] = useState<string>('');
  const [isAddressError, setIsAddressError] = useState<boolean>(true);

  const [postalCode, setPostalCode] = useState<string>('');
  const [isPostalCodeError, setIsPostalCodeError] = useState<boolean>(true);

  const [isModalPickerShowing, setIsModalPickerShowing] =
    useState<boolean>(false);
  const [isSelectingCountries, setIsSelectingCountries] =
    useState<boolean>(true);

  const [isConfirmationModalShowing, setIsConfirmationModalShowing] =
    useState<boolean>(false);

  const [snackbarText, setSnackbarText] = useState<string>('');
  const [showSnackbar, setShowSnackbar] = useState<number>(0); // each time this increments, the useEffect for snackbar is triggered

  /***********************/
  /***** USE EFFECTS *****/
  /***********************/

  /**
   * Parses the countries JSON file and sets the selectable countries and regions.
   * @dependent onMount
   */
  useEffect(() => {
    setAllCountries(
      countriesData.map(it => {
        return {
          name: it.name,
          countryShortCode: it.countryShortCode,
        };
      }),
    );

    setRegions();
  }, []);

  /**
   * Selects the country and sets a new set of selectable regions that correspond
   * to the selected country.
   * @dependent selectedCountry
   */
  useEffect(() => {
    selectedCountry.length > 0
      ? setIsCountryError(false)
      : setIsCountryError(true);

    setRegions();
  }, [selectedCountry]);

  /**
   * When a new country is selected, the set of selectable regions are updated to correspond
   * to the selected country. When the new set of regions is updated, we want to select the first
   * region in that list as a default value. This is what this useEffect does.
   * @dependent allRegions
   */
  useEffect(() => {
    if (allRegions.length != 0) {
      setSelectedRegion(allRegions[0].name);
    }
  }, [allRegions]);

  /**
   * Checks to see if the newly selected region is valid.
   * The region SHOULD ALWAYS be valid.
   * @dependent selectedRegion
   */
  useEffect(() => {
    selectedRegion.length > 0
      ? setIsRegionError(false)
      : setIsRegionError(true);
  }, [selectedRegion]);

  /**
   * Checks to see if the newly inputted address
   * @dependent region
   */
  useEffect(() => {
    address.length > 0 ? setIsAddressError(false) : setIsAddressError(true);
  }, [address]);

  /**
   * Checks to see if the newly inputted address
   * @dependent postalCode
   */
  useEffect(() => {
    postalCode.length > 0
      ? setIsPostalCodeError(false)
      : setIsPostalCodeError(true);
  }, [postalCode]);

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

  const setRegions = () => {
    const country = countriesData.find(it => it.name === selectedCountry);
    country ? setAllRegions(country.regions) : setAllRegions([]);
  };

  /***********************/
  /***** TEXT INPUTS *****/
  /***********************/

  /**
   * Updates the current selected country when dropdown menu item is clicked.
   * @param index The index of the available countries array to select
   */
  const handleCountryChange = (index: number) => {
    setSelectedCountry(allCountries[index].name);
    setIsModalPickerShowing(false);
  };

  /**
   * Updates the current selected region when dropdown menu item is clicked.
   * @param index The index of the available countries array to select
   */
  const handleRegionChange = (index: number) => {
    setSelectedRegion(allRegions[index].name);
    setIsModalPickerShowing(false);
  };

  /**
   * Updates the current address state when user inputs a value into a textInput
   * @param value The value inputted into the textInput
   */
  const handleAddressChange = (value: string) => {
    setAddress(value);
  };

  /**
   * Updates the current postal code state when user inputs a value into a textInput
   * @param value The value inputted into the textInput
   */
  const handlePostalCodeChange = (value: string) => {
    setPostalCode(value);
  };

  /*************************/
  /***** BUTTON CLICKS *****/
  /*************************/

  /**
   * Shows the selection modal (dropdown list).
   * One modal is used to show both the countries and regions dropdown list, therefore,
   * I need to identify which one to show.
   * @param selectingCountries Whether the user is selecting a country or not (region)
   */
  const showModalPicker = (selectingCountries: boolean) => {
    setIsSelectingCountries(selectingCountries);
    setIsModalPickerShowing(true);
  };

  /**
   * hides the selection modal (dropdown list).
   */
  const hideModalPicker = () => {
    setIsModalPickerShowing(false);
  };

  /**
   * Shows the password modal.
   * This modal is used to enter the user's current password before they can
   * actually update any information. This is in place for security purposes
   */
  const showConfirmationModal = () => {
    setIsConfirmationModalShowing(true);
  };

  /**
   * Hides the password modal.
   * This modal is used to enter the user's current password before they can
   * actually update any information. This is in place for security purposes
   */
  const hideConfirmationModal = () => {
    setIsConfirmationModalShowing(false);
  };

  /**
   * Does the backend logic to claim the won prize.
   * @onSuccess // TODO
   * @onFailure // TODO
   */
  const handleClaimPrizeClick = async () => {
    setIsLoading(true);
    const result = await claimPrizeUC(
      route.params.prizeId,
      selectedCountry,
      selectedRegion,
      address,
      postalCode,
    );
    setIsLoading(false);

    if (result.status === ERROR) {
      setSnackbarText(result.message);
      setShowSnackbar(showSnackbar + 1);
    } else {
      showConfirmationModal();
    }
  };

  /******************************/
  /***** NAVIGATION HELPERS *****/
  /******************************/

  /** Navigates back to the login screen if no process is currently running. */
  const hideModalAndNavigateBack = () => {
    if (!isLoading) {
      hideConfirmationModal();

      setTimeout(() => {
        navigation.pop();
      }, 500);
    }
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    isLoading,
    allCountries,
    allRegions,
    selectedCountry,
    handleCountryChange,
    isCountryError,
    selectedRegion,
    handleRegionChange,
    isRegionError,
    address,
    handleAddressChange,
    isAddressError,
    postalCode,
    handlePostalCodeChange,
    isPostalCodeError,
    isModalPickerShowing,
    showModalPicker,
    hideModalPicker,
    isConfirmationModalShowing,
    isSelectingCountries,
    handleClaimPrizeClick,
    hideModalAndNavigateBack,
  };
};

export default useClaimPrizeScreen;
