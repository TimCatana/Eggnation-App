import doSendMeEmail from '../../backend/cloud-functions/doSendMeEmail';

/**
 * @returns
 */
const claimPrizeUC = async (
  prizeId: string,
  country: string,
  region: string,
  address: string,
  postalCode: string,
) => {
  try {
    await doSendMeEmail(prizeId, country, region, address, postalCode);
  } catch (e) {
    console.log(e);
  }
};

export default claimPrizeUC;
