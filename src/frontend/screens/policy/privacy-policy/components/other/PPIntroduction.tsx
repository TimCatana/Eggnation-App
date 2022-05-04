import React, {FC} from 'react';
import {
  S_PP_INTRODUCTION_CONTENT,
  S_PP_INTRODUCTION_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const PPIntroduction: FC = () => {
  return (
    <PolicySection
      title={S_PP_INTRODUCTION_TITLE}
      content={S_PP_INTRODUCTION_CONTENT}
    />
  );
};

export default PPIntroduction;
