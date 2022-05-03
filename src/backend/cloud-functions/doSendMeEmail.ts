import functions from '@react-native-firebase/functions';
import {CFN_SEND_ME_EMAIL} from '../../constants/Constants';
/**
 * Returns the list of all prizes from the database in the Available Prizes Collection.
 * @throws // TODO
 */
const doSendMeEmail = async (message: string) => {
  await functions().httpsCallable(CFN_SEND_ME_EMAIL)({
    // user id is fetched on server in cloud function
    // user email is fetched on server in cloud function
    message: message,
  });
};

export default doSendMeEmail;
