import React, {FC} from 'react';
import {
  S_PP_LOGGED_DATA_CONTENT,
  S_PP_LOGGED_DATA_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const PPLoggedData: FC = () => {
  return (
    <PolicySection
      title={S_PP_LOGGED_DATA_TITLE}
      content={S_PP_LOGGED_DATA_CONTENT}
    />
  );
};

export default PPLoggedData;
