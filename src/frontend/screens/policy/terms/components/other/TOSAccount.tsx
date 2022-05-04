import React, {FC} from 'react';
import {
  S_TS_ACCOUNT_CONTENT,
  S_TS_ACCOUNT_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const TOSAccount: FC = () => {
  return (
    <PolicySection title={S_TS_ACCOUNT_TITLE} content={S_TS_ACCOUNT_CONTENT} />
  );
};

export default TOSAccount;
