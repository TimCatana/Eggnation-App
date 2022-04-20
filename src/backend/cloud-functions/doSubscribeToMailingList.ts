import functions from '@react-native-firebase/functions';
/**
 * Updates the user email.
 * The reason I use a cloud function is because if I update it on the client, the user
 * gets an email saying their email was changed with the option of changing it back
 */
const doSubscribeToMailingList = async (email: string) => {
  console.log("subbing to mailing list")
  const result = await functions().httpsCallable('addToMailingList')({
    email: email,
  });
  console.log(`Subscribe to mailing list: ${result}`);
};

export default doSubscribeToMailingList;
