import functions from '@react-native-firebase/functions';
/**
 * Updates the user email.
 * The reason I use a cloud function is because if I update it on the client, the user
 * gets an email saying their email was changed with the option of changing it back
 */
const doUpdateUserEmailByCloudFunction = async () => {
  const result = await functions().httpsCallable('updateUserEmail')({});
  console.log(`send me email: ${result}`);
};

export default doUpdateUserEmailByCloudFunction;
