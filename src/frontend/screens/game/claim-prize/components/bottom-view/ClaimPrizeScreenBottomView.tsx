import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {S_CPS_CLAIM_BUTTON} from '../../../../../../constants/Strings';
import {
  C_BUTTON_DISABLED,
  C_BUTTON_ENABLED,
  C_TEXT_LIGHT,
} from '../../../../../../constants/Colors';
import {CustomButton} from '../../../../../common/components';

interface Props {
  isLoading: boolean;
  isCountryError: boolean;
  isRegionError: boolean;
  isAddressError: boolean;
  isPostalCodeError: boolean;
  isPaypalEmailError: boolean;
  handleClaimPrizeClick: () => void;
}

const ClaimPrizeScreenBottomView: FC<Props> = props => {
  const {
    isLoading,
    isCountryError,
    isRegionError,
    isAddressError,
    isPostalCodeError,
    isPaypalEmailError,
    handleClaimPrizeClick,
  } = props;

  return (
    <View style={styles.body}>
      <CustomButton
        label={S_CPS_CLAIM_BUTTON}
        onPress={handleClaimPrizeClick}
        disabled={
          isLoading ||
          isCountryError ||
          isRegionError ||
          isAddressError ||
          isPostalCodeError ||
          isPaypalEmailError
        }
        buttonEnabledColor={C_BUTTON_ENABLED}
        buttonDisabledColor={C_BUTTON_DISABLED}
        textColor={C_TEXT_LIGHT}
        fontSize={hp('2%')}
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
