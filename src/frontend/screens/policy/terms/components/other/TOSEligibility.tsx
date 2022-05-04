import React, {FC} from 'react';
import {
  S_TS_ELIGIBILITY_CONTENT,
  S_TS_ELIGIBILITY_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const TOSEligibility: FC = () => {
  return (
    <PolicySection
      title={S_TS_ELIGIBILITY_TITLE}
      content={S_TS_ELIGIBILITY_CONTENT}
    />
  );
};

export default TOSEligibility;
