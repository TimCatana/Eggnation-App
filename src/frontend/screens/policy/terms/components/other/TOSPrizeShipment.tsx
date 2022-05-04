import React, {FC} from 'react';
import {
  S_TS_PRIZE_SHIPMENT_CONTENT,
  S_TS_PRIZE_SHIPMENT_TITLE,
} from '../../../../../../constants/Strings';
import {PolicySection} from '../../../../../common/components';

const TOSPrizeShipment: FC = () => {
  return (
    <PolicySection
      title={S_TS_PRIZE_SHIPMENT_TITLE}
      content={S_TS_PRIZE_SHIPMENT_CONTENT}
    />
  );
};

export default TOSPrizeShipment;
