const functions = require("firebase-functions");
const admin = require("firebase-admin");

/**
 * When a user is deleted, delete the user to the database.
 * @param user The user object
 * @trigger When a user is deleted
 */
exports.removeUserFromFireStore = functions.auth.user().onDelete(async (user) => {
  const userRef = admin.firestore().collection("users");
  return await userRef.doc(user.uid).delete();
});
