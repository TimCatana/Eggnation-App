import React, {FC} from 'react';
import {
  S_TS_GOVERNING_LAW_CONTENT,
  S_TS_GOVERNING_LAW_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const TOSGoverningLaw: FC = () => {
  return (
    <PolicySection
      title={S_TS_GOVERNING_LAW_TITLE}
      content={S_TS_GOVERNING_LAW_CONTENT}
    />
  );
};

export default TOSGoverningLaw;
