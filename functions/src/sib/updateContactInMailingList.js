const functions = require("firebase-functions");
let SibApiV3Sdk = require("sib-api-v3-sdk");
const { printDevLogs } = require("../util/printDevLogs");
const { isEmailValid } = require("../util/isEmailValid");
const { S_UCIMM_E_INFO, S_UCIMM_E_PATH } = require("../constants/Strings");

/**
 * Adds a user to the mailing list if they want to subscribe to the mailing list.
 * The mailing list will be used to market eggnationshop.com.
 * @param data ({email: string}) Contains the email to be added to the mailing list
 * @param context (any) The context this call was made from
 * @trigger onCall from client
 * @IMPORTANT make sure that there are quotes around the 'EMAIL'. My auto formatter removes them.
 */
exports.updateContactInMailingList = functions.https.onCall(
  async (data, context) => {
    if (!data.oldEmail || !data.newEmail || !isEmailValid(data.newEmail)) {
      printDevLogs(
        S_UCIMM_E_PATH,
        S_UCIMM_E_INFO,
        `ERROR: failed to update user email in mailing list --> the passed old or new email is either null or invalid &&&& DATA: old email: ${data.oldEmail}, new email: ${data.newEmail} `
      );
      throw new functions.https.HttpsError("invalid-argument", "");
    }

    let apiInstance = new SibApiV3Sdk.ContactsApi();
    let updateContact = new SibApiV3Sdk.UpdateContact();

    let identifier = data.oldEmail;
    updateContact.attributes = {'EMAIL':`${data.newEmail}`}; // {'EMAIL':`${data.newEmail}`} EMAIL must have quotes around it according to docs. But my auto formatter gets rid of it. Just make sure its ther

    try {
      await apiInstance.updateContact(identifier, updateContact);
      return true;
    } catch (e) {
      printDevLogs(
        S_UCIMM_E_PATH,
        S_UCIMM_E_INFO,
        `ERROR: Failed to update user email in mailing list --> ${e} &&&& DATA: old email: ${data.oldEmail}, new email: ${data.newEmail}`
      );
      throw new functions.https.HttpsError("unknown", "");
    }
  }
);
