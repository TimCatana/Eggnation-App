import React, {FC} from 'react';
import {
  S_TS_FEEDBACK_CONTENT,
  S_TS_FEEDBACK_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const TOSFeedback: FC = () => {
  return (
    <PolicySection
      title={S_TS_FEEDBACK_TITLE}
      content={S_TS_FEEDBACK_CONTENT}
    />
  );
};

export default TOSFeedback;
