const functions = require("firebase-functions");
const admin = require("firebase-admin");

const userRef = admin.firestore().collection("users");

/**
 * Updates the user's email address.
 * Do it on the serever so that they don't get an email from firebase allowing them to change it back
 */
exports.updateUserEmail = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      "unauthenticated",
      "User trying to update email while unauthenticated"
    );
  }

  try {
    await userRef.doc(context.auth.uid).update({ email: data.email });
  } catch (e) {
    console.error(`firebase error update email: ${e}`);
    throw new functions.https.HttpsError(
      "unknown",
      `failed to update database email: ${e} ${context.auth.uid} ${data.email}`
    );
  }

  try {
    await _updateUserAuthEmail(context.auth.uid, data.email);
  } catch (e) {
    console.log(`auth error update email ${e}`);
    throw new functions.https.HttpsError(
      "unknown",
      `failed to update auth email: ${e} ${context.auth.uid} ${values.email}`
    );
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
