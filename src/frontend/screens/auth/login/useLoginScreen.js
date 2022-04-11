import {useState, useEffect} from 'react';
import {ERROR} from '../../../util/ResultsConstants';
import Snackbar from 'react-native-snackbar';
import isEmailValid from '../../../common/helpers/isEmailValid';
import loginUserUC from '../../../../domain/login-screen-uc/loginUserUC';

const useLoginScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/

  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [isEmailError, setIsEmailError] = useState(true);

  const [password, setPassword] = useState('');
  const [isPasswordError, setIsPasswordError] = useState(true);

  const [errorText, setErrorText] = useState('');
  const [showSnackbar, setShowSnackbar] = useState(0); // each time this increments, the useEffect for snackbar is triggered

  /***********************/
  /***** USE EFFECTS *****/
  /***********************/

  /**
   * Checks to see if current email input is a valid email address.
   * @dependent email
   */
  useEffect(() => {
    setIsEmailError(!isEmailValid(email));
  }, [email]);

  /**
   * Checks to see if current password input is a valid password.
   * @dependent password
   */
  useEffect(() => {
    password.length > 0 ? setIsPasswordError(false) : setIsPasswordError(true);
  }, [password]);

  /**
   * Displays a Snackbar showing a message.
   * Usually used for error messages.
   * @dependent showSnackbar
   */
  useEffect(() => {
    if (showSnackbar != 0) {
      Snackbar.show({
        text: errorText,
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  }, [showSnackbar]);

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
   * Clears all text inputs.
   * Due to the fact that the login screen never unmounts when navigating to the register screen or forgot 
   * password screen and popping back to this screen, I will need to clear the text before navigating to the other auth
   * screens to make it look like the screen reset when they come back. This is more efficient than manually unmounting and
   * remounting or than navigating using popUpTo() builders.
   */
  const clearTextInputs = () => {
    setEmail('');
    setPassword('');
  };

  /*************************/
  /***** BUTTON CLICKS *****/
  /*************************/

  /**
   * Does the backend logic to log the user in.
   * @onSuccess Should navigate to the game screens stack
   * @onFailure Should show a snackbar with an error message
   */
  const handleLoginClick = async () => {
    setIsLoading(true);
    const result = await loginUserUC(email, password);
    setIsLoading(false);

    if (result.status === ERROR) {
      setErrorText(result.message);
      setShowSnackbar(showError + 1);
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
    clearTextInputs,
    handleLoginClick,
  };
};

export default useLoginScreen;
