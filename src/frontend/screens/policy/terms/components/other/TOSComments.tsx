import React, {FC} from 'react';
import {
  S_TS_COMMENTS_CONTENT,
  S_TS_COMMENTS_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const TOSComments: FC = () => {
  return (
    <PolicySection
      title={S_TS_COMMENTS_TITLE}
      content={S_TS_COMMENTS_CONTENT}
    />
  );
};

export default TOSComments;
