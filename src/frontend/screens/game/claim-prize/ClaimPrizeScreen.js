import React from 'react';
import useClaimPrizeScreen from './useClaimPrizeScreen';
import {View, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {C_ICON_LIGHT} from '../../../theme/Colors';
import TopLeftCornerIcon from '../../../common/components/top-left-corner-icon/TopLeftCornerIcon';
import ClaimPrizeScreenBottomView from './components/bottom-view/ClaimPrizeScreenBottomView';
import ClaimPrizeScreenTopView from './components/top-view/ClaimPrizeScreenTopView';
import PickerModal from './components/other/PickerModal';

const ClaimPrizeScreen = ({navigation}) => {
  const {
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
    isModalPickerShowing,
    showModalPicker,
    hideModalPicker,
    isSelectingCountries,
    handleClaimPrizeClick,
  } = useClaimPrizeScreen();

  /** Navigates back to the login screen if no process is currently running. */
  const navigateBack = () => {
    if (!isLoading) {
      navigation.pop();
    }
  };

  return (
    <View style={styles.body}>
      <TopLeftCornerIcon
        icon={'arrow-left'}
        onPress={navigateBack}
        iconSize={hp('3.5%')}
        iconColor={C_ICON_LIGHT}
        viewStyle={styles.icon}
        iconStyle={{}}
      />
      <ClaimPrizeScreenTopView
        isLoading={isLoading}
        selectedCountry={selectedCountry}
        selectedRegion={selectedRegion}
        address={address}
        handleAddressChange={handleAddressChange}
        showModalPicker={showModalPicker}
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
        data={isSelectingCountries ? allCountries : allRegions}
        onSelect={
          isSelectingCountries ? handleCountryChange : handleRegionChange
        }
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
  icon: {
    flex: 0.5,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    paddingLeft: wp('1%'),
    paddingTop: hp('1%'),
  },
});

export default ClaimPrizeScreen;
