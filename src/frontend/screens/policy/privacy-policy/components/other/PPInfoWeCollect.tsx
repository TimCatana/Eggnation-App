import React, {FC} from 'react';
import {
  S_PP_INFO_WE_COLLECT_CONTENT,
  S_PP_INFO_WE_COLLECT_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const PPInfoWeCollect: FC = () => {
  return (
    <PolicySection
      title={S_PP_INFO_WE_COLLECT_TITLE}
      content={S_PP_INFO_WE_COLLECT_CONTENT}
    />
  );
};

export default PPInfoWeCollect;
