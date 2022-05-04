import React, {FC} from 'react';
import {
  S_PP_LINKS_TO_OTHER_SITES_CONTENT,
  S_PP_LINKS_TO_OTHER_SITES_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const PPLinksToOtherSites: FC = () => {
  return (
    <PolicySection
      title={S_PP_LINKS_TO_OTHER_SITES_TITLE}
      content={S_PP_LINKS_TO_OTHER_SITES_CONTENT}
    />
  );
};

export default PPLinksToOtherSites;
