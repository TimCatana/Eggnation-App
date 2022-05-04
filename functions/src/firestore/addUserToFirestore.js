const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { printDevLogs } = require("../util/printDevLogs");
const { S_AUTF_E_PATH, S_AUTF_E_INFO } = require("../../constants/Strings");
const { FS_USER_COLLECTION_KEY } = require("../../constants/Constants");

const userRef = admin.firestore().collection(FS_USER_COLLECTION_KEY);

/**
 * When a user is created, add the user to the database.
 * @param user The firebase user object (see Firebase docs for more info)
 * @trigger When a user is created in firebase authentication
 */
exports.addUserToFireStore = functions.auth.user().onCreate(async (user) => {
  if (!user.uid) {
    printDevLogs(
      S_AUTF_E_PATH,
      S_AUTF_E_INFO,
      `ERROR: Failed to add user to firestore ${FS_USER_COLLECTION_KEY} collection --> the uid in the user object is null &&&& DATA: user object: ${user}`
    );
    return false;
  }

  try {
    await userRef.doc(user.uid).set({
      email: user.email,
      username: user.displayName,
      registered: Date(),
    });
    return true;
  } catch (e) {
    printDevLogs(
      S_AUTF_E_PATH,
      S_AUTF_E_INFO,
      `ERROR: Failed to add user to firestore ${FS_USER_COLLECTION_KEY} collection --> ${e} &&&& DATA: user object: ${user}, uid: ${user.uid}, email: ${user.email}, username: ${user.displayName}`
    );
    return false;
  }
});
