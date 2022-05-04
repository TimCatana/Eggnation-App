import React, {FC} from 'react';
import {
  S_TS_PLATFORM_CHANGES_CONTENT,
  S_TS_PLATFORM_CHANGES_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const TOSPlatformChanges: FC = () => {
  return (
    <PolicySection
      title={S_TS_PLATFORM_CHANGES_TITLE}
      content={S_TS_PLATFORM_CHANGES_CONTENT}
    />
  );
};

export default TOSPlatformChanges;
