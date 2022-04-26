import functions from '@react-native-firebase/functions';
import {CFN_UPDATE_USER_EMAIL} from '../../constants/Constants';
/**
 * Updates the user email.
 * The reason I use a cloud function is because if I update it on the client, the user
 * gets an email saying their email was changed with the option of changing it back
 * @throws // TODO
 */
const doUpdateUserEmailByCloudFunction = async (email: string) => {
  await functions().httpsCallable(CFN_UPDATE_USER_EMAIL)({
    email: email,
  });
};

export default doUpdateUserEmailByCloudFunction;
