import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CustomTextInput from '../../../../../components/common/CustomTextInput';

const UpdateEmailScreenTopView = props => {
  const {isLoading, newEmail, handleNewEmailChange} = props;

  return (
    <View style={styles.formView}>
      <CustomTextInput
        value={newEmail}
        onValueChange={handleNewEmailChange}
        placeholder="email"
        keyboardType="email-address"
        width={'100%'}
        height={hp('5.5%')}
        isPassword={false}
        textColor='white'
        maxLength={100}
        disabled={isLoading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formView: {
    flex: 9,
    width: wp('75%'),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UpdateEmailScreenTopView;
