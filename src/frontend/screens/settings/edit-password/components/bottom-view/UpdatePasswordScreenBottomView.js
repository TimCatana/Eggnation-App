import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const UpdatePasswordScreenBottomView = props => {
  const {
    isLoading,
    isPasswordError,
    isConfirmPasswordError,
    handleShowPasswordModal,
  } = props;

  return (
    <View style={styles.body}>
      <Pressable
        disabled={isLoading || isPasswordError || isConfirmPasswordError}
        onPress={handleShowPasswordModal}
        style={styles.updatePasswordButton}>
        <Text style={styles.updatePasswordButtonText}>Update Password</Text>
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
  updatePasswordButton: {
    width: wp('20%'),
    height: hp('5%'),
    borderRadius: wp('2%'),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  updatePasswordButtonText: {
    fontSize: hp('2%'),
    color: 'white',
  },
});

export default UpdatePasswordScreenBottomView;
