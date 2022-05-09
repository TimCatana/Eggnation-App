import React, {FC} from 'react';
import {
  S_TS_GENERAL_CONDITIONS_CONTENT,
  S_TS_GENERAL_CONDITIONS_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const TOSGeneralConditions: FC = () => {
  return (
    <PolicySection
      title={S_TS_GENERAL_CONDITIONS_TITLE}
      content={S_TS_GENERAL_CONDITIONS_CONTENT}
    />
  );
};

export default TOSGeneralConditions;
