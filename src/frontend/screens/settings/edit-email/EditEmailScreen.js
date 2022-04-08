import React from 'react';
import useEditEmailScreen from './useEditEmailScreen';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import UpdateEmailScreenTopView from './components/top-view/UpdateEmailScreenTopView';
import UpdateEmailScreenBottomView from './components/bottom-view/UpdateEmailScreenBottomView';
import PasswordModal from '../common/components/PasswordModal';

const EditEmailScreen = () => {
  const {
    isLoading,
    newEmail,
    isEmailError,
    handleNewEmailChange,
    password,
    handlePasswordChange,
    isPasswordError,
    isPasswordModalShowing,
    showPasswordModal,
    hidePasswordModal,
    handleUpdateEmailClick,
  } = useEditEmailScreen();

  return (
    <View style={styles.body}>
      <PasswordModal
        isLoading={isLoading}
        isModalVisible={isPasswordModalShowing}
        password={password}
        isPasswordError={isPasswordError}
        handlePasswordChange={handlePasswordChange}
        hidePasswordModal={hidePasswordModal}
        handleOnConfirm={handleUpdateEmailClick}
      />

      <UpdateEmailScreenTopView
        newEmail={newEmail}
        handleNewEmailChange={handleNewEmailChange}
      />
      <UpdateEmailScreenBottomView
        isLoading={isLoading}
        isEmailError={isEmailError}
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
    backgroundColor: 'black'
  },
});

export default EditEmailScreen;
