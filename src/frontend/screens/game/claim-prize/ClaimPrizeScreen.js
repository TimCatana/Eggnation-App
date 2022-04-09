import React from 'react';
import useClaimPrizeScreen from './useClaimPrizeScreen';
import {View, Text, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ClaimPrizeScreenBottomView from './components/bottom-view/ClaimPrizeScreenBottomView';
import ClaimPrizeScreenTopView from './components/top-view/ClaimPrizeScreenTopView';
import PickerModal from './components/other/PickerModal';

const ClaimPrizeScreen = () => {
  const {
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
  } = useClaimPrizeScreen();

  return (
    <View style={styles.body}>
      <ClaimPrizeScreenTopView
        isLoading={isLoading}
        country={country}
        handleCountryChange={handleCountryChange}
        region={region}
        handleRegionChange={handleRegionChange}
        address={address}
        handleAddressChange={handleAddressChange}
        showModalPicker={showModalPicker}
        hideModalPicker={hideModalPicker}
      />
      <ClaimPrizeScreenBottomView
        isLoading={isLoading}
        isCountryError={isCountryError}
        isRegionError={isRegionError}
        isAddressError={isAddressError}
        handleClaimPrizeClick={handleClaimPrizeClick}
      />

      <PickerModal
        hideModalPicker={hideModalPicker}
        isModalVisible={isModalPickerShowing}
        data={isSelectingCountries ? countries : regions}
        onSelect={isSelectingCountries ? handleCountryChange : handleRegionChange}
        isSelectingCountries={isSelectingCountries}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    display: 'flex',
    paddingBottom: hp('2.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

export default ClaimPrizeScreen;
