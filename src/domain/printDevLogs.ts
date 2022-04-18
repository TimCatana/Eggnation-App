/**
 * Prints out the error logs.
 * This should only be run in dev mode.
 * All calls to this function should be in an if(__DEV__) {}.
 * @param fileName (string) The file where the error occurred
 * @param functionName (string) The function where the error occurred
 * @param error (any) The error that occurred
 */
const printDevLogs = (fileName: string, functionName: string, error: any) => {
  console.error(
    `file: ${fileName} --> function: ${functionName} --> An expected error occurred --> ${error}`,
  );
};

export default printDevLogs;
