import React from 'react';
import {PolicySection} from '../../../../../common/components';

const TOSAccount = () => {
  return (
    <PolicySection
      title="Account"
      content={`You will need to have an account with Eggnation ("Account") in order to use the Service. When you register an account with us, you acknowledge that you are at least 13 years of age and consent to having advertisements displayed to you on our platform. 

You are solely responsible for all activities under your Account. We will not be responsible in any way if your password and/or Account are misappropriated or used by a third party. You therefore agree to keep your password secure and keep your account information up-to-date at all times.
            
Eggnation may occasionally contact you on the email address provided in your Account registration. You will not be able to opt out from such communications, and you shall take the responsibility to ensure that your email address is up-to-date. If you missed any communications due to an inaccurate, outdated, or incomplete email address, Eggnation will not be liable for any losses or damages caused by you missing the communication.`}
    />
  );
};

export default TOSAccount;
