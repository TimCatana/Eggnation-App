import functions from '@react-native-firebase/functions';
import {CFN_DELETE_FROM_MAILING_LIST} from '../../constants/Constants';

/**
 * Updates the user email.
 * The reason I use a cloud function is because if I update it on the client, the user
 * gets an email saying their email was changed with the option of changing it back
 *  @throws // TODO
 */
const doDeleteFromMailingList = async (email: string) => {
  await functions().httpsCallable(CFN_DELETE_FROM_MAILING_LIST)({
    email: email,
  });
};

export default doDeleteFromMailingList;
