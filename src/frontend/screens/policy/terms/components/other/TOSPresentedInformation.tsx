import React, {FC} from 'react';
import {
  S_TS_PRESENTED_INFORMATION_CONTENT,
  S_TS_PRESENTED_INFORMATION_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const TOSPresentedInformation: FC = () => {
  return (
    <PolicySection
      title={S_TS_PRESENTED_INFORMATION_TITLE}
      content={S_TS_PRESENTED_INFORMATION_CONTENT}
    />
  );
};

export default TOSPresentedInformation;
