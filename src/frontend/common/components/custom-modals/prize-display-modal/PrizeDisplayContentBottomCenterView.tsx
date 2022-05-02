import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  PCT_CASH,
  PCT_DELIVERABLE,
  PCT_NONE,
} from '../../../../../constants/Constants';
import {Screens} from '../../../../../constants/NavigationConstants';
import {
  C_BUTTON_DISABLED,
  C_BUTTON_ENABLED,
  C_TEXT_LIGHT,
} from '../../../../theme/Colors';
import {CustomButton} from '../../index';

interface Props {
  isLoading: boolean;
  navigation: any;
  prizeId: string;
  prizeClaimType: string;
  prizeClaimed: boolean;
  prizeDelivered: boolean;
  handleHidePrize: () => void;
}

const PrizeDisplayContentBottomCenterView: FC<Props> = props => {
  const {
    isLoading,
    navigation,
    prizeId,
    prizeClaimType,
    prizeClaimed,
    prizeDelivered,
    handleHidePrize,
  } = props;

  return (
    <View style={styles.body}>
      <CustomButton
        label={'Claim'}
        onPress={async () => {
          if (!isLoading) {
            await navigation.navigate(Screens.CLAIM_PRIZE_SCREEN, {
              prizeId: prizeId,
            });
            setTimeout(() => {
              handleHidePrize();
            }, 500);
          }
        }}
        buttonEnabledColor={C_BUTTON_ENABLED}
        buttonDisabledColor={C_BUTTON_DISABLED}
        textColor={C_TEXT_LIGHT}
        fontSize={hp('2%')}
        elevation={0}
        disabled={
          isLoading ||
          (prizeClaimType !== PCT_DELIVERABLE && prizeClaimType !== PCT_CASH) ||
          prizeClaimed ||
          prizeDelivered
        }
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
