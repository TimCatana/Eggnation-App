import React, {FC} from 'react';
import {
  S_PP_SERVICE_PROVIDERS_CONETENT,
  S_PP_SERVICE_PROVIDERS_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const PPServiceProviders: FC = () => {
  return (
    <PolicySection
      title={S_PP_SERVICE_PROVIDERS_TITLE}
      content={S_PP_SERVICE_PROVIDERS_CONETENT}
    />
  );
};

export default PPServiceProviders;
