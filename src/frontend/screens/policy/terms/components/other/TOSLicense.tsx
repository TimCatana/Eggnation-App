import React, {FC} from 'react';
import {
  S_TS_LICENSE_CONTENT,
  S_TS_LICENSE_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const TOSLicense: FC = () => {
  return (
    <PolicySection title={S_TS_LICENSE_TITLE} content={S_TS_LICENSE_CONTENT} />
  );
};

export default TOSLicense;
