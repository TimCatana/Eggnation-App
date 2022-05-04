import React, {FC} from 'react';
import {
  S_PP_HOW_WE_SHARE_INFO_CONTENT,
  S_PP_HOW_WE_SHARE_INFO_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const PPHowWeShareInfo: FC = () => {
  return (
    <PolicySection
      title={S_PP_HOW_WE_SHARE_INFO_TITLE}
      content={S_PP_HOW_WE_SHARE_INFO_CONTENT}
    />
  );
};

export default PPHowWeShareInfo;
