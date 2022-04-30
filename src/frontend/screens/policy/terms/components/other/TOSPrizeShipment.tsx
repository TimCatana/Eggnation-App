import React from 'react';
import {PolicySection} from '../../../../../common/components';

const TOSPrizeShipment = () => {
  return (
    <PolicySection
      title="Prizes"
      content={`Prizes that are won are either shipped (in case of physical goods) or transferred (in case of cash prizes) via a third-party service provider to the user. Should a prize not reach the user due to the package being lost (in case of shipped goods) or an error transferring the prize (in the case of cash prizes) you, the user, agree to waive any legal claim against Eggnation and/or Applicnation concerning the prize. 
      
We will do our best to ensure that the prizes reach their destination, however, sometimes events that are out of our control occur that may cause the prize to be lost. Therefore, the moment a prize is shipped or transferred and is in the hands of a third-party service provider, the prize is considered out of the hands of Eggnation and Applicnation and therefore is not liable to anything that happens to the prize from then on. Should a prize be lost along the way to the user, Eggnation and Applicnation is not required to ship or transfer another prize to the user.`}
    />
  );
};

export default TOSPrizeShipment;
