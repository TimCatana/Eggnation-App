const functions = require("firebase-functions");
const admin = require("firebase-admin");

/**
 *
 * @note context.auth.uid is not available for the onUpdate function. https://stackoverflow.com/questions/46912161/getting-the-user-id-from-a-firestore-trigger-in-cloud-functions-for-firebase
 */
exports.updateUserAuth = functions.firestore
  .document("users/{userId}")
  .onUpdate(async (snapshot, context) => {
    const oldValues = snapshot.before.data();
    const currentValues = snapshot.after.data();

    if (oldValues.email != currentValues.email) {
      try {
        _updateUserAuthEmail(context.params.userId, currentValues.email);
      } catch (e) {
        console.log(`auth error update email ${e}`);
        throw new functions.https.HttpsError(
          "unknown",
          `failed to update auth email: ${e} ${context.auth.uid} ${values.email}`
        );
      }
    }

    if (oldValues.username != currentValues.username) {
      try {
        _updateUserAuthUsername(context.params.userId, currentValues.username);
      } catch (e) {
        console.log(`auth error updateUsername ${e}`);
        throw new functions.https.HttpsError(
          "unknown",
          `failed to update auth displayName: ${e} ${context.auth.uid} ${values.email}`
        );
      }
    }

    console.log("Update User Auth Ran Successfully");
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

/**
 * Updates the user's username in authentication
 * @param {*} uid The user's id
 * @param {*} username The user's new username
 */
const _updateUserAuthUsername = async (uid, username) => {
  await admin.auth().updateUser(uid, {
    displayName: username,
  });
};
