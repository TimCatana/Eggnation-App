import React, {FC} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  C_ACTIVITY_INDICATOR,
  C_BACKGROUND_DARK,
  C_ICON_LIGHT,
} from '../../../theme/Colors';
import {PressableIcon} from '../../../common/components';
import SettingsScreenTopView from './components/top-view/SettingsScreenTopView';
import SettingsScreenCenterView from './components/center-view/SettingsScreenCenterView';
import SettingsScreenBottomView from './components/bottom-view/SettingsScreenBottomView';

import useSettingsScreen from './useSettingsScreen';

// TODO - there's something wrong with the way flex is working for the sections, I need to fix it later on
const SettingsScreen: FC = () => {
  const {
    isInitialized,
    isLoading,
    email,
    language,
    logoutUser,
    navigateBack,
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
      <PressableIcon
        icon={'arrow-left'}
        onPress={navigateBack}
        iconSize={hp('3.5%')}
        iconColor={C_ICON_LIGHT}
        viewStyle={styles.icon}
        iconStyle={{}}
      />
      <SettingsScreenTopView isLoading={isLoading} />
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
  },
  icon: {
    flex: 0.5,
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

export default SettingsScreen;
