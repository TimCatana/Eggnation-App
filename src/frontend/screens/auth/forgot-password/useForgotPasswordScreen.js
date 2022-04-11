import {useState, useEffect} from 'react';
import {ERROR} from '../../../util/ResultsConstants';
import Snackbar from 'react-native-snackbar';
import isEmailValid from '../../../common/helpers/isEmailValid';
import sendForgotPasswordEmailUC from '../../../../domain/forgot-password-screen-uc/sendForgotPasswordEmailUC';

const useForgotPasswordScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/

  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [isEmailError, setIsEmailError] = useState(true);

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
   * Displays a Snackbar showing a message.
   * Usually used for error messages.
   * @dependent showError
   * TODO - this snackbar will show success messages as well, I need to modify to include those as well
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

  /*************************/
  /***** BUTTON CLICKS *****/
  /*************************/

  /**
   * Does the backend logic to send the password reset email.
   * @onSuccess Should have sent an email and shows a snackbar with success message
   * @onFailure Should show a snackbar with an error message
   * TODO - add success snackbar
   */
  const handleSendForgotPasswordEmailClick = async () => {
    setIsLoading(true);
    const result = await sendForgotPasswordEmailUC(email);
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
    handleSendForgotPasswordEmailClick,
  };
};

export default useForgotPasswordScreen;
