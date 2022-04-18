import {useState, useEffect} from 'react';
import claimPrizeUC from '../../../../domain/claim-prize-screen-us/claimPrizeUC';
import countriesData from '../../../util/countries.json';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ClaimPrizeScreenProp} from '../../../navigation/ScreenProps'

const useClaimPrizeScreen = (prizeId) => {
  /******************/
  /***** STATES *****/
  /******************/
  const navigation = useNavigation<ClaimPrizeScreenProp>();
  const route = useRoute<ClaimPrizeScreenProp>();

  const [isLoading, setIsLoading] = useState(false);

  const [allCountries, setAllCountries] = useState([]);
  const [allRegions, setAllRegions] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState('Afghanistan');
  const [isCountryError, setIsCountryError] = useState(true);

  const [selectedRegion, setSelectedRegion] = useState('Badakhshan');
  const [isRegionError, setIsRegionError] = useState(true);

  const [address, setAddress] = useState('');
  const [isAddressError, setIsAddressError] = useState(true);

  const [postalCode, setPostalCode] = useState('');
  const [isPostalCodeError, setIsPostalCodeError] = useState(true);

  const [isModalPickerShowing, setIsModalPickerShowing] = useState(false);
  const [isSelectingCountries, setIsSelectingCountries] = useState(true);

  /***********************/
  /***** USE EFFECTS *****/
  /***********************/

  /**
   * Parses the countries JSON file and sets the selectable countries and regions.
   * @dependent onMount
   */
  useEffect(() => {
    // console.log(countriesData[0])
    setAllCountries(
      countriesData.map(it => {
        return {
          countryName: it.countryName,
          countryShortCode: it.countryShortCode,
        };
      }),
    );

    setAllRegions(
      countriesData.find(it => it.countryName === selectedCountry).regions,
    );
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
    setAllRegions(
      countriesData.find(it => it.countryName === selectedCountry).regions,
    );
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

  /***********************/
  /***** TEXT INPUTS *****/
  /***********************/

  /**
   * Updates the current selected country when dropdown menu item is clicked.
   * @param index The index of the available countries array to select
   */
  const handleCountryChange = index => {
    setSelectedCountry(allCountries[index].countryName);
    setIsModalPickerShowing(false);
  };

  /**
   * Updates the current selected region when dropdown menu item is clicked.
   * @param index The index of the available countries array to select
   */
  const handleRegionChange = index => {
    setSelectedRegion(allRegions[index].name);
    setIsModalPickerShowing(false);
  };

  /**
   * Updates the current address state when user inputs a value into a textInput
   * @param value The value inputted into the textInput
   */
  const handleAddressChange = value => {
    setAddress(value);
  };

  /**
   * Updates the current postal code state when user inputs a value into a textInput
   * @param value The value inputted into the textInput
   */
  const handlePostalCodeChange = value => {
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
  const showModalPicker = selectingCountries => {
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
   * Does the backend logic to claim the won prize.
   * @onSuccess // TODO
   * @onFailure // TODO
   */
  const handleClaimPrizeClick = async () => {
    setIsLoading(true);
    const result = await claimPrizeUC(
      prizeId,
      selectedCountry,
      selectedRegion,
      address,
      postalCode,
    );
    setIsLoading(false);

    // SHOW
  };

  /******************************/
  /***** NAVIGATION HELPERS *****/
  /******************************/

  /** Navigates back to the login screen if no process is currently running. */
  const navigateBack = () => {
    if (!isLoading) {
      navigation.pop();
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
    isSelectingCountries,
    handleClaimPrizeClick,
    navigateBack,
  };
};

export default useClaimPrizeScreen;
