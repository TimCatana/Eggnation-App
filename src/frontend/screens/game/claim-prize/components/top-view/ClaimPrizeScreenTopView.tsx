import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  CustomTextInput,
  CustomDropdownMenu,
  PressableIcon,
} from '../../../../../common/components';
import {C_TEXT_LIGHT} from '../../../../../theme/Colors';
import {
  S_TI_ADDRESS_KEYBOARD_TYPE,
  S_TI_ADDRESS_PLACEHOLDER,
  S_TI_POSTAL_CODE_KEYBOARD_TYPE,
  S_TI_POSTAL_CODE_PLACEHOLDER,
} from '../../../../../theme/Strings';

interface Props {
  isLoading: boolean;
  selectedCountry: string;
  selectedRegion: string;
  address: string;
  handleAddressChange: (value: string) => void;
  postalCode: string;
  handlePostalCodeChange: (value: string) => void;
  showModalPicker: (isCountries: boolean) => void;
}

const ClaimPrizeScreenTopView: FC<Props> = props => {
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
      <Text style={styles.headingText}>Shipping Address</Text>
      <CustomDropdownMenu
        value={selectedCountry}
        disabled={isLoading}
        width={'100%'}
        height={hp('6.5%')}
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
        height={hp('6.5%')}
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
        placeholder={S_TI_ADDRESS_PLACEHOLDER}
        keyboardType={S_TI_ADDRESS_KEYBOARD_TYPE}
        maxLength={30}
        width={'100%'}
        height={hp('6.5%')}
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
        placeholder={S_TI_POSTAL_CODE_PLACEHOLDER}
        keyboardType={S_TI_POSTAL_CODE_KEYBOARD_TYPE}
        maxLength={30}
        width={'100%'}
        height={hp('6.5%')}
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
  headingText: {
    marginBottom: hp('4%'),
    fontSize: hp('4%'),
    color: C_TEXT_LIGHT,
  },
});

export default ClaimPrizeScreenTopView;
