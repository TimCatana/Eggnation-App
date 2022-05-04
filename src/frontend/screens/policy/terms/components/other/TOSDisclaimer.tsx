import React, {FC} from 'react';
import {
  S_TS_DISCLAIMER_CONTENT,
  S_TS_DISCLAIMER_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const TOSDisclaimer: FC = () => {
  return (
    <PolicySection
      title={S_TS_DISCLAIMER_TITLE}
      content={S_TS_DISCLAIMER_CONTENT}
    />
  );
};

export default TOSDisclaimer;
