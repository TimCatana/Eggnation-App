import React, {FC} from 'react';
import {
  S_TS_TERMINATION_CONTENT,
  S_TS_TERMINATION_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const TOSTermination: FC = () => {
  return (
    <PolicySection
      title={S_TS_TERMINATION_TITLE}
      content={S_TS_TERMINATION_CONTENT}
    />
  );
};

export default TOSTermination;
