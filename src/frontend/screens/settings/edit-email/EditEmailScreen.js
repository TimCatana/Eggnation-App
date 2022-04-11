import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {C_BACKGROUND_DARK, C_ICON_LIGHT} from '../../../theme/Colors';
import TopLeftCornerIcon from '../../../common/components/TopLeftCornerIcon';
import UpdateEmailScreenTopView from './components/top-view/UpdateEmailScreenTopView';
import UpdateEmailScreenBottomView from './components/bottom-view/UpdateEmailScreenBottomView';
import PasswordModal from '../../../common/components/PasswordModal';

import useEditEmailScreen from './useEditEmailScreen';

const EditEmailScreen = ({navigation}) => {
  const {
    isLoading,
    newEmail,
    handleNewEmailChange,
    isNewEmailError,
    password,
    handlePasswordChange,
    isPasswordError,
    isPasswordModalShowing,
    showPasswordModal,
    hidePasswordModal,
    handleUpdateEmailClick,
  } = useEditEmailScreen();

  /** Navigates back to the login screen if no process is currently running. */
  const navigateBack = () => {
    if (!isLoading) {
      navigation.pop();
    }
  };

  return (
    <View style={styles.body}>
      <PasswordModal
        isLoading={isLoading}
        password={password}
        isPasswordError={isPasswordError}
        handlePasswordChange={handlePasswordChange}
        isModalVisible={isPasswordModalShowing}
        hidePasswordModal={hidePasswordModal}
        handleOnConfirm={handleUpdateEmailClick}
      />
      <TopLeftCornerIcon
        icon={'arrow-left'}
        onPress={navigateBack}
        iconSize={hp('3.5%')}
        iconColor={C_ICON_LIGHT}
        viewStyle={styles.icon}
        iconStyle={{}}
      />
      <UpdateEmailScreenTopView
        isLoading={isLoading}
        newEmail={newEmail}
        handleNewEmailChange={handleNewEmailChange}
        isNewEmailError={isNewEmailError}
      />
      <UpdateEmailScreenBottomView
        isLoading={isLoading}
        isNewEmailError={isNewEmailError}
        handleShowPasswordModal={showPasswordModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: hp('2.5%'),
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
});

export default EditEmailScreen;
