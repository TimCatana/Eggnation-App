import React, {FC} from 'react';
import {
  S_PP_CONTACT_US_CONTENT,
  S_PP_CONTACT_US_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const PPContactUs: FC = () => {
  return (
    <PolicySection
      title={S_PP_CONTACT_US_TITLE}
      content={S_PP_CONTACT_US_CONTENT}
    />
  );
};

export default PPContactUs;
