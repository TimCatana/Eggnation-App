import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CustomTextInput from '../../../../../components/common/CustomTextInput'

const UpdatePasswordScreenTopView = props => {
  const {
    newPassword,
    handleNewPasswordChange,
    confirmPassword,
    handleConfirmPasswordChange,
  } = props;

  return (
    <View style={styles.formView}>

   
   
        
      <CustomTextInput
        value={newPassword}
        onValueChange={handleNewPasswordChange}
        placeholder="password"
        keyboardType="default"
        width={'100%'}
        height={hp('5.5%')}
        isPassword={true}
        textColor='white'
        marginBottom={hp("2%")}
        maxLength={30}
      />
      <CustomTextInput
        value={confirmPassword}
        onValueChange={handleConfirmPasswordChange}
        placeholder="confirm password"
        keyboardType="default"
        width={'100%'}
        height={hp('5.5%')}
        isPassword={true}
        textColor='white'
        maxLength={30}
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

export default UpdatePasswordScreenTopView;
