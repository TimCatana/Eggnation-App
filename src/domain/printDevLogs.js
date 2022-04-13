/**
 * Prints out the error logs.
 * This should only be run in dev mode.
 * All calls to this function should be in an if(__DEV__) {}.
 * @param fileName The file where the error occurred
 * @param functionName The function where the error occurred
 * @param error The error that occurred
 */
const printDevLogs = (fileName, functionName, error) => {
  console.error(
    `file: ${fileName} --> function: ${functionName} --> An expected error occurred --> ${error}`,
  );
};

export default printDevLogs;
