import doSendMeEmail from '../../backend/cloud-functions/doSendMeEmail';

/**
 * @returns
 */
const claimPrizeUC = async (prizeId, country, region, address, postalCode) => {
  try {
    await doSendMeEmail(prizeId, country, region, address, postalCode);
  } catch (e) {
    console.log(e);
  }
};

export default claimPrizeUC;
