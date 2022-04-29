import React from 'react';
import {PolicySection} from '../../../../../common/components';

const PPServiceProviders = () => {
  return (
    <PolicySection
      title="Service Providers"
      content={`We may employ third-party companies and individuals due to the following reasons: (a) To facilitate our Service; (b) To provide the Service on our behalf; (c) To perform Service-related services; or (d) To assist us in analyzing how our Service is used.

We want to inform users of this Service that these third parties have access to their Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.

If you wish to learn more about how these third-party providers use your information, please head over to their Privacy Policies:

https://policies.google.com/privacy
https://firebase.google.com/policies/analytics
https://firebase.google.com/support/privacy/`}
/>
  );
};

export default PPServiceProviders;
