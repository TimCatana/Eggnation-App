import React, {FC} from 'react';
import {
  S_TS_INTRODUCTION_CONTENT,
  S_TS_INTRODUCTION_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const TOSIntroduction: FC = () => {
  return (
    <PolicySection
      title={S_TS_INTRODUCTION_TITLE}
      content={S_TS_INTRODUCTION_CONTENT}
    />
  );
};

export default TOSIntroduction;
