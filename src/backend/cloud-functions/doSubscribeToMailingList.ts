import functions from '@react-native-firebase/functions';
import {CFN_ADD_TO_EMAIL_LIST} from '../../constants/Constants';
/**
 * Updates the user email.
 * The reason I use a cloud function is because if I update it on the client, the user
 * gets an email saying their email was changed with the option of changing it back
 * @throws // TODO 
 */
const doSubscribeToMailingList = async (email: string) => {
  await functions().httpsCallable(CFN_ADD_TO_EMAIL_LIST)({
    email: email,
  });
};

export default doSubscribeToMailingList;
