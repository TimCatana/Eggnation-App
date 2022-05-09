import React, {FC} from 'react';
import {
  S_TS_SERVICE_CHANGES_CONTENT,
  S_TS_SERVICE_CHANGES_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const TOSServiceChanges: FC = () => {
  return (
    <PolicySection
      title={S_TS_SERVICE_CHANGES_TITLE}
      content={S_TS_SERVICE_CHANGES_CONTENT}
    />
  );
};

export default TOSServiceChanges;
