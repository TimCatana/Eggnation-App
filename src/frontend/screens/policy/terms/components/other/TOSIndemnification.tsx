import React, {FC} from 'react';
import {
  S_TS_INDEMNIFICATION_CONTENT,
  S_TS_INDEMNIFICATION_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const TOSIndemnification: FC = () => {
  return (
    <PolicySection
      title={S_TS_INDEMNIFICATION_TITLE}
      content={S_TS_INDEMNIFICATION_CONTENT}
    />
  );
};

export default TOSIndemnification;
