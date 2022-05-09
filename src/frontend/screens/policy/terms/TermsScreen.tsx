import React, {FC} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {C_BACKGROUND_DARK, C_ICON_LIGHT} from '../../../../constants/Colors';
import {PressableIcon} from '../../../common/components';
import TOSIntroduction from './components/other/TOSIntroduction';
import TOSApplicationTerms from './components/other/TOSApplicationTerms';
import TOSGeneralConditions from './components/other/TOSGeneralConditions';
import TOSAccount from './components/other/TOSAccount';
import TOSConsentToAds from './components/other/TOSConsentToAds';
import TOSPrizeShipment from './components/other/TOSPrizeShipment';
import TOSPresentedInformation from './components/other/TOSPresentedInformation';
import TOSPlatformChanges from './components/other/TOSServiceChanges';
import TOSProductsOrServices from './components/other/TOSProductsOrServices';
import TOSOptionalTools from './components/other/TOSOptionalTools';
import TOSThirdPartyLinks from './components/other/TOSThirdPartyLinks';
import TOSComments from './components/other/TOSComments';
import TOSPersonalInfo from './components/other/TOSPersonalInfo';
import TOSErrors from './components/other/TOSErrors';
import TOSProhibitedUses from './components/other/TOSProhibitedUses';
import TOSDisclaimer from './components/other/TOSDisclaimer';
import TOSIndemnification from './components/other/TOSIndemnification';
import TOSSeverability from './components/other/TOSSeverability';
import TOSTermination from './components/other/TOSTermination';
import TOSEntireAgreement from './components/other/TOSEntireAgreement';
import TOSGoverningLaw from './components/other/TOSGoverningLaw';
import TOSChanges from './components/other/TOSChanges';

import useTermsScreen from './useTermsScreen';

const TermsScreen: FC = () => {
  const {navigateBack} = useTermsScreen();

  return (
    <ScrollView style={styles.body} contentContainerStyle={styles.bodyContent}>
      <PressableIcon
        icon={'arrow-left'}
        onPress={navigateBack}
        iconSize={hp('3.6%')}
        iconColor={C_ICON_LIGHT}
        viewStyle={styles.icon}
        iconStyle={{}}
      />
      <TOSIntroduction />
      <TOSApplicationTerms />
      <TOSGeneralConditions />
      <TOSAccount />
      <TOSConsentToAds />
      <TOSPrizeShipment />
      <TOSPresentedInformation />
      <TOSPlatformChanges />
      <TOSProductsOrServices />
      <TOSOptionalTools />
      <TOSThirdPartyLinks />
      <TOSComments />
      <TOSPersonalInfo />
      <TOSErrors />
      <TOSProhibitedUses />
      <TOSDisclaimer />
      <TOSIndemnification />
      <TOSSeverability />
      <TOSTermination />
      <TOSEntireAgreement />
      <TOSGoverningLaw />
      <TOSChanges />
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
export default TermsScreen;
