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
