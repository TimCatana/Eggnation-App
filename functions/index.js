const nodemailer = require("nodemailer");
let SibApiV3Sdk = require("sib-api-v3-sdk");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

/**
 * Authentication and setup for sendinblue API
 */
let defaultClient = SibApiV3Sdk.ApiClient.instance;
let apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.SEND_IN_BLUE_API_KEY;

/** IMPORT FUNCTIONS */
const updateUserAuth = require("./src/auth/updateUserAuth");

const sendMeEmail = require("./src/email/sendMeEmail");

const addUserToFirestore = require("./src/firestore/addUserToFirestore");
const removeUserFromFirestore = require("./src/firestore/removeUserFromFirestore");
const updateUserFirestoreEmail = require("./src/firestore/updateUserFirestoreEmail");

const addToMailingList = require("./src/sib/addToMailingList");
const deleteFromMailingList = require("./src/sib/deleteFromMailingList");

/** EXPORT FUNCTIONS */
exports.updateUserAuth = updateUserAuth.updateUserAuth;

exports.sendMeEmail = sendMeEmail.sendMeEmail;

exports.addUserToFirestore = addUserToFirestore.addUserToFireStore;
exports.removeUserFromFirestore =
  removeUserFromFirestore.removeUserFromFireStore;
exports.updateUserFirestoreEmail =
  updateUserFirestoreEmail.updateUserFirestoreEmail;

exports.addToMailingList = addToMailingList.addToMailingList;
exports.deleteFromMailingList = deleteFromMailingList.deleteFromMailingList;

// const all = require("./src/index");

// exports.updateUserAuth = all.auth.updateUserAuth;

// exports.sendMeEmail = all.email.sendMeEmail;

// exports.addUserToFireStore = all.firestore.addUserToFireStore;
// exports.removeUserFromFireStore = all.firestore.removeUserFromFireStore;
// exports.updateUserFirestoreEmail = all.firestore.updateUserFirestoreEmail;

// exports.addToMailingList = all.sib.addToMailingList;
// exports.deleteFromMailingList = all.sib.deleteFromMailingList;

// /**
//  * When a user is created, add the user to the database.
//  * @param user The user object
//  * @trigger When a user is created
//  */
// exports.addUserToFireStore = functions.auth.user().onCreate(async (user) => {
//   return await userRef.doc(user.uid).set({
//     email: user.email,
//     username: user.displayName,
//     registered: Date(),
//   });
// });

// /**
//  * Adds a user to the mailing list if they want to subscribe to the mailing list.
//  * The mailing list will be used to market eggnationshop.com.
//  */
// exports.addToMailingList = functions.https.onCall(async (data, context) => {
//   let apiInstance = new SibApiV3Sdk.ContactsApi();
//   let createContact = new SibApiV3Sdk.CreateContact();

//   createContact.email = data.email;
//   createContact.listIds = [2];

//   try {
//     const result = await apiInstance.createContact(createContact);
//     console.log(
//       `SIB - createContact call successful --> ${JSON.stringify(result)}`
//     );
//     return true;
//   } catch (e) {
//     console.error(`SIB - createContact call failed --> ${err}`);
//     return false;
//   }
// });

// /**
//  * Adds a user to the mailing list if they want to subscribe to the mailing list.
//  * The mailing list will be used to market eggnationshop.com.
//  */
// exports.deleteFromMailingList = functions.https.onCall(
//   async (data, context) => {
//     let apiInstance = new SibApiV3Sdk.ContactsApi();

//     try {
//       await apiInstance.deleteContact(data.email);
//       console.log(`SIB - deleteContact call successful`);
//       return true;
//     } catch (e) {
//       console.error(`SIB - deleteContact call failed --> ${err}`);
//       return false;
//     }
//   }
// );

// /**
//  * When a user is deleted, delete the user to the database.
//  * @param user The user object
//  * @trigger When a user is deleted
//  */
// exports.removeUserToFireStore = functions.auth.user().onDelete(async (user) => {
//   return await userRef.doc(user.uid).delete();
// });

