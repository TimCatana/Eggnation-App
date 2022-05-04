import React, {FC} from 'react';
import {
  S_TS_PROHIBITED_ACTIVITIES_CONTENT,
  S_TS_PROHIBITED_ACTIVITIES_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const TOSProhibitedActivities: FC = () => {
  return (
    <PolicySection
      title={S_TS_PROHIBITED_ACTIVITIES_TITLE}
      content={S_TS_PROHIBITED_ACTIVITIES_CONTENT}
    />
  );
};

export default TOSProhibitedActivities;
