import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {CustomButton} from '../../../../../common/components';
import {C_BUTTON_DISABLED, C_BUTTON_ENABLED} from '../../../../../theme/Colors';
import {S_CPS_CLAIM_BUTTON} from '../../../../../theme/Strings';

interface Props {
  handleClaimPrizeClick: () => void;
  isCountryError: boolean;
  isRegionError: boolean;
  isAddressError: boolean;
  isPostalCodeError: boolean;
  isLoading: boolean;
}

const ClaimPrizeScreenBottomView: FC<Props> = props => {
  const {
    handleClaimPrizeClick,
    isCountryError,
    isRegionError,
    isAddressError,
    isPostalCodeError,
    isLoading,
  } = props;

  return (
    <View style={styles.body}>
      <CustomButton
        label={S_CPS_CLAIM_BUTTON}
        onPress={handleClaimPrizeClick}
        buttonEnabledColor={C_BUTTON_ENABLED}
        buttonDisabledColor={C_BUTTON_DISABLED}
        textColor={'white'}
        fontSize={hp('2%')}
        disabled={
          isLoading ||
          isCountryError ||
          isRegionError ||
          isAddressError ||
          isPostalCodeError
        }
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
