const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const { printDevLogs } = require("../util/printDevLogs");
const { S_SME_E_PATH, S_SME_E_INFO } = require("../../constants/Strings");

/**
 * Sends me an email to me saying that someone wants to claim a prize.
 * @param data ({message: string}) The data passed to the server from client function call
 * @param context (any) The client context from where the function was called
 * @trigger onCall from client
 * @note UI error messages are created on the client, no need to send a message from here
 */
exports.sendMeEmail = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    printDevLogs(
      S_SME_E_PATH,
      S_SME_E_INFO,
      `ERROR: User is unauthenticated &&&& DATA: data object: ${data}, context object: ${context}`
    );
    throw new functions.https.HttpsError("unauthenticated", "");
  }

  try {
    const transporter = _createTransport();
    const mailOptions = _createMailOptions(
      context.auth.uid,
      context.auth.token.email,
      data.message
    );
    const result = await transporter.sendMail(mailOptions);
    return result;
  } catch (e) {
    printDevLogs(
      S_SME_E_PATH,
      S_SME_E_INFO,
      `ERROR: Failed to send me claim prize email --> ${e} &&&& DATA: uid: ${context.auth.uid}, email: ${context.auth.token.email}, message: ${data.message}, transporter: ${transporter}, mailOptions: ${mailOptions}, context object: ${context}`
    );
    throw new functions.https.HttpsError("unknown", "");
  }
});

/**
 * Attempts to create a transport object for nodemailer
 */
const _createTransport = () => {
  return nodemailer.createTransport({
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
};

/**
 * Attempts to create a mail options object for nodemailer
 */
const _createMailOptions = (uid, email, message) => {
  return {
    from: `Eggnation Prizes <${process.env.EMAIL}>`,
    to: process.env.EMAIL,
    subject: `DO PRIZE CLAIM -- user: ${uid} || userEmail: ${email}`,
    text: `${message}`,
  };
};
