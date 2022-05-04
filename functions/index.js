const admin = require("firebase-admin");
admin.initializeApp();
let SibApiV3Sdk = require("sib-api-v3-sdk");

/**
 * Authentication and setup for sendinblue API
 */
let defaultClient = SibApiV3Sdk.ApiClient.instance;
let apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.SEND_IN_BLUE_API_KEY;

/** IMPORT FUNCTIONS */
const { updateUserAuth } = require("./src/auth/updateUserAuth");

const { sendMeEmail } = require("./src/email/sendMeEmail");

const { addUserToFirestore } = require("./src/firestore/addUserToFirestore");
const {
  removeUserFromFirestore,
} = require("./src/firestore/removeUserFromFirestore");
const { updateUserEmail } = require("./src/firestore/updateUserEmail");

const { addToMailingList } = require("./src/sib/addToMailingList");

/** EXPORT FUNCTIONS */
exports.updateUserAuth = updateUserAuth;

exports.sendMeEmail = sendMeEmail;

exports.addUserToFirestore = addUserToFirestore;
exports.removeUserFromFirestore = removeUserFromFirestore;
exports.updateUserEmail = updateUserEmail;

exports.addToMailingList = addToMailingList;
