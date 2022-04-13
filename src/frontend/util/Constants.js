import dayjs from 'dayjs';

/** ASYNC STORAGE KEYS */
export const KC_LOCAL_COUNT = 'localCount'
export const KC_LAST_RESET_TIME = 'lastResetTime'

/** ASYNC STORAGE DEFAULT VALUES */
export const DV_LOCAL_COUNT = '1000'
export const DV_LAST_RESET_TIME = dayjs().toString()

/** MAIN GAME LOGIC CONSTANTS */
export const MGL_RESET_TIME_IN_HOURS = 12;
export const MGL_RNG_RANGE = 1000001;
export const MGL_WIN_CHANCE = 200000; // rng(0 -OC_RNG_RANGE) % OC_WIN_CHANCE === 0 means a win
export const MGL_AD_FREQUENCY = 15;

/** BOOKSHELF UI CONSTANTS */
export const BU_FIRST_HALF_SHELF = "firstHalfShelf"
export const BU_SECOND_HALF_SHELF = "secondHalfShelf"
export const BU_FULL_SHELF = "fullHalfShelf"

/** FIRESTORE CONSTANTS */
export const FS_AVAILABLE_PRIZES_COLLECTION_KEY = 'available-prizes'
export const FS_WON_PRIZES_COLLECTION_KEY = 'won-prizes'
export const FS_USERS_COLLECTION_KEY = 'users'