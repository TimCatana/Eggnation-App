import React, {FC} from 'react';
import {
  S_TS_OPTIONAL_TOOLS_CONTENT,
  S_TS_OPTIONAL_TOOLS_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const TOSOptionalTools: FC = () => {
  return (
    <PolicySection
      title={S_TS_OPTIONAL_TOOLS_TITLE}
      content={S_TS_OPTIONAL_TOOLS_CONTENT}
    />
  );
};

export default TOSOptionalTools;
