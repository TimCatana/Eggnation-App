import dayjs from 'dayjs';

/** ASYNC STORAGE KEYS */
export const KC_LOCAL_COUNT = 'localCount';
export const KC_LAST_RESET_TIME = 'lastResetTime';

/** ASYNC STORAGE DEFAULT VALUES */
export const DV_LOCAL_COUNT = '3000'; // daily taps
export const DV_LAST_RESET_TIME = dayjs().toString();

/** MAIN GAME LOGIC CONSTANTS */
export const MGL_RESET_TIME_IN_HOURS = 12; // how often to reset the local count
export const MGL_RNG_RANGE = 2_000_000; // rng number
export const MGL_WIN_CHANCE = 500_000; // rng(0 - MGL_RNG_RANGE) % MGL_WIN_CHANCE === 0 means a win 200000
export const MGL_AD_FREQUENCY = 50; // every 50 taps is an ad

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
export const FS_PRIZE_CLAIMED_FIELD_KEY = 'prizeClaimed';

/** PRIZE CLAIM TYPE */
export const PCT_DELIVERABLE = 'shipment'; // the product needs to be shipped
export const PCT_TRANSFER = 'transfer'; // the product is a cash prize, no shipment
export const PCT_NONE = 'none'; // the product is claimable by the user without need for me

/** REALTIME DATABASE CONSTANTS */
export const RTDB_GLOBAL_COUNT_KEY = 'global-count';

/** SHELF IMAGE */
export const SI_FIRST_HALF_SHELF = 'firstHalfShelf';
export const SI_SECOND_HALF_SHELF = 'secondHalfShelf';
export const SI_FULL_SHELF = 'fullHalfShelf';

/** CLOUD FUNCTION NAMES */
export const CFN_SEND_ME_EMAIL = 'sendMeEmail';
export const CFN_ADD_TO_EMAIL_LIST = 'addToMailingList';
export const CFN_UPDATE_MAILING_LIST_EMAIL = 'updateContactInMailingList';
export const CFN_UPDATE_USER_EMAIL = 'updateUserEmail';
