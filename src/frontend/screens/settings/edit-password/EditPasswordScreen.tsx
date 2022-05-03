import React, {FC} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  C_ICON_LIGHT,
  C_BACKGROUND_DARK,
  C_ACTIVITY_INDICATOR,
} from '../../../../constants/Colors';
import {PressableIcon} from '../../../common/components';
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
    navigateBack,
    updatePasswordAndNavBackIfSuccess,
  } = useEditPasswordScreen();

  return (
    <View style={styles.body}>
      <UpdatePasswordScreenTopView
        isLoading={isLoading}
        newPassword={newPassword}
        handleNewPasswordChange={handleNewPasswordChange}
        isNewPasswordError={isNewPasswordError}
        confirmPassword={confirmPassword}
        handleConfirmPasswordChange={handleConfirmPasswordChange}
        isConfirmPasswordError={isConfirmPasswordError}
        currentPassword={currentPassword}
        handleCurrentPasswordChange={handleCurrentPasswordChange}
        isCurrentPasswordError={isCurrentPasswordError}
      />
      <UpdatePasswordScreenBottomView
        isLoading={isLoading}
        isPasswordError={isNewPasswordError}
        isConfirmPasswordError={isConfirmPasswordError}
        isCurrentPasswordError={isCurrentPasswordError}
        updatePasswordAndNavBackIfSuccess={updatePasswordAndNavBackIfSuccess}
      />
      <PressableIcon
        icon={'arrow-left'}
        onPress={navigateBack}
        iconSize={hp('3.6%')}
        iconColor={C_ICON_LIGHT}
        viewStyle={styles.icon}
        iconStyle={{}}
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
    position: 'absolute',
    left: hp('0.6%'),
    top: hp('0.6%'),
  },
  loading: {
    position: 'absolute',
    top: hp('55%'),
    right: 0,
    left: 0,
    center: 0,
  },
});

export default EditPasswordScreen;
