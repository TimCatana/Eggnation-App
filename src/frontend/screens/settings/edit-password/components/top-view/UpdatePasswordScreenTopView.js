import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const UpdatePasswordScreenTopView = props => {
  const {
    newPassword,
    handleNewPasswordChange,
    confirmPassword,
    handleConfirmPasswordChange,
  } = props;

  return (
    <View style={styles.formView}>
      <TextInput
        value={newPassword}
        onChangeText={handleNewPasswordChange}
        placeholder="new password"
        keyboardType="default"
        style={styles.textInput}
      />
      <TextInput
        value={confirmPassword}
        onChangeText={handleConfirmPasswordChange}
        placeholder="confirm password"
        keyboardType="default"
        style={styles.textInput}
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
  textInput: {
    // backgroundColor: 'purple',
    width: '100%',
    height: hp('5%'),
    fontSize: hp('1.5%'),
    marginBottom: hp('2%'),
  },
});

export default UpdatePasswordScreenTopView;
