const functions = require("firebase-functions");
const admin = require("firebase-admin");
import { printDevLogs } from "../util/printDevLogs";
import { S_RUFF_E_INFO, S_RUFF_E_PATH } from "../../constants/Strings";
const {
  FS_USER_COLLECTION_KEY,
  FS_WON_PRIZES_COLLECTION_KEY,
} = require("../../constants/Constants");

const userRef = admin.firestore().collection(FS_USER_COLLECTION_KEY);
const wonPrizesRef = admin.firestore().collection(FS_WON_PRIZES_COLLECTION_KEY);

/**
 * When a user is deleted, delete the user to the database.
 * @param user The user object
 * @trigger When a user is deleted
 */
exports.removeUserFromFireStore = functions.auth
  .user()
  .onDelete(async (user) => {
    if (!user.uid) {
      printDevLogs(
        S_RUFF_E_PATH,
        S_RUFF_E_INFO,
        `ERROR: Failed to delete user from firestore --> the uid in the user object is null &&&& DATA: user object: ${user}`
      );
      return false;
    }

    try {
      await userRef.doc(user.uid).delete();
    } catch (e) {
      printDevLogs(
        S_RUFF_E_PATH,
        S_RUFF_E_INFO,
        `ERROR: failed to delete user from ${FS_USER_COLLECTION_KEY} collection --> ${e} &&&& DATA: user object: ${user}, uid: ${user.uid}`
      );
      return false;
    }

    try {
      await wonPrizesRef.doc(user.uid).delete();
    } catch (e) {
      printDevLogs(
        S_RUFF_E_PATH,
        S_RUFF_E_INFO,
        `ERROR: failed to delete user from ${FS_WON_PRIZES_COLLECTION_KEY} collection --> ${e} &&&& DATA: user object: ${user}, uid: ${user.uid}`
      );
      return false;
    }

    return true;
  });
