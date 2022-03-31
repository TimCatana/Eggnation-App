import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const UpdateEmailScreenBottomView = props => {
  const {isLoading, isEmailError, handleShowPasswordModal} = props;

  return (
    <View style={styles.body}>
      <Pressable
        disabled={isEmailError || isLoading}
        onPress={handleShowPasswordModal}
        style={styles.sendEmailButton}>
        <Text style={styles.sendEmailButtonText}>Update Email</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendEmailButton: {
    width: wp('20%'),
    height: hp('5%'),
    borderRadius: wp('2%'),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  sendEmailButtonText: {
    fontSize: hp('2%'),
    color: 'white',
  },
});

export default UpdateEmailScreenBottomView;
