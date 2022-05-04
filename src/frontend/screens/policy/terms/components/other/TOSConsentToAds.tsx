import React, {FC} from 'react';
import {
  S_TS_CONSENT_TO_ADS_CONTENT,
  S_TS_CONSENT_TO_ADS_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const TOSConsentToAds: FC = () => {
  return (
    <PolicySection
      title={S_TS_CONSENT_TO_ADS_TITLE}
      content={S_TS_CONSENT_TO_ADS_CONTENT}
    />
  );
};

export default TOSConsentToAds;
