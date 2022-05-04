/**************************/
/***** updateUserAuth *****/
/**************************/

exports.S_UUA_E_PATH = "src/auth/updateUserAuth.js";
exports.S_UUA_E_INFO =
  "updateUserAuth (trigger is .document(users/{userId}.onUpdate)";

/***********************/
/***** sendMeEmail *****/
/**********************/

exports.S_SME_E_PATH = "src/email/sendMeEmail.js";
exports.S_SME_E_INFO = "sendMeEmail (trigger is on call from client)";

/******************************/
/***** addUserToFirestore *****/
/******************************/

exports.S_AUTF_E_PATH = "src/firestore/addUserToFirestore.js";
exports.S_AUTF_E_INFO = "addUserToFirestore (trigger is auth().onCreate)";

/***********************************/
/***** removeUserFromFirestore *****/
/***********************************/

exports.S_RUFF_E_PATH = "src/firestore/removeUserFromFirestore.js";
exports.S_RUFF_E_INFO = "addUserToFirestore (trigger is auth().onDelete)";

/***************************/
/***** updateUserEmail *****/
/***************************/

exports.S_UUE_E_PATH = "src/firestore/updateUserEmail.js";
exports.S_UUE_E_INFO = "updateUserEmail (trigger is on call from client)";

/****************************/
/***** addToMailingList *****/
/****************************/

exports.S_ATML_E_PATH = "src/sib/addToMailingList.js";
exports.S_ATML_E_INFO =
  "addToMailingList (trigger is on call from client)";

/*********************************/
/***** removeFromMailingList *****/
/*********************************/

exports.S_RFML_E_PATH = "src/sib/removeFromMailingList.js";
exports.S_RFML_E_INFO =
  "removeFromMailingList (trigger is on call from client)";
