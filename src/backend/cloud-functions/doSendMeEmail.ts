import functions from '@react-native-firebase/functions';
/**
 * Returns the list of all prizes from the database in the Available Prizes Collection.
 */
const doSendMeEmail = async (
  prizeId: string,
  country: string,
  region: string,
  address: string,
  postalCode: string,
) => {
  const result = await functions().httpsCallable('sendMeEmail')({
    // user id is fetched on server in cloud function
    // user email is fetched on server in cloud function
    prizeId: prizeId,
    country: country,
    region: region,
    address: address,
    postalCode: postalCode,
  });

  console.log(`send me email: ${result}`);
};

export default doSendMeEmail;