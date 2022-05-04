const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { printDevLogs } = require("../util/printDevLogs");
const { S_UUE_E_PATH, S_UUE_E_INFO } = require("../constants/Strings");
const { isEmailValid } = require("../util/isEmailValid");

const userRef = admin.firestore().collection("users");

/**
 * Updates the user's email address.
 * Do it on the server so that they don't get an email from firebase allowing them to change it back
 * @param data ({email: string}) Contains the message to be sent in the email
 * @param context (any) The context this call was made from
 * @trigger onCall from client
 */
exports.updateUserEmail = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    printDevLogs(
      S_UUE_E_PATH,
      S_UUE_E_INFO,
      `ERROR:  failed to update email --> User is unauthenticated`
    );
    throw new functions.https.HttpsError("unauthenticated", "");
  }

  if (!data.email || !isEmailValid(data.email)) {
    printDevLogs(
      S_UUE_E_PATH,
      S_UUE_E_INFO,
      `ERROR: failed to update email --> the passed email is either null or invalid &&&& DATA: email: ${data.email}`
    );
    throw new functions.https.HttpsError("invalid-argument", "");
  }

  try {
    await userRef.doc(context.auth.uid).update({ email: data.email });
  } catch (e) {
    printDevLogs(
      S_UUE_E_PATH,
      S_UUE_E_INFO,
      `failed to update database email: ERROR: ${e} DATA: uid: ${context.auth.uid}, email: ${data.email}`
    );
    throw new functions.https.HttpsError("unknown", "");
  }

  try {
    await _updateUserAuthEmail(context.auth.uid, data.email);
  } catch (e) {
    printDevLogs(
      S_UUE_E_PATH,
      S_UUE_E_INFO,
      `ERROR: failed to update auth email (but database email was updated, this is a big problem) --> ${e} DATA: uid: ${context.auth.uid}, email: ${data.email}`
    );
    throw new functions.https.HttpsError("unknown", "");
  }

  return true;
});

/**
 * Updates the user's email address in authentication
 * @param {*} uid The user's id
 * @param {*} email The user's new email
 */
const _updateUserAuthEmail = async (uid, email) => {
  await admin.auth().updateUser(uid, {
    email: email,
    emailVerified: false,
  });
};


