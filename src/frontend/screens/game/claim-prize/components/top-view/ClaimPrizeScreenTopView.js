import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CustomTextInput from '../../../../../common/components/custom-text-input/CustomTextInput';
import CustomDropdownMenu from '../../../../../common/components/custom-dropdown-menu/CustomDropdownMenu';

const ClaimPrizeScreenTopView = props => {
  const {
    isLoading,
    selectedCountry,
    selectedRegion,
    address,
    handleAddressChange,
    postalCode,
    handlePostalCodeChange,
    showModalPicker,
  } = props;

  return (
    <View style={styles.formView}>
      <CustomDropdownMenu
        value={selectedCountry}
        disabled={isLoading}
        width={'100%'}
        height={hp('5.5%')}
        marginBottom={hp('2%')}
        fontSize={hp('2%')}
        textColor="white"
        borderColor="gray"
        handleIconPress={() => {
          showModalPicker(true);
        }}
      />
      <CustomDropdownMenu
        value={selectedRegion}
        disabled={isLoading}
        width={'100%'}
        height={hp('5.5%')}
        marginBottom={hp('2%')}
        fontSize={hp('2%')}
        textColor="white"
        borderColor="gray"
        handleIconPress={() => {
          showModalPicker(false);
        }}
      />
      <CustomTextInput
        value={address}
        onValueChange={handleAddressChange}
        isError={false}
        errorText={''}
        disabled={isLoading}
        isPassword={false}
        placeholder="address"
        keyboardType="default"
        maxLength={30}
        width={'100%'}
        height={hp('5.5%')}
        marginBottom={hp('2%')}
        fontSize={hp('2%')}
        textColor="white"
        unfocusedBorderColor={'gray'}
        focusedBorderColor={'pink'}
        returnKeyType={'done'}
      />
      <CustomTextInput
        value={postalCode}
        onValueChange={handlePostalCodeChange}
        isError={false}
        errorText={''}
        disabled={isLoading}
        isPassword={false}
        placeholder="postal code"
        keyboardType="default"
        maxLength={30}
        width={'100%'}
        height={hp('5.5%')}
        fontSize={hp('2%')}
        textColor="white"
        unfocusedBorderColor={'gray'}
        focusedBorderColor={'pink'}
        returnKeyType={'done'}
      />
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
