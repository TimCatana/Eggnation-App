import React from 'react';
import {View, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CustomButton from '../../../../../components/common/CustomButton';

const UpdatePasswordScreenBottomView = props => {
  const {
    isLoading,
    isPasswordError,
    isConfirmPasswordError,
    handleShowPasswordModal,
  } = props;

  return (
    <View style={styles.body}>
      <CustomButton
        label={'Update Password'}
        onPress={handleShowPasswordModal}
        buttonEnabledColor={'pink'}
        buttonDisabledColor={'gray'}
        textColor={'white'}
        fontSize={hp('2%')}
        disabled={isLoading || isPasswordError || isConfirmPasswordError}
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

export default UpdatePasswordScreenBottomView;
