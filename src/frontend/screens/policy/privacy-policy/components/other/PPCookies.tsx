import React, {FC} from 'react';
import {
  S_PP_COOKIES_CONTENT,
  S_PP_COOKIES_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const PPCookies: FC = () => {
  return (
    <PolicySection title={S_PP_COOKIES_TITLE} content={S_PP_COOKIES_CONTENT} />
  );
};

export default PPCookies;
