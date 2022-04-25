const functions = require("firebase-functions");
const admin = require("firebase-admin");

/**
 * When a user is created, add the user to the database.
 * @param user The user object
 * @trigger When a user is created
 */
exports.addUserToFireStore = functions.auth.user().onCreate(async (user) => {
  const userRef = admin.firestore().collection("users");

  return await userRef.doc(user.uid).set({
    email: user.email,
    username: user.displayName,
    registered: Date(),
  });
});
