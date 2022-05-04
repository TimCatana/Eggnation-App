import React, {FC} from 'react';
import {
  S_PP_INFO_RETENTION_CONTENT,
  S_PP_INFO_RETENTION_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const PPInfoRetention: FC = () => {
  return (
    <PolicySection
      title={S_PP_INFO_RETENTION_TITLE}
      content={S_PP_INFO_RETENTION_CONTENT}
    />
  );
};

export default PPInfoRetention;
