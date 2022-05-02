import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  C_BUTTON_DISABLED,
  C_BUTTON_ENABLED,
  C_TEXT_INPUT_TEXT_LIGHT,
} from '../../../../theme/Colors';
import CustomButton from '../../custom-inputs/CustomButton';

interface Props {
  navigateBack: () => void;
}

const PrizeClaimedModalBottomView: FC<Props> = props => {
  const {navigateBack} = props;

  return (
    <View style={styles.body}>
      <CustomButton
        label={'Go Back'}
        onPress={navigateBack}
        buttonEnabledColor={C_BUTTON_ENABLED}
        buttonDisabledColor={C_BUTTON_DISABLED}
        textColor={C_TEXT_INPUT_TEXT_LIGHT}
        fontSize={hp('2%')}
        disabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PrizeClaimedModalBottomView;
