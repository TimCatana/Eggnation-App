import React, {FC} from 'react';
import {
  S_PP_SECURITY_CONTENT,
  S_PP_SECURITY_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const PPSecurity: FC = () => {
  return (
    <PolicySection
      title={S_PP_SECURITY_TITLE}
      content={S_PP_SECURITY_CONTENT}
    />
  );
};

export default PPSecurity;
