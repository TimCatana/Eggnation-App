const functions = require("firebase-functions");
let SibApiV3Sdk = require("sib-api-v3-sdk");

/**
 * Adds a user to the mailing list if they want to subscribe to the mailing list.
 * The mailing list will be used to market eggnationshop.com.
 */
exports.addToMailingList = functions.https.onCall(async (data, context) => {
  let apiInstance = new SibApiV3Sdk.ContactsApi();
  let createContact = new SibApiV3Sdk.CreateContact();

  createContact.email = data.email;
  createContact.listIds = [2];

  try {
    const result = await apiInstance.createContact(createContact);
    console.log(
      `SIB - createContact call successful --> ${JSON.stringify(result)}`
    );
    return true;
  } catch (e) {
    console.error(`SIB - createContact call failed --> ${err}`);
    return false;
  }
});

