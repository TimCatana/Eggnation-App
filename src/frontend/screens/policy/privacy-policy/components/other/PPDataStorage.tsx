import React, {FC} from 'react';
import {
  S_PP_DATA_STORAGE_CONTENT,
  S_PP_DATA_STORAGE_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const PPDataStorage: FC = () => {
  return (
    <PolicySection
      title={S_PP_DATA_STORAGE_TITLE}
      content={S_PP_DATA_STORAGE_CONTENT}
    />
  );
};

export default PPDataStorage;
