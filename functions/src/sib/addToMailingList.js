const functions = require("firebase-functions");
let SibApiV3Sdk = require("sib-api-v3-sdk");
const { printDevLogs } = require("../util/printDevLogs");
const { isEmailValid } = require("../util/isEmailValid");
const { S_ATML_E_PATH, S_ATML_E_INFO } = require("../constants/Strings");

/**
 * Adds a user to the mailing list if they want to subscribe to the mailing list.
 * The mailing list will be used to market eggnationshop.com.
 * @param data ({email: string}) Contains the email to be added to the mailing list
 * @param context (any) The context this call was made from
 * @trigger onCall from client
 */
exports.addToMailingList = functions.https.onCall(async (data, context) => {
  if (!data.email || !isEmailValid(data.email)) {
    printDevLogs(
      S_UUE_E_PATH,
      S_UUE_E_INFO,
      `ERROR: failed to add user to the mailing list --> the passed email is either null or invalid &&&& DATA: email: ${data.email}, context object: ${context}, data object: ${data}`
    );
    throw new functions.https.HttpsError("invalid-argument", "");
  }

  let apiInstance = new SibApiV3Sdk.ContactsApi();
  let createContact = new SibApiV3Sdk.CreateContact();

  createContact.email = data.email;
  createContact.listIds = [2];

  try {
    const result = await apiInstance.createContact(createContact);
    return result;
  } catch (e) {
    printDevLogs(
      S_ATML_E_PATH,
      S_ATML_E_INFO,
      `ERROR: ${e} &&&& DATA: data: ${data}, context: ${context} email: ${data.email}, SIBApiInstance: ${apiInstance}, SIBCreateContactInstance: ${createContact}`
    );
    throw new functions.https.HttpsError("unknown", "");
  }
});
