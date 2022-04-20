/**
 * Checks to see if the newly entered confirmPassword is still valid.
 * @param password (string) The password input
 * @param confirmPassword (string) The confirm password input
 * @returns Whether or not the current confirmPassword input is valid
 */
const isConfirmPasswordValid = (password: string, confirmPassword: string) => {
  return password === confirmPassword;
};

export default isConfirmPasswordValid;
