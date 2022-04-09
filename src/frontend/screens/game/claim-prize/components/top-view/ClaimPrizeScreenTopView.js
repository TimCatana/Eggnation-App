import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CustomTextInput from '../../../../../components/common/CustomTextInput'
import CustomDropdownMenu from '../../../../../components/common/CustomDropdownMenu';

const ClaimPrizeScreenTopView = props => {
  const {
    isLoading,
    country,
    handleCountryChange,
    region,
    handleRegionChange,
    address,
    handleAddressChange,
    showModalPicker,
    hideModalPicker,
  } = props;

  return (
    <View style={styles.formView}>
      <CustomDropdownMenu
        value={country}
        width={'100%'}
        height={hp('5.5%')}
        fontSize={hp('2%')}
        textColor="white"
        marginBottom={hp('2%')}
        disabled={isLoading}
        handleIconPress={() => {
          showModalPicker(true);
        }}
      />

      <CustomDropdownMenu
        value={region}
        width={'100%'}
        height={hp('5.5%')}
        fontSize={hp('2%')}
        textColor="white"
        marginBottom={hp('2%')}
        disabled={isLoading}
        handleIconPress={() => {
          showModalPicker(false);
        }}
      />
      <CustomTextInput
        value={address}
        onValueChange={handleAddressChange}
        placeholder="address"
        keyboardType="default"
        width={'100%'}
        height={hp('5.5%')}
        isPassword={false}
        textColor="white"
        fontSize={hp('2%')}
        maxLength={30}
        disabled={isLoading}
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
