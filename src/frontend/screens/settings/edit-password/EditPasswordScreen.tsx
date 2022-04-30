import React, {FC} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  C_ICON_LIGHT,
  C_BACKGROUND_DARK,
  C_ACTIVITY_INDICATOR,
} from '../../../theme/Colors';
import {PressableIcon, PasswordModal} from '../../../common/components';
import UpdatePasswordScreenTopView from './components/top-view/UpdatePasswordScreenTopView';
import UpdatePasswordScreenBottomView from './components/bottom-view/UpdatePasswordScreenBottomView';

import useEditPasswordScreen from './useEditPasswordScreen';

const EditPasswordScreen: FC = () => {
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
    isPasswordModalShowing,
    showPasswordModal,
    hidePasswordModal,
    navigateBack,
    updatePasswordAndNavBackIfSuccess,
  } = useEditPasswordScreen();

  return (
    <View style={styles.body}>
      <PasswordModal
        isLoading={isLoading}
        password={currentPassword}
        handlePasswordChange={handleCurrentPasswordChange}
        isPasswordError={isCurrentPasswordError}
        isModalVisible={isPasswordModalShowing}
        hidePasswordModal={hidePasswordModal}
        handleOnConfirm={updatePasswordAndNavBackIfSuccess}
      />
      <PressableIcon
        icon={'arrow-left'}
        onPress={navigateBack}
        iconSize={hp('3.5%')}
        iconColor={C_ICON_LIGHT}
        viewStyle={styles.icon}
        iconStyle={{}}
      />
      <UpdatePasswordScreenTopView
        isLoading={isLoading}
        newPassword={newPassword}
        handleNewPasswordChange={handleNewPasswordChange}
        isNewPasswordError={isNewPasswordError}
        confirmPassword={confirmPassword}
        handleConfirmPasswordChange={handleConfirmPasswordChange}
        isConfirmPasswordError={isConfirmPasswordError}
      />
      <UpdatePasswordScreenBottomView
        isLoading={isLoading}
        isPasswordError={isNewPasswordError}
        isConfirmPasswordError={isConfirmPasswordError}
        handleShowPasswordModal={showPasswordModal}
      />
      <ActivityIndicator
        style={styles.loading}
        animating={isLoading}
        size={hp('10%')}
        color={C_ACTIVITY_INDICATOR}
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
    backgroundColor: C_BACKGROUND_DARK,
  },
  icon: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    paddingLeft: wp('1%'),
    paddingTop: hp('1%'),
  },
  loading: {
    position: 'absolute',
    top: hp('43%'),
    right: 0,
    left: 0,
    center: 0,
  },
});

export default EditPasswordScreen;
