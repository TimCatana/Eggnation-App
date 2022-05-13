import React, {FC} from 'react';
import {Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  S_CPS_SHIPPING_ADDRESS_TITLE,
  S_TI_ADDRESS_PLACEHOLDER,
  S_TI_POSTAL_CODE_PLACEHOLDER,
} from '../../../../../../constants/Strings';
import {
  C_FOCUSED_BORDER_COLOR,
  C_TEXT_LIGHT,
  C_UNFOCUSED_BORDER_COLOR,
} from '../../../../../../constants/Colors';
import {
  CustomDropdownMenu,
  CustomTextInput,
} from '../../../../../common/components';

interface Props {
  isLoading: boolean;
  selectedCountry: string;
  selectedRegion: string;
  address: string;
  handleAddressChange: (value: string) => void;
  postalCode: string;
  handlePostalCodeChange: (value: string) => void;
  showModalPicker: (selectingCountries: boolean) => void;
}

const AddressForm: FC<Props> = props => {
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
    <>
      <Text style={styles.headingText}>{S_CPS_SHIPPING_ADDRESS_TITLE}</Text>

      <CustomDropdownMenu
        value={selectedCountry}
        handleIconPress={() => {
          showModalPicker(true);
        }}
        disabled={isLoading}
        width={'100%'}
        height={hp('6.5%')}
        fontSize={hp('2%')}
        marginBottom={hp('2%')}
        textColor={C_TEXT_LIGHT}
        borderColor={C_UNFOCUSED_BORDER_COLOR}
      />

      <CustomDropdownMenu
        value={selectedRegion}
        handleIconPress={() => {
          showModalPicker(false);
        }}
        disabled={isLoading}
        width={'100%'}
        height={hp('6.5%')}
        marginBottom={hp('2%')}
        fontSize={hp('2%')}
        textColor={C_TEXT_LIGHT}
        borderColor={C_UNFOCUSED_BORDER_COLOR}
      />

      <CustomTextInput
        value={address}
        onValueChange={handleAddressChange}
        placeholder={S_TI_ADDRESS_PLACEHOLDER}
        errorText={''}
        isError={false}
        disabled={isLoading}
        maxLength={200}
        width={'100%'}
        height={hp('6.5%')}
        marginBottom={hp('2%')}
        fontSize={hp('2%')}
        textColor={C_TEXT_LIGHT}
        unfocusedBorderColor={C_UNFOCUSED_BORDER_COLOR}
        focusedBorderColor={C_FOCUSED_BORDER_COLOR}
        returnKeyType={'next'}
        keyboardType={'default'}
        isPassword={false}
      />
      
      <CustomTextInput
        value={postalCode}
        onValueChange={handlePostalCodeChange}
        placeholder={S_TI_POSTAL_CODE_PLACEHOLDER}
        errorText={''}
        isError={false}
        disabled={isLoading}
        maxLength={30}
        width={'100%'}
        height={hp('6.5%')}
        fontSize={hp('2%')}
        textColor="white"
        unfocusedBorderColor={C_UNFOCUSED_BORDER_COLOR}
        focusedBorderColor={C_FOCUSED_BORDER_COLOR}
        keyboardType={'default'}
        returnKeyType={'done'}
        isPassword={false}
      />
    </>
  );
};

const styles = StyleSheet.create({
  headingText: {
    marginBottom: hp('4%'),
    fontSize: hp('4%'),
    color: C_TEXT_LIGHT,
  },
});

export default AddressForm;
