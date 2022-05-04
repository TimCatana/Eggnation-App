import React, {FC} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  C_ACTIVITY_INDICATOR,
  C_BACKGROUND_DARK,
  C_ICON_LIGHT,
} from '../../../../constants/Colors';
import {PressableIcon} from '../../../common/components';
import UpdateEmailScreenTopView from './components/top-view/UpdateEmailScreenTopView';
import UpdateEmailScreenBottomView from './components/bottom-view/UpdateEmailScreenBottomView';
import useEditEmailScreen from './useEditEmailScreen';

const EditEmailScreen: FC = () => {
  const {
    isLoading,
    newEmail,
    handleNewEmailChange,
    isNewEmailError,
    password,
    handlePasswordChange,
    isPasswordError,
    navigateBack,
    updateEmailAndNavBackIfSuccess,
  } = useEditEmailScreen();

  return (
    <View style={styles.body}>
      <UpdateEmailScreenTopView
        isLoading={isLoading}
        newEmail={newEmail}
        handleNewEmailChange={handleNewEmailChange}
        isNewEmailError={isNewEmailError}
        password={password}
        handlePasswordChange={handlePasswordChange}
        isPasswordError={isPasswordError}
      />
      <UpdateEmailScreenBottomView
        isLoading={isLoading}
        isNewEmailError={isNewEmailError}
        isPasswordError={isPasswordError}
        updateEmailAndNavBackIfSuccess={updateEmailAndNavBackIfSuccess}
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: hp('2.5%'),
    backgroundColor: C_BACKGROUND_DARK,
  },
  icon: {
    position: 'absolute',
    left: hp('0.6%'),
    top: hp('0.6%'),
  },
  loading: {
    position: 'absolute',
    top: hp('53%'),
    right: 0,
    left: 0,
    center: 0,
  },
});

export default EditEmailScreen;
