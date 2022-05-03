import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  C_BUTTON_ENABLED,
  C_BUTTON_DISABLED,
  C_TEXT_INPUT_TEXT_LIGHT,
} from '../../../../../../constants/Colors';
import {CustomButton} from '../../../../../common/components';

interface Props {
  isLoading: boolean;
  isPasswordError: boolean;
  handleDeleteUserClick: () => void;
}

const DeleteAccountBottomView: FC<Props> = props => {
  const {isLoading, isPasswordError, handleDeleteUserClick} = props;

  return (
    <View style={styles.body}>
      <CustomButton
        label={'Delete Account'}
        onPress={handleDeleteUserClick}
        disabled={isLoading || isPasswordError}
        buttonEnabledColor={C_BUTTON_ENABLED}
        buttonDisabledColor={C_BUTTON_DISABLED}
        textColor={C_TEXT_INPUT_TEXT_LIGHT}
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

export default DeleteAccountBottomView;
