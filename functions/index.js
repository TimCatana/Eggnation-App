const nodemailer = require("nodemailer");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const userRef = admin.firestore().collection("users");

/**
 * When a user is created, add the user to the database.
 * @param user The user object
 * @trigger When a user is created
 */
exports.addUserToFireStore = functions.auth.user().onCreate(async (user) => {
  return await userRef.doc(user.uid).set({
    email: user.email,
    username: user.displayName,
    registered: Date(),
  });
});

/**
 * When a user is deleted, delete the user to the database.
 * @param user The user object
 * @trigger When a user is deleted
 */
exports.removeUserToFireStore = functions.auth.user().onDelete(async (user) => {
  return await userRef.doc(user.uid).delete();
});

/**
 * Sends me an email saying that someone wants to claim a prize.
 * @param data The data passed to the server from client function call
 * @param context The client context from where the function was called
 */
exports.sendMeEmail = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      "unauthenticated",
      "User trying to claim a prize while not authenticated"
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com", // hostname
      secureConnection: false, // TLS requires secureConnection to be false
      port: 587, // port for secure SMTP
      tls: {
        ciphers: "SSLv3",
      },
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `Eggnation Prizes <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      subject: `DO PRIZE CLAIM -- user: ${context.auth.uid} || prize: ${data.prizeId}`,
      text: `Someone has desired to claim their prize. Here's what you need to do:
             1) Check what prize they won (in the database).
             2) Contact them via email. Their email is: ${context.auth.token.email}.
             3) Confirm with them what prize they won.
             4) Ask them if the data they entered is correct. This is what they entered:
                a) country: ${data.country}
                b) region: ${data.region}
                c) address: ${data.address}
                d) postal code: ${data.postalCode}
             5) Ship their prize and tell them
             6) When you ship the prize, tell them that you did
             7) When you ship the prize, change the isDelivered variable to true for the prize`,
    };

    const result = await transporter.sendMail(mailOptions);

    console.log(result);
    return result;
  } catch (e) {
    console.log(`Error sending email... RIP --> ${e}`);
    throw new functions.https.HttpsError(
      "unknown",
      "Failed to claim prize, please try again. If error persists, please contact us"
    );
  }
});

// exports.updateUserEmail = functions.https.onCall(async (data, context) => {
//   if (!context.auth) {
//     throw new functions.https.HttpsError(
//       "unauthenticated",
//       "User trying to update email while unauthenticated"
//     );
//   }

//   // console.log(context.auth.uid);
//   // console.log(data.email);

//   await admin
//     .auth()
//     .updateUser(context.auth.uid, {
//       email: data.email,
//       emailVerified: false,
//     })
//     .catch((e) => {
//       console.log(`auth error updateemail ${e}`);
//       throw new functions.https.HttpsError(
//         "unknown",
//         `failed to update auth email: ${e} ${context.auth.uid} ${data.email}`
//       );
//     });

//   // console.log(`auth update worked`);

//   return await userRef
//     .doc(context.auth.uid)
//     .update({ email: data.email })
//     .catch((e) => {
//       console.log(`firebase erro update email: ${e}`);
//       throw new functions.https.HttpsError(
//         "unknown",
//         `failed to update database email: ${e} ${context.auth.uid} ${data.email}`
//       );
//     });
// });
