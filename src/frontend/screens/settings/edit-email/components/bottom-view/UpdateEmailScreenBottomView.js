import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CustomButton from '../../../../../components/common/CustomButton';

const UpdateEmailScreenBottomView = props => {
  const {isLoading, isEmailError, handleShowPasswordModal} = props;

  return (
    <View style={styles.body}>
      <CustomButton
        label={'Update Email'}
        onPress={handleShowPasswordModal}
        buttonEnabledColor={'pink'}
        buttonDisabledColor={'gray'}
        textColor={'white'}
        fontSize={hp('2%')}
        disabled={isEmailError || isLoading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default UpdateEmailScreenBottomView;
