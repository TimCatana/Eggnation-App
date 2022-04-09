import {useState, useEffect} from 'react';
import countriesData from '../../../util/countries.json';

// TODO - Add frontend form validation stuff heree
const useClaimPrizeScreen = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [country, setCountry] = useState('Afghanistan');
  const [isCountryError, setIsCountryError] = useState(true);
  const [region, setRegion] = useState('Badakhshan');
  const [isRegionError, setIsRegionError] = useState(true);
  const [address, setAddress] = useState('');
  const [isAddressError, setIsAddressError] = useState(true);
  const [isModalPickerShowing, setIsModalPickerShowing] = useState(false);
  const [isSelectingCountries, setIsSelectingCountries] = useState(true);

  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState([]);

  // USE EFFECTS
  useEffect(() => {
    // console.log(countriesData[0])
    setCountries(
      countriesData.map(it => {
        return {
          countryName: it.countryName,
          countryShortCode: it.countryShortCode,
        };
      }),
    );

    setRegions(countriesData.find(it => it.countryName === country).regions);
  }, []);

  useEffect(() => {
    country.length > 0 ? setIsCountryError(false) : setIsCountryError(true);
    setRegions(countriesData.find(it => it.countryName === country).regions);
  }, [country]);

  useEffect(() => {
    if (regions.length != 0) {
      setRegion(regions[0].name);
    }
  }, [regions]);

  useEffect(() => {
    region.length > 0 ? setIsRegionError(false) : setIsRegionError(true);
  }, [region]);

  useEffect(() => {
    address.length > 0 ? setIsAddressError(false) : setIsAddressError(true);
  }, [address]);

  // TEXT INPUTS
  const handleCountryChange = index => {
    setCountry(countries[index].countryName);
    setIsModalPickerShowing(false);
  };

  const handleRegionChange = index => {
    setRegion(regions[index].name);
    setIsModalPickerShowing(false);
  };

  const handleAddressChange = value => {
    setAddress(value);
  };

  // BUTTON CLICKS
  const handleClaimPrizeClick = () => {
    setIsLoading(true);
    setIsLoading(false);
  };

  const showModalPicker = selectingCountries => {
    setIsSelectingCountries(selectingCountries);
    setIsModalPickerShowing(true);
  };

  const hideModalPicker = () => {
    setIsModalPickerShowing(false);
  };

  return {
    isLoading,
    country,
    handleCountryChange,
    isCountryError,
    region,
    handleRegionChange,
    isRegionError,
    address,
    handleAddressChange,
    isAddressError,
    handleClaimPrizeClick,
    showModalPicker,
    hideModalPicker,
    isModalPickerShowing,
    countries,
    regions,
    isSelectingCountries,
  };
};

export default useClaimPrizeScreen;
