import React from 'react';
import useEditPasswordScreen from './useEditPasswordScreen';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import PasswordModal from '../common/components/PasswordModal';
import UpdatePasswordScreenBottomView from './components/bottom-view/UpdatePasswordScreenBottomView';
import UpdatePasswordScreenTopView from './components/top-view/UpdatePasswordScreenTopView';

const EditPasswordScreen = () => {
  const {
    isLoading,
    newPassword,
    handleNewPasswordChange,
    isNewPasswordError,
    confirmPassword,
    handleConfirmPasswordChange,
    isConfirmPasswordError,
    currentPassword,
    handleCurrentPasswordChange,
    isCurrentPasswordError,
    showPasswordModal,
    hidePasswordModal,
    handleUpdatePasswordClick,
    isPasswordModalShowing
  } = useEditPasswordScreen();

  return (
    <View style={styles.body}>
      <PasswordModal
        isLoading={isLoading}
        isModalVisible={isPasswordModalShowing}
        password={currentPassword}
        isPasswordError={isCurrentPasswordError}
        handlePasswordChange={handleCurrentPasswordChange}
        hidePasswordModal={hidePasswordModal}
        handleOnConfirm={handleUpdatePasswordClick}
      />
      <UpdatePasswordScreenTopView
        newPassword={newPassword}
        handleNewPasswordChange={handleNewPasswordChange}
        confirmPassword={confirmPassword}
        handleConfirmPasswordChange={handleConfirmPasswordChange}
      />
      <UpdatePasswordScreenBottomView
        isLoading={isLoading}
        isPasswordError={isNewPasswordError}
        isConfirmPasswordError={isConfirmPasswordError}
        handleShowPasswordModal={showPasswordModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    display: 'flex',
    paddingBottom: hp('2.5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EditPasswordScreen;
