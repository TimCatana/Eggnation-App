import dayjs from 'dayjs';

/** ASYNC STORAGE KEYS */
export const KC_LOCAL_COUNT = 'localCount';
export const KC_LAST_RESET_TIME = 'lastResetTime';

/** ASYNC STORAGE DEFAULT VALUES */
export const DV_LOCAL_COUNT = '5000';
export const DV_LAST_RESET_TIME = dayjs().toString();

/** MAIN GAME LOGIC CONSTANTS */
export const MGL_RESET_TIME_IN_HOURS = 12;
export const MGL_RNG_RANGE = 5000001; // 1000001
export const MGL_WIN_CHANCE = 1000000; // rng(0 - MGL_RNG_RANGE) % MGL_WIN_CHANCE === 0 means a win 200000
export const MGL_AD_FREQUENCY = 25;

/** BOOKSHELF UI CONSTANTS */
export const BU_FIRST_HALF_SHELF = 'firstHalfShelf';
export const BU_SECOND_HALF_SHELF = 'secondHalfShelf';
export const BU_FULL_SHELF = 'fullHalfShelf';

/** FIRESTORE CONSTANTS */
export const FS_AVAILABLE_PRIZES_COLLECTION_KEY = 'available-prizes';
export const FS_WON_PRIZES_COLLECTION_KEY = 'won-prizes';
export const FS_USER_WON_PRIZES_COLLECTION_KEY = 'user-prizes';
export const FS_CONTEST_PRIZES_COLLECTION_KEY = 'contest-prizes';
export const FS_USERS_COLLECTION_KEY = 'users';

/** REALTIME DATABASE CONSTANTS */
export const RTDB_GLOBAL_COUNT_KEY = 'global-count';

/** SHELF IMAGE */
export const SI_FIRST_HALF_SHELF = 'firstHalfShelf';
export const SI_SECOND_HALF_SHELF = 'secondHalfShelf';
export const SI_FULL_SHELF = 'fullHalfShelf';

/** PRIZE CLAIM TYPE */
export const PCT_DELIVERABLE = 'shipment'; // the product needs to be shipped
export const PCT_CASH = 'cash'; // the product is a cash prize, no shipment
export const PCT_NONE = 'none'; // the product is claimable by the user without need for me

/** CLOUD FUNCTION NAMES */
export const CFN_DELETE_FROM_MAILING_LIST = 'deleteFromMailingList';
export const CFN_SEND_ME_EMAIL = 'sendMeEmail';
export const CFN_ADD_TO_EMAIL_LIST = 'addToMailingList';
export const CFN_UPDATE_USER_EMAIL = 'updateUserEmail';
