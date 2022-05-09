import React, {FC} from 'react';
import {
  S_TS_ERRORS_CONTENT,
  S_TS_ERRORS_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const TOSErrors: FC = () => {
  return (
    <PolicySection title={S_TS_ERRORS_TITLE} content={S_TS_ERRORS_CONTENT} />
  );
};

export default TOSErrors;
