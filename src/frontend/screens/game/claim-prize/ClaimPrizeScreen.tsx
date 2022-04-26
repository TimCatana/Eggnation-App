import React, {FC} from 'react';
import useClaimPrizeScreen from './useClaimPrizeScreen';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {C_ICON_LIGHT, C_ACTIVITY_INDICATOR} from '../../../theme/Colors';
import {TopLeftCornerIcon} from '../../../common/components';
import ClaimPrizeScreenBottomView from './components/bottom-view/ClaimPrizeScreenBottomView';
import ClaimPrizeScreenTopView from './components/top-view/ClaimPrizeScreenTopView';
import PickerModal from './components/other/PickerModal';

const ClaimPrizeScreen: FC = () => {
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
    postalCode,
    handlePostalCodeChange,
    isPostalCodeError,
    isModalPickerShowing,
    showModalPicker,
    hideModalPicker,
    isSelectingCountries,
    handleClaimPrizeClick,
    navigateBack,
  } = useClaimPrizeScreen();

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
        postalCode={postalCode}
        handlePostalCodeChange={handlePostalCodeChange}
        showModalPicker={showModalPicker}
      />
      <ClaimPrizeScreenBottomView
        isLoading={isLoading}
        isCountryError={isCountryError}
        isRegionError={isRegionError}
        isAddressError={isAddressError}
        isPostalCodeError={isPostalCodeError}
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
      <ActivityIndicator
        style={styles.loading}
        animating={isLoading}
        size={hp('10%')}
        color={C_ACTIVITY_INDICATOR}
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
  loading: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});

export default ClaimPrizeScreen;
