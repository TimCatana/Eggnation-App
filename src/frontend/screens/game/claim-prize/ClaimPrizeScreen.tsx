import React, {FC} from 'react';
import useClaimPrizeScreen from './useClaimPrizeScreen';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {C_ICON_LIGHT, C_ACTIVITY_INDICATOR} from '../../../../constants/Colors';
import {PressableIcon, PrizeClaimedModal} from '../../../common/components';
import ClaimPrizeScreenBottomView from './components/bottom-view/ClaimPrizeScreenBottomView';
import ClaimPrizeScreenTopView from './components/top-view/ClaimPrizeScreenTopView';
import PickerModal from './components/other/PickerModal';

const ClaimPrizeScreen: FC = () => {
  const {
    isLoading,
    prizeClaimType,
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
    paypalEmail,
    handlePaypalEmailChange,
    isPaypalEmailError,
    isModalPickerShowing,
    showModalPicker,
    hideModalPicker,
    isConfirmationModalShowing,
    isSelectingCountries,
    handleClaimPrizeClick,
    navigateBack,
  } = useClaimPrizeScreen();

  return (
    <View style={styles.body}>
      <ClaimPrizeScreenTopView
        isLoading={isLoading}
        prizeClaimType={prizeClaimType}
        selectedCountry={selectedCountry}
        selectedRegion={selectedRegion}
        address={address}
        handleAddressChange={handleAddressChange}
        postalCode={postalCode}
        handlePostalCodeChange={handlePostalCodeChange}
        paypalEmail={paypalEmail}
        handlePaypalEmailChange={handlePaypalEmailChange}
        isPaypalEmailError={isPaypalEmailError}
        showModalPicker={showModalPicker}
      />
      <ClaimPrizeScreenBottomView
        disabled={
          isLoading ||
          isCountryError ||
          isRegionError ||
          isAddressError ||
          isPostalCodeError ||
          isPaypalEmailError
        }
        handleClaimPrizeClick={handleClaimPrizeClick}
      />
      <PressableIcon
        icon={'arrow-left'}
        onPress={navigateBack}
        iconSize={hp('4%')}
        iconColor={C_ICON_LIGHT}
        viewStyle={styles.icon}
        iconStyle={{}}
      />
      <PickerModal
        hideModalPicker={hideModalPicker}
        isModalVisible={isModalPickerShowing}
        data={isSelectingCountries ? allCountries : allRegions}
        onSelect={
          isSelectingCountries ? handleCountryChange : handleRegionChange
        }
      />
      <PrizeClaimedModal
        isLoading={isLoading}
        isModalVisible={isConfirmationModalShowing}
        navigateBack={navigateBack}
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
    position: 'absolute',
    left: hp('0.5%'),
    top: hp('0.5%'),
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
