import React, {FC} from 'react';
import {
  S_TS_ENTIRE_AGREEMENT_CONTENT,
  S_TS_ENTIRE_AGREEMENT_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const TOSEntireAgreement: FC = () => {
  return (
    <PolicySection
      title={S_TS_ENTIRE_AGREEMENT_TITLE}
      content={S_TS_ENTIRE_AGREEMENT_CONTENT}
    />
  );
};

export default TOSEntireAgreement;
