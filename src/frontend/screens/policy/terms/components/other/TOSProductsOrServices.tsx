import React, {FC} from 'react';
import {
  S_TS_PRODUCTS_OR_SERVICES_CONTENT,
  S_TS_PRODUCTS_OR_SERVICES_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const TOSProductsOrServices: FC = () => {
  return (
    <PolicySection
      title={S_TS_PRODUCTS_OR_SERVICES_TITLE}
      content={S_TS_PRODUCTS_OR_SERVICES_CONTENT}
    />
  );
};

export default TOSProductsOrServices;
