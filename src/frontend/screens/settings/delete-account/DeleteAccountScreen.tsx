import React, {FC} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  C_ACTIVITY_INDICATOR,
  C_BACKGROUND_DARK,
  C_ICON_LIGHT,
} from '../../../../constants/Colors';
import {PressableIcon} from '../../../common/components';
import DeleteAccountTopView from './components/top-view/DeleteAccountTopView';
import DeleteAccountBottomView from './components/bottom-view/DeleteAccountBottomView';
import useDeleteAccountScreen from './useDeleteAccountScreen';

const DeleteAccountScreen: FC = () => {
  const {
    isLoading,
    password,
    handlePasswordChange,
    isPasswordError,
    navigateBack,
    handleDeleteUserClick,
  } = useDeleteAccountScreen();

  return (
    <View style={styles.body}>
      <DeleteAccountTopView
        isLoading={isLoading}
        password={password}
        handlePasswordChange={handlePasswordChange}
        isPasswordError={isPasswordError}
      />
      <DeleteAccountBottomView
        isLoading={isLoading}
        isPasswordError={isPasswordError}
        handleDeleteUserClick={handleDeleteUserClick}
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
    top: hp('50%'),
    right: 0,
    left: 0,
    center: 0,
  },
});

export default DeleteAccountScreen;
