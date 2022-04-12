import {useState, useEffect} from 'react';
import {ERROR} from '../../../util/ResultsConstants';
import Snackbar from 'react-native-snackbar';
import isEmailValid from '../../../common/helpers/isEmailValid';
import isPasswordValid from '../../../common/helpers/isPasswordValid';
import isConfirmPasswordValid from '../../../common/helpers/isConfirmPasswordValid';
import registerUserUC from '../../../../domain/register-screen-uc/registerUserUC';

// TODO - need to find a way to disable native back button on isLoading
const useRegisterScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/

  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [isEmailError, setIsEmailError] = useState(true);

  const [password, setPassword] = useState('');
  const [isPasswordError, setIsPasswordError] = useState(true);

  const [confirmPassword, setConfirmPassword] = useState('');
  const [isConfirmPasswordError, setIsConfirmPasswordError] = useState(true);

  const [errorText, setErrorText] = useState('');
  const [showError, setShowError] = useState(0); // each time this increments, the useEffect for snackbar is triggered

  /***********************/
  /***** USE EFFECTS *****/
  /***********************/

  /**
   * Checks to see if current email is a valid email address.
   * @dependent email
   */
  useEffect(() => {
    setIsEmailError(!isEmailValid(email));
  }, [email]);

  /**
   * Checks to see if current password input is a valid password.
   * Also checks to see if confirm password password matches new inputted password.
   * @dependent password
   */
  useEffect(() => {
    setIsPasswordError(!isPasswordValid(password));
    setIsConfirmPasswordError(
      !isConfirmPasswordValid(password, confirmPassword),
    );
  }, [password]);

  /**
   * Checks to see if confirm password password matches password.
   * @dependent confirmPassword
   */
  useEffect(() => {
    setIsConfirmPasswordError(
      !isConfirmPasswordValid(password, confirmPassword),
    );
  }, [confirmPassword]);

  /**
   * Displays a Snackbar showing a message.
   * Usually used for error messages.
   * @dependent showError
   */
  useEffect(() => {
    if (showError != 0) {
      Snackbar.show({
        text: errorText,
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  }, [showError]);

  /***********************/
  /***** TEXT INPUTS *****/
  /***********************/

  /**
   * Updates the current email state when user inputs a value into a textInput
   * @param value The value inputted into the textInput
   */
  const handleEmailChange = value => {
    setEmail(value);
  };

  /**
   * Updates the current password state when user inputs a value into a textInput
   * @param value The value inputted into the textInput
   */
  const handlePasswordChange = value => {
    setPassword(value);
  };

  /**
   * Updates the current confirm password state when user inputs a value into a textInput
   * @param value The value inputted into the textInput
   */
  const handleConfirmPasswordChange = value => {
    setConfirmPassword(value);
  };

  /**
   * Clears all text inputs.
   * Due to the fact that the register screen never unmounts when navigating to the Privacy Policy screen or Terms of
   * Service screen and popping back to this screen, I will need to clear the text before navigating to the other auth
   * screens to make it look like the screen reset when they come back. This is more efficient than manually unmounting and
   * remounting or than navigating using popUpTo() builders.
   */
  const clearTextInputs = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  /*************************/
  /***** BUTTON CLICKS *****/
  /*************************/

  /**
   * Does the backend logic to register the new user account.
   * @onSuccess Should navigate to the game screens stack
   * @onFailure Should show a snackbar with an error message
   */
  const handleRegisterClick = async () => {
    setIsLoading(true);
    const result = await registerUserUC(email, password);
    setIsLoading(false);

    if (result.status === ERROR) {
      setErrorText(result.message);
      setShowError(showError + 1);
    }
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    isLoading,
    email,
    handleEmailChange,
    isEmailError,
    password,
    handlePasswordChange,
    isPasswordError,
    confirmPassword,
    handleConfirmPasswordChange,
    isConfirmPasswordError,
    clearTextInputs,
    handleRegisterClick,
  };
};

export default useRegisterScreen;
