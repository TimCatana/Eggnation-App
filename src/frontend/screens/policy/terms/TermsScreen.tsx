import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {C_BACKGROUND_DARK, C_ICON_LIGHT} from '../../../theme/Colors';
import TOSIntroduction from './components/other/TOSIntroduction';
import TOSEligibility from './components/other/TOSEligibility';
import TOSAccount from './components/other/TOSAccount';
import TOSLicense from './components/other/TOSLicense';
import TOSProhibitedActivities from './components/other/TOSProhibitedActivities';
import TOSFeedback from './components/other/TOSFeedback';
import TOSPrizeShipment from './components/other/TOSPrizeShipment';
import TOSDisclaimer from './components/other/TOSDisclaimer';
import TOSIndemnification from './components/other/TOSIndemnification';
import TOSPlatformChanges from './components/other/TOSPlatformChanges';
import TOSConsentToAds from './components/other/TOSConsentToAds';
import TOSChanges from './components/other/TOSChanges';
import useTermsScreen from './useTermsScreen';
import {PressableIcon} from '../../../common/components';

const TermsScreen: FC = () => {
  const {navigateBack} = useTermsScreen();

  return (
    <ScrollView
      style={styles.body}
      contentContainerStyle={{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}>
      <PressableIcon
        icon={'arrow-left'}
        onPress={navigateBack}
        iconSize={hp('3.5%')}
        iconColor={C_ICON_LIGHT}
        viewStyle={styles.icon}
        iconStyle={{}}
      />
      <TOSIntroduction />
      <TOSEligibility />
      <TOSAccount />
      <TOSLicense />
      <TOSProhibitedActivities />
      <TOSFeedback />
      <TOSPrizeShipment />
      <TOSDisclaimer />
      <TOSIndemnification />
      <TOSPlatformChanges />
      <TOSConsentToAds />
      <TOSChanges />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: C_BACKGROUND_DARK,
  },
  icon: {
    marginLeft: hp('0.5%'),
    marginTop: hp('0.5%'),
    marginBottom: hp('1%'),
  },
});
export default TermsScreen;
