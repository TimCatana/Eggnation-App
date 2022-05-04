/**
 * Checks to see if the newly entered email is still valid.
 * @param email (string) The email input
 * @returns Whether or not the current email input is valid
 */
exports.isEmailValid = (email) => {
  const emailFormat =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return emailFormat.test(email.toLowerCase());
};
