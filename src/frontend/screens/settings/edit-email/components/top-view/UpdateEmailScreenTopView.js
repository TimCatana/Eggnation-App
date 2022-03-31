import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const UpdateEmailScreenTopView = props => {
  const {newEmail, handleNewEmailChange} = props;

  return (
    <View style={styles.formView}>
      <TextInput
        value={newEmail}
        onChangeText={handleNewEmailChange}
        placeholder="email"
        keyboardType="email-address"
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

export default UpdateEmailScreenTopView;
