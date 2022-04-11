import {useState, useEffect} from 'react';
import isEmailValid from '../../../common/helpers/isEmailValid';
import updateUserEmailUC from '../../../../domain/edit-email-uc/updateUserEmailUC';

const useEditEmailScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/

  const [isLoading, setIsLoading] = useState(false);

  const [newEmail, setNewEmail] = useState('');
  const [isNewEmailError, setIsNewEmailError] = useState(true);

  const [password, setPassword] = useState('');
  const [isPasswordError, setIsPasswordError] = useState(true);

  const [isPasswordModalShowing, setIsPasswordModalShowing] = useState(false);

  const [errorText, setErrorText] = useState('');
  const [showSnackbar, setShowSnackbar] = useState(0); // each time this increments, the useEffect for snackbar is triggered

  /***********************/
  /***** USE EFFECTS *****/
  /***********************/

  /**
   * Checks to see if current newEmail input is a valid email address.
   * @dependent newEmail
   */
  useEffect(() => {
    setIsNewEmailError(!isEmailValid(newEmail));
  }, [newEmail]);

  /**
   * Checks to see if current password input is a valid password.
   * @dependent password
   */
  useEffect(() => {
    password.length > 1 ? setIsPasswordError(false) : setIsPasswordError(true);
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
   * Updates the current newEmail state when user inputs a value into a textInput
   * @param value The value inputted into the textInput
   */
  const handleNewEmailChange = value => {
    setNewEmail(value);
  };

  /**
   * Updates the current password state when user inputs a value into a textInput
   * @param value The value inputted into the textInput
   */
  const handlePasswordChange = value => {
    setPassword(value);
  };

  /*************************/
  /***** BUTTON CLICKS *****/
  /*************************/

  /**
   * Shows the password modal.
   * This modal is used to enter the user's current password before they can
   * actually update any information. This is in place for security purposes
   */
  const showPasswordModal = () => {
    setIsPasswordModalShowing(true);
  };

  /**
   * Hides the password modal.
   * This modal is used to enter the user's current password before they can
   * actually update any information. This is in place for security purposes
   */
  const hidePasswordModal = () => {
    setIsPasswordModalShowing(false);
  };

  /**
   * Does the backend logic to update the user email address.
   * @onSuccess Should update the user's email
   * @onFailure Should show a snackbar with an error message
   */
  const handleUpdateEmailClick = async () => {
    setIsLoading(true);
    const result = updateUserEmailUC(newEmail, password);
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
    newEmail,
    handleNewEmailChange,
    isNewEmailError,
    password,
    handlePasswordChange,
    isPasswordError,
    isPasswordModalShowing,
    showPasswordModal,
    hidePasswordModal,
    handleUpdateEmailClick,
  };
};

export default useEditEmailScreen;
