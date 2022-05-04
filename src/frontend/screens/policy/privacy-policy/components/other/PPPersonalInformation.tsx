import React, {FC} from 'react';
import {
  S_PP_PERSONAL_INFORMATION_CONTENT,
  S_PP_PERSONAL_INFORMATION_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const PPPersonalInformation: FC = () => {
  return (
    <PolicySection
      title={S_PP_PERSONAL_INFORMATION_TITLE}
      content={S_PP_PERSONAL_INFORMATION_CONTENT}
    />
  );
};

export default PPPersonalInformation;
