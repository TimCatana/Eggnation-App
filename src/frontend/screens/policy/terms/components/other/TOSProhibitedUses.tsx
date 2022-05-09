import React, {FC} from 'react';
import {
  S_TS_PROHIBITED_USES_CONTENT,
  S_TS_PROHIBITED_USES_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const TOSProhibitedUses: FC = () => {
  return (
    <PolicySection
      title={S_TS_PROHIBITED_USES_TITLE}
      content={S_TS_PROHIBITED_USES_CONTENT}
    />
  );
};

export default TOSProhibitedUses;
