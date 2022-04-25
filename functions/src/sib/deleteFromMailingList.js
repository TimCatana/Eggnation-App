const functions = require("firebase-functions");
let SibApiV3Sdk = require("sib-api-v3-sdk");

/**
 * Adds a user to the mailing list if they want to subscribe to the mailing list.
 * The mailing list will be used to market eggnationshop.com.
 */
exports.deleteFromMailingList = functions.https.onCall(
  async (data, context) => {
    let apiInstance = new SibApiV3Sdk.ContactsApi();

    try {
      await apiInstance.deleteContact(data.email);
      console.log(`SIB - deleteContact call successful`);
      return true;
    } catch (e) {
      console.error(`SIB - deleteContact call failed --> ${err}`);
      return false;
    }
  }
);