// /**
//  * Sends me an email saying that someone wants to claim a prize.
//  * @param data The data passed to the server from client function call
//  * @param context The client context from where the function was called
//  */
// exports.sendMeEmail = functions.https.onCall(async (data, context) => {
//   if (!context.auth) {
//     throw new functions.https.HttpsError(
//       "unauthenticated",
//       "User trying to claim a prize while not authenticated"
//     );
//   }

//   try {
//     const transporter = nodemailer.createTransport({
//       host: "smtp-mail.outlook.com", // hostname
//       secureConnection: false, // TLS requires secureConnection to be false
//       port: 587, // port for secure SMTP
//       tls: {
//         ciphers: "SSLv3",
//       },
//       auth: {
//         user: process.env.EMAIL,
//         pass: process.env.EMAIL_PASSWORD,
//       },
//     });

//     const mailOptions = {
//       from: `Eggnation Prizes <${process.env.EMAIL}>`,
//       to: process.env.EMAIL,
//       subject: `DO PRIZE CLAIM -- user: ${context.auth.uid} || prize: ${data.prizeId}`,
//       text: `Someone has desired to claim their prize. Here's what you need to do:
//              1) Check what prize they won (in the database).
//              2) Contact them via email. Their email is: ${context.auth.token.email}.
//              3) Confirm with them what prize they won.
//              4) Ask them if the data they entered is correct. This is what they entered:
//                 a) country: ${data.country}
//                 b) region: ${data.region}
//                 c) address: ${data.address}
//                 d) postal code: ${data.postalCode}
//              5) Ship their prize and tell them
//              6) When you ship the prize, tell them that you did
//              7) When you ship the prize, change the isDelivered variable to true for the prize`,
//     };

//     const result = await transporter.sendMail(mailOptions);

//     console.log(result);
//     return result;
//   } catch (e) {
//     console.error(`Error sending email... RIP --> ${e}`);
//     throw new functions.https.HttpsError(
//       "unknown",
//       "Failed to claim prize, please try again. If error persists, please contact us"
//     );
//   }
// });

// /**
//  * Updates the user's email address.
//  * Do it on the serever so that they don't get an email from firebase allowing them to change it back
//  */
// exports.updateUserFirestoreEmail = functions.https.onCall(
//   async (data, context) => {
//     if (!context.auth) {
//       throw new functions.https.HttpsError(
//         "unauthenticated",
//         "User trying to update email while unauthenticated"
//       );
//     }

//     try {
//       await userRef.doc(context.auth.uid).update({ email: data.email });
//       return true;
//     } catch (e) {
//       console.error(`firebase error update email: ${e}`);
//       throw new functions.https.HttpsError(
//         "unknown",
//         `failed to update database email: ${e} ${context.auth.uid} ${data.email}`
//       );
//     }
//   }
// );

// /**
//  *
//  */
// exports.updateUserAuth = functions.firestore
//   .document("users/{userId}")
//   .onUpdate(async (snapshot, context) => {
//     const oldValues = snapshot.before.data()
//     const currentValues = snapshot.after.data()

//     if(oldValues.email != currentValues.email) {
//       try {
//         _updateUserAuthEmail(context.auth.uid, currentValues.email)
//       } catch (e) {
//         console.log(`auth error update email ${e}`);
//         throw new functions.https.HttpsError(
//           "unknown",
//           `failed to update auth email: ${e} ${context.auth.uid} ${values.email}`
//         );
//       }
//     }

//     if(oldValues.username != currentValues.username) {
//       try {
//         _updateUserAuthUsername(context.auth.uid, currentValues.username)
//       } catch (e) {
//         console.log(`auth error updateUsername ${e}`);
//         throw new functions.https.HttpsError(
//           "unknown",
//           `failed to update auth displayName: ${e} ${context.auth.uid} ${values.email}`
//         );
//         }
//     }

//     console.log("Update User Auth Ran Successfully")
//     return true
//   });
