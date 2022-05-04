const functions = require("firebase-functions");
let SibApiV3Sdk = require("sib-api-v3-sdk");
const { printDevLogs } = require("../util/printDevLogs");
const { S_RFML_E_PATH, S_RFML_E_INFO } = require("../constants/Strings");

/**
 * Adds a user to the mailing list if they want to subscribe to the mailing list.
 * The mailing list will be used to market eggnationshop.com.
 */
exports.removeFromMailingList = functions.https.onCall(
  async (data, context) => {
    if (!data.email || !isEmailValid(data.email)) {
      printDevLogs(
        S_UUE_E_PATH,
        S_UUE_E_INFO,
        `ERROR: failed to delete user from the mailing list --> the passed email is either null or invalid &&&& DATA: email: ${data.email}, context object: ${context}, data object: ${data}`
      );
      throw new functions.https.HttpsError("invalid-argument", "");
    }

    let apiInstance = new SibApiV3Sdk.ContactsApi();

    try {
      await apiInstance.deleteContact(data.email);
      return true;
    } catch (e) {
      printDevLogs(
        S_RFML_E_PATH,
        S_RFML_E_INFO,
        `ERROR: ${e} &&&& DATA: data object: ${data}, context object: ${context}`
      );
      return false;
    }
  }
);
