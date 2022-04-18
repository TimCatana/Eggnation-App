import {useState, useEffect} from 'react';
import Snackbar from 'react-native-snackbar';
import isEmailValid from '../../../common/helpers/isEmailValid';
import sendForgotPasswordEmailUC from '../../../../domain/forgot-password-screen-uc/sendForgotPasswordEmailUC';
import {useNavigation} from '@react-navigation/native';
import {ForgotPasswordScreenProp} from '../../../navigation/ScreenProps';

const useForgotPasswordScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/
  const navigation = useNavigation<ForgotPasswordScreenProp>();

  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [isEmailError, setIsEmailError] = useState(true);

  const [snackbarText, setSnackbarText] = useState('');
  const [showSnackbar, setShowSnackbar] = useState(0); // each time this increments, the useEffect for snackbar is triggered

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
   * @dependent showSnackbar
   */
  useEffect(() => {
    if (showSnackbar != 0) {
      Snackbar.show({
        text: snackbarText,
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
  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  /*************************/
  /***** BUTTON CLICKS *****/
  /*************************/

  /**
   * Does the backend logic to send the password reset email.
   * @onSuccess Should have sent an email and shows a snackbar with success message
   * @onFailure Should show a snackbar with an error message
   */
  const handleSendForgotPasswordEmailClick = async () => {
    setIsLoading(true);
    const result = await sendForgotPasswordEmailUC(email);
    setIsLoading(false);

    setSnackbarText(result.message);
    setShowSnackbar(showSnackbar + 1);
  };

  /******************************/
  /***** NAVIGATION HELPERS *****/
  /******************************/

  /**
   * Navigates back to the login screen if no process is currently running.
   */
  const navigateBack = () => {
    if (!isLoading) {
      navigation.pop();
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
    navigateBack,
  };
};

export default useForgotPasswordScreen;
