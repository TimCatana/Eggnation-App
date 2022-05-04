/**************************/
/***** updateUserAuth *****/
/**************************/

export const S_UUA_E_PATH = "src/auth/updateUserAuth.js";
export const S_UUA_E_INFO =
  "updateUserAuth (trigger is .document(users/{userId}.onUpdate)";

/***********************/
/***** sendMeEmail *****/
/**********************/

export const S_SME_E_PATH = "src/email/sendMeEmail.js";
export const S_SME_E_INFO = "sendMeEmail (trigger is on call from client)";

/******************************/
/***** addUserToFirestore *****/
/******************************/

export const S_AUTF_E_PATH = "src/firestore/addUserToFirestore.js";
export const S_AUTF_E_INFO = "addUserToFirestore (trigger is auth().onCreate)";

/***********************************/
/***** removeUserFromFirestore *****/
/***********************************/

export const S_RUFF_E_PATH = "src/firestore/removeUserFromFirestore.js";
export const S_RUFF_E_INFO = "addUserToFirestore (trigger is auth().onDelete)";

/***************************/
/***** updateUserEmail *****/
/***************************/

export const S_UUE_E_PATH = "src/firestore/updateUserEmail.js";
export const S_UUE_E_INFO = "updateUserEmail (trigger is on call from client)";

/****************************/
/***** addToMailingList *****/
/****************************/

export const S_ATML_E_PATH = "src/sib/addToMailingList.js";
export const S_ATML_E_INFO =
  "addToMailingList (trigger is on call from client)";

/*********************************/
/***** removeFromMailingList *****/
/*********************************/

export const S_RFML_E_PATH = "src/sib/removeFromMailingList.js";
export const S_RFML_E_INFO =
  "removeFromMailingList (trigger is on call from client)";
