import React from 'react';
import {
  View,
  Text,
  TextInput,
  Modal,
  Pressable,
  StyleSheet,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const PasswordModal = props => {
  const {
    isLoading,
    isModalVisible,
    password,
    handlePasswordChange,
    isPasswordError,
    hidePasswordModal,
    handleOnConfirm,
  } = props;

  return (
    <Modal
      style={styles.formView}
      animationType="fade"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => {
        if (!isLoading) {
          hidePasswordModal();
        }
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextInput
            value={password}
            onChangeText={handlePasswordChange}
            placeholder="password"
            keyboardType="default"
            style={styles.textInput}
          />
          <Pressable
            disabled={isLoading || isPasswordError}
            onPress={handleOnConfirm}
            style={styles.sendEmailButton}>
            <Text style={styles.sendEmailButtonText}>Confirm</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: wp('80%'),
    height: hp('20%'),
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textInput: {
    // backgroundColor: 'purple',
    width: '80%',
    height: hp('5%'),
    fontSize: hp('1.5%'),
    marginBottom: hp('2%'),
  },
});

export default PasswordModal;
