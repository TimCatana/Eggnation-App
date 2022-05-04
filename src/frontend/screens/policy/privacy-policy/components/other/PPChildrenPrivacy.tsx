import React, {FC} from 'react';
import {
  S_PP_CHILDRENS_PRIVACY_CONTENT,
  S_PP_CHILDRENS_PRIVACY_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const PPChildrenPrivacy: FC = () => {
  return (
    <PolicySection
      title={S_PP_CHILDRENS_PRIVACY_TITLE}
      content={S_PP_CHILDRENS_PRIVACY_CONTENT}
    />
  );
};

export default PPChildrenPrivacy;
