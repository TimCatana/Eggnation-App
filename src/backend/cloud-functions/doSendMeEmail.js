import functions from '@react-native-firebase/functions';
/**
 * Returns the list of all prizes from the database in the Available Prizes Collection.
 */
const doSendMeEmail = async (prizeId, country, region, address, postalCode) => {
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
