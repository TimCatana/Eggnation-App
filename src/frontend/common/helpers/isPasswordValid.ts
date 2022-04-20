/**
 * Checks to see if the newly entered password is still valid.
 * @param password (string) The password input
 * @returns Whether or not the current password input is valid
 */
const isPasswordValid = (password: string) => {
  let isValid = true;
  let whitespaceChars = /\s/;
  let lowerCaseChars = /[a-z]/;
  let upperCaseChars = /[A-Z]/;
  let numberChars = /\d/;

  if (password.length < 8) {
    // console.log('Password should be at least 8 characters long!');
    isValid = false;
  }

  if (whitespaceChars.test(password) === true) {
    // console.log('Password must not contain whitespace');
    isValid = false;
  }

  if (
    lowerCaseChars.test(password) === false ||
    upperCaseChars.test(password) === false ||
    numberChars.test(password) === false
  ) {
    // console.log(
    //   'Password must contain lowercase letters, uppercase letters and numbers',
    // );
    isValid = false;
  }

  return isValid;
};

export default isPasswordValid;
