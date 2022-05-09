import React, {FC} from 'react';
import {
  S_TS_PERSONAL_INFO_CONTENT,
  S_TS_PERSONAL_INFO_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const TOSPersonalInfo: FC = () => {
  return (
    <PolicySection
      title={S_TS_PERSONAL_INFO_TITLE}
      content={S_TS_PERSONAL_INFO_CONTENT}
    />
  );
};

export default TOSPersonalInfo;
