import React, {FC} from 'react';
import {
  S_TS_SEVERABILITY_CONTENT,
  S_TS_SEVERABILITY_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const TOSSeverability: FC = () => {
  return (
    <PolicySection
      title={S_TS_SEVERABILITY_TITLE}
      content={S_TS_SEVERABILITY_CONTENT}
    />
  );
};

export default TOSSeverability;
