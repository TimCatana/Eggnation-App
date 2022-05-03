import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Screens} from '../../../../../constants/NavigationConstants';
import {
  C_BUTTON_DISABLED,
  C_BUTTON_ENABLED,
  C_TEXT_LIGHT,
} from '../../../../../constants/Colors';
import {CustomButton} from '../../index';

interface Props {
  isLoading: boolean;
  navigation: any;
  prizeId: string;
  handleHidePrize: () => void;
  isClaimed: boolean;
}

const PrizeDisplayContentBottomCenterView: FC<Props> = props => {
  const {isLoading, navigation, prizeId, handleHidePrize, isClaimed} = props;

  /**
   * Navigates to the claim prize screen and hides
   * the currently visible prize display modal.
   */
  const navToClaimPrizeScreen = () => {
    if (!isLoading) {
      navigation.navigate(Screens.CLAIM_PRIZE_SCREEN, {
        prizeId: prizeId,
      });

      setTimeout(() => {
        handleHidePrize();
      }, 500);
    }
  };

  return (
    <View style={styles.body}>
      <CustomButton
        label={isClaimed ? 'Claimed' : 'Claim'}
        onPress={navToClaimPrizeScreen}
        disabled={isClaimed}
        buttonEnabledColor={C_BUTTON_ENABLED}
        buttonDisabledColor={C_BUTTON_DISABLED}
        textColor={C_TEXT_LIGHT}
        fontSize={hp('2%')}
        elevation={0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: hp('9%'),
  },
});

export default PrizeDisplayContentBottomCenterView;
