import React, {FC} from 'react';
import {
  S_PP_TERMINOLOGY_CONTENT,
  S_PP_TERMINOLOGY_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const PPTerminology: FC = () => {
  return (
    <PolicySection
      title={S_PP_TERMINOLOGY_TITLE}
      content={S_PP_TERMINOLOGY_CONTENT}
    />
  );
};

export default PPTerminology;
