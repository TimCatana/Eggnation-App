import React, {FC} from 'react';
import {
  S_TS_APPLICATION_TERMS_CONTENT,
  S_TS_APPLICATION_TERMS_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const TOSApplicationTerms: FC = () => {
  return (
    <PolicySection
      title={S_TS_APPLICATION_TERMS_TITLE}
      content={S_TS_APPLICATION_TERMS_CONTENT}
    />
  );
};

export default TOSApplicationTerms;
