import React, {FC} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {C_BACKGROUND_DARK, C_ICON_LIGHT} from '../../../../constants/Colors';
import {PressableIcon} from '../../../common/components';
import PPIntroduction from './components/other/PPIntroduction';
import PPTerminology from './components/other/PPTerminology';
import PPPersonalInformation from './components/other/PPPersonalInformation';
import PPInfoWeCollect from './components/other/PPInfoWeCollect';
import PPHowWeUseInfo from './components/other/PPHowWeUseInfo';
import PPHowWeShareInfo from './components/other/PPHowWeShareInfo';
import PPServiceProviders from './components/other/PPServiceProviders';
import PPDataStorage from './components/other/PPDataStorage';
import PPLoggedData from './components/other/PPLoggedData';
import PPSecurity from './components/other/PPSecurity';
import PPLinksToOtherSites from './components/other/PPLinksToOtherSites';
import PPCookies from './components/other/PPCookies';
import PPInfoRetention from './components/other/PPInfoRetenrion';
import PPChildrenPrivacy from './components/other/PPChildrenPrivacy';
import PPChanges from './components/other/PPChanges';
import usePrivacyPolicyScreen from './usePrivacyPolicyScreen';

const PrivacyPolicyScreen: FC = () => {
  const {navigateBack} = usePrivacyPolicyScreen();

  return (
    <ScrollView
      style={styles.body}
      contentContainerStyle={styles.bodyContent}>
      <PressableIcon
        icon={'arrow-left'}
        onPress={navigateBack}
        iconSize={hp('3.6%')}
        iconColor={C_ICON_LIGHT}
        viewStyle={styles.icon}
        iconStyle={{}}
      />
      <PPIntroduction />
      <PPTerminology />
      <PPPersonalInformation />
      <PPInfoWeCollect />
      <PPHowWeUseInfo />
      <PPHowWeShareInfo />
      <PPServiceProviders />
      <PPDataStorage />
      <PPLoggedData />
      <PPSecurity />
      <PPLinksToOtherSites />
      <PPCookies />
      <PPInfoRetention />
      <PPChildrenPrivacy />
      <PPChanges />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: C_BACKGROUND_DARK,
  },
  bodyContent: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  icon: {
    paddingLeft: hp('0.6%'),
    paddingTop: hp('0.6%'),
    marginBottom: hp('1%'),
  },
});

export default PrivacyPolicyScreen;
