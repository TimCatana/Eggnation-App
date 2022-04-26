import functions from '@react-native-firebase/functions';
import {CFN_SEND_ME_EMAIL} from '../../constants/Constants';
/**
 * Returns the list of all prizes from the database in the Available Prizes Collection.
 * @throws // TODO
 */
const doSendMeEmail = async (
  prizeId: string,
  country: string,
  region: string,
  address: string,
  postalCode: string,
) => {
  await functions().httpsCallable(CFN_SEND_ME_EMAIL)({
    // user id is fetched on server in cloud function
    // user email is fetched on server in cloud function
    prizeId: prizeId,
    country: country,
    region: region,
    address: address,
    postalCode: postalCode,
  });
};

export default doSendMeEmail;
