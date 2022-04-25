const functions = require("firebase-functions");
const admin = require("firebase-admin");

/**
 * Updates the user's email address.
 * Do it on the serever so that they don't get an email from firebase allowing them to change it back
 */
exports.updateUserFirestoreEmail = functions.https.onCall(
  async (data, context) => {
    if (!context.auth) {
      throw new functions.https.HttpsError(
        "unauthenticated",
        "User trying to update email while unauthenticated"
      );
    }

    const userRef = admin.firestore().collection("users");

    try {
      await userRef.doc(context.auth.uid).update({ email: data.email });
      return true;
    } catch (e) {
      console.error(`firebase error update email: ${e}`);
      throw new functions.https.HttpsError(
        "unknown",
        `failed to update database email: ${e} ${context.auth.uid} ${data.email}`
      );
    }
  }
);
