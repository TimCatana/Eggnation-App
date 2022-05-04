import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  PCT_TRANSFER,
  PCT_DELIVERABLE,
} from '../../../../../../constants/Constants';
import {C_TEXT_LIGHT} from '../../../../../../constants/Colors';
import AddressForm from './AddressForm';
import CashTransferForm from './CashTransferForm';

interface Props {
  isLoading: boolean;
  prizeClaimType: string;
  selectedCountry: string;
  selectedRegion: string;
  address: string;
  handleAddressChange: (value: string) => void;
  postalCode: string;
  handlePostalCodeChange: (value: string) => void;
  paypalEmail: string;
  handlePaypalEmailChange: (value: string) => void;
  isPaypalEmailError: boolean;
  showModalPicker: (isCountries: boolean) => void;
}

const ClaimPrizeScreenTopView: FC<Props> = props => {
  const {
    isLoading,
    prizeClaimType,
    selectedCountry,
    selectedRegion,
    address,
    handleAddressChange,
    postalCode,
    handlePostalCodeChange,
    paypalEmail,
    handlePaypalEmailChange,
    isPaypalEmailError,
    showModalPicker,
  } = props;

  return (
    <View style={styles.formView}>
      {prizeClaimType === PCT_DELIVERABLE && (
        <AddressForm
          isLoading={isLoading}
          selectedCountry={selectedCountry}
          selectedRegion={selectedRegion}
          address={address}
          handleAddressChange={handleAddressChange}
          postalCode={postalCode}
          handlePostalCodeChange={handlePostalCodeChange}
          showModalPicker={showModalPicker}
        />
      )}

      {prizeClaimType === PCT_TRANSFER && (
        <CashTransferForm
          isLoading={isLoading}
          paypalEmail={paypalEmail}
          handlePaypalEmailChange={handlePaypalEmailChange}
          isPaypalEmailError={isPaypalEmailError}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  formView: {
    flex: 9,
    width: wp('75%'),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ClaimPrizeScreenTopView;
