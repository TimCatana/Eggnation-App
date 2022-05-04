const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { printDevLogs } = require("../util/printDevLogs");
const { S_UUA_E_PATH, S_UUA_E_INFO } = require("../../constants/Strings");
const { FS_USER_COLLECTION_KEY } = require("../constants/Constants");

/**
 * Updates the user's authentication token to match the newly inserted data into the firebase database
 * @param snapshot ({email: string, registered: string, username: string | null}) The document snapshot
 * @param context (any) The context this call was made from
 * @trigger update to firebase users/{userId} document
 * @note context.auth.uid is not available for the onUpdate function. https://stackoverflow.com/questions/46912161/getting-the-user-id-from-a-firestore-trigger-in-cloud-functions-for-firebase
 */
exports.updateUserAuth = functions.firestore
  .document(`${FS_USER_COLLECTION_KEY}/{userId}`)
  .onUpdate(async (snapshot, context) => {
    const oldValues = snapshot.before.data();
    const currentValues = snapshot.after.data();

    if (oldValues.username != currentValues.username) {
      try {
        await _updateUserAuthUsername(
          context.params.userId,
          currentValues.username
        );
        return true;
      } catch (e) {
        printDevLogs(
          S_UUA_E_PATH,
          S_UUA_E_INFO,
          `ERROR: failed to update auth().displayName --> ${e} &&&& DATA: snapshot: ${snapshot}, old document: ${oldValues}, current document: ${currentValues}, UID: ${context.params.userId}, context object: ${context}`
        );
        return false;
      }
    }
  });

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
