import React, {FC} from 'react';
import {
  S_PP_CHANGES_CONTENT,
  S_PP_CHANGES_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const PPChanges: FC = () => {
  return (
    <PolicySection title={S_PP_CHANGES_TITLE} content={S_PP_CHANGES_CONTENT} />
  );
};

export default PPChanges;
