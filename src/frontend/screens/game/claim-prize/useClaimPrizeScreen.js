import {useState} from 'react';

// TODO - Add frontend form validation stuff heree
const useClaimPrizeScreen = () => {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [address, setAddress] = useState('');

  const handleCountryChange = value => {
    setCountry(value);
  };
  const handleRegionChange = value => {
    setRegion(value);
  };
  const handleAddressChange = value => {
    setAddress(value);
  };

  const handleClaimPrizeClick = () => {
    // TODO
  };

  return {
    country, 
    handleCountryChange,
    region,
    handleRegionChange,
    address,
    handleAddressChange,
    handleClaimPrizeClick
  };
};

export default useClaimPrizeScreen;
