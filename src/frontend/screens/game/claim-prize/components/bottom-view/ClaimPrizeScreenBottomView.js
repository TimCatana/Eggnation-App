import React from 'react';
import {View, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CustomButton from '../../../../../common/components/custom-button/CustomButton'

const ClaimPrizeScreenBottomView = props => {
  const {
    handleClaimPrizeClick,
    isCountryError,
    isRegionError,
    isAddressError,
    isPostalCodeError,
    isLoading
  } = props;

  return (
    <View style={styles.body}>
      <CustomButton
        label={'Claim Prize'}
        onPress={handleClaimPrizeClick}
        buttonEnabledColor={'pink'}
        buttonDisabledColor={'gray'}
        textColor={'white'}
        fontSize={hp('2%')}
        disabled={isLoading || isCountryError || isRegionError || isAddressError || isPostalCodeError}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ClaimPrizeScreenBottomView;
