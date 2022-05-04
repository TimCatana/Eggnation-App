import React, {FC} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  C_ACTIVITY_INDICATOR,
  C_BACKGROUND_DARK,
  C_ICON_LIGHT,
} from '../../../../constants/Colors';
import {PressableIcon} from '../../../common/components';
import SettingsScreenTopView from './components/top-view/SettingsScreenTopView';
import SettingsScreenCenterView from './components/center-view/SettingsScreenCenterView';
import SettingsScreenBottomView from './components/bottom-view/SettingsScreenBottomView';
import useSettingsScreen from './useSettingsScreen';

const SettingsScreen: FC = () => {
  const {
    isInitialized,
    isLoading,
    email,
    language,
    logoutUser,
    navigateBack,
    navToEggnationFacebook,
    navToEggnationInstagram,
    navToEditEmailScreen,
    navToEditPasswordScreen,
    navToDeleteAccountScreenScreen,
    navToEggnationShop,
    navToContactUs,
    navToPrivacyPolicyScreen,
    navToTermsScreen,
  } = useSettingsScreen();

  if (!isInitialized) return null;

  return (
    <View style={styles.body}>
      <SettingsScreenTopView
        isLoading={isLoading}
        navToEggnationFacebook={navToEggnationFacebook}
        navToEggnationInstagram={navToEggnationInstagram}
      />
      <SettingsScreenCenterView
        email={email}
        language={language}
        navToEditEmailScreen={navToEditEmailScreen}
        navToEditPasswordScreen={navToEditPasswordScreen}
        navToEggnationShop={navToEggnationShop}
        navToContactUs={navToContactUs}
        navToPrivacyPolicyScreen={navToPrivacyPolicyScreen}
        navToTermsScreen={navToTermsScreen}
      />
      <SettingsScreenBottomView
        isLoading={isLoading}
        logoutUser={logoutUser}
        navToDeleteAccountScreenScreen={navToDeleteAccountScreenScreen}
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
    backgroundColor: C_BACKGROUND_DARK,
    paddingTop: hp('5%'),
  },
  icon: {
    position: 'absolute',
    left: hp('0.6%'),
    top: hp('0.6%'),
  },
  loading: {
    position: 'absolute',
    top: hp('43%'),
    right: 0,
    left: 0,
    center: 0,
  },
});

export default SettingsScreen;
