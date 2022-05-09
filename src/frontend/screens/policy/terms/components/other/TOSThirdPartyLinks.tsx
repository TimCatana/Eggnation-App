import React, {FC} from 'react';
import {
  S_TS_THIRD_PARTY_LINKS_CONTENT,
  S_TS_THIRD_PARTY_LINKS_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const TOSThirdPartyLinks: FC = () => {
  return (
    <PolicySection
      title={S_TS_THIRD_PARTY_LINKS_TITLE}
      content={S_TS_THIRD_PARTY_LINKS_CONTENT}
    />
  );
};

export default TOSThirdPartyLinks;
