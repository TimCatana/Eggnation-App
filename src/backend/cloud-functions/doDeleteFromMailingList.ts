import functions from '@react-native-firebase/functions';
/**
 * Updates the user email.
 * The reason I use a cloud function is because if I update it on the client, the user
 * gets an email saying their email was changed with the option of changing it back
 */
const doDeleteFromMailingList = async (email: string) => {
  const result = await functions().httpsCallable('deleteFromMailingList')({
    email: email,
  });
  console.log(`delete from mailing list: ${result}`);
};

export default doDeleteFromMailingList;
