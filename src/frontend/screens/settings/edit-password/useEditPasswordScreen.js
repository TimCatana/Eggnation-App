import {useState, useEffect} from 'react';
import updateUserPasswordUC from '../../../../domain/edit-password-uc/updateUserPasswordUC';
import isPasswordValid from '../../../common/helpers/isPasswordValid';
import isConfirmPasswordValid from '../../../common/helpers/isConfirmPasswordValid';

const useEditPasswordScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/

  const [isLoading, setIsLoading] = useState(false);

  const [newPassword, setNewPassword] = useState('');
  const [isNewPasswordError, setIsNewPasswordError] = useState(true);

  const [confirmPassword, setConfirmPassword] = useState('');
  const [isConfirmPasswordError, setIsConfirmPasswordError] = useState(true);

  const [currentPassword, setCurrentPassword] = useState('');
  const [isCurrentPasswordError, setIsCurrentPasswordError] = useState(true);

  const [isPasswordModalShowing, setIsPasswordModalShowing] = useState(false);

  const [errorText, setErrorText] = useState('');
  const [showSnackbar, setShowSnackbar] = useState(0); // each time this increments, the useEffect for snackbar is triggered

  /***********************/
  /***** USE EFFECTS *****/
  /***********************/

  /**
   * Checks to see if current newPassword input is a valid password.
   * Also checks to see if confirm password password matches new inputted password.
   * @dependent newPassword
   */
  useEffect(() => {
    setIsNewPasswordError(!isPasswordValid(newPassword));
    setIsConfirmPasswordError(
      !isConfirmPasswordValid(newPassword, confirmPassword),
    );
  }, [newPassword]);

  /**
   * Checks to see if confirm password password matches password.
   * @dependent confirmPassword
   */
  useEffect(() => {
    setIsConfirmPasswordError(
      !isConfirmPasswordValid(newPassword, confirmPassword),
    );
  }, [confirmPassword]);

  /**
   * Checks to see if current currentPassword input is a valid password.
   * @dependent password
   */
  useEffect(() => {
    currentPassword.length > 1
      ? setIsCurrentPasswordError(false)
      : setIsCurrentPasswordError(true);
  }, [currentPassword]);

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
   * Updates the current newPassword state when user inputs a value into a textInput
   * @param value The value inputted into the textInput
   */
  const handleNewPasswordChange = value => {
    setNewPassword(value);
  };

  /**
   * Updates the current confirmPassword state when user inputs a value into a textInput
   * @param value The value inputted into the textInput
   */
  const handleConfirmPasswordChange = value => {
    setConfirmPassword(value);
  };

  /**
   * Updates the current currentPassword state when user inputs a value into a textInput
   * @param value The value inputted into the textInput
   */
  const handleCurrentPasswordChange = value => {
    setCurrentPassword(value);
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
   * @onSuccess Should update the user's password
   * @onFailure Should show a snackbar with an error message
   */
  const handleUpdatePasswordClick = async () => {
    setIsLoading(true);
    const result = await updateUserPasswordUC(newPassword, currentPassword);
    setIsLoading(false);

    if (result.status === ERROR) {
      setErrorText(result.message);
      setShowSnackbar(showSnackbar + 1);
    }
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    isLoading,
    newPassword,
    handleNewPasswordChange,
    isNewPasswordError,
    confirmPassword,
    handleConfirmPasswordChange,
    isConfirmPasswordError,
    currentPassword,
    handleCurrentPasswordChange,
    isCurrentPasswordError,
    isPasswordModalShowing,
    showPasswordModal,
    hidePasswordModal,
    handleUpdatePasswordClick,
  };
};

export default useEditPasswordScreen;
