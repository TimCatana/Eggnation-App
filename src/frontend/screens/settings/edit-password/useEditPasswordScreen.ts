import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {EditPasswordScreenProp} from '../../../navigation/ScreenProps';
import {SUCCESS} from '../../../../constants/ResultsConstants';
import Snackbar from 'react-native-snackbar';
import isPasswordValid from '../../../common/helpers/isPasswordValid';
import isConfirmPasswordValid from '../../../common/helpers/isConfirmPasswordValid';
import updateUserPasswordUC from '../../../../domain/edit-password-screen-uc/updateUserPasswordUC';

const useEditPasswordScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/
  const navigation = useNavigation<EditPasswordScreenProp>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [newPassword, setNewPassword] = useState<string>('');
  const [isNewPasswordError, setIsNewPasswordError] = useState<boolean>(true);

  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isConfirmPasswordError, setIsConfirmPasswordError] =
    useState<boolean>(true);

  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [isCurrentPasswordError, setIsCurrentPasswordError] =
    useState<boolean>(true);

  const [isPasswordModalShowing, setIsPasswordModalShowing] =
    useState<boolean>(false);

  const [snackbarText, setSnackbarText] = useState<string>('');
  const [showSnackbar, setShowSnackbar] = useState<number>(0); // each time this increments, the useEffect for snackbar is triggered

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
    currentPassword.length > 0
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
        text: snackbarText,
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
  const handleNewPasswordChange = (value: string) => {
    setNewPassword(value);
  };

  /**
   * Updates the current confirmPassword state when user inputs a value into a textInput
   * @param value The value inputted into the textInput
   */
  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
  };

  /**
   * Updates the current currentPassword state when user inputs a value into a textInput
   * @param value The value inputted into the textInput
   */
  const handleCurrentPasswordChange = (value: string) => {
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
    setCurrentPassword('');
  };

  /**
   * Does the backend logic to update the user email address.
   * @onSuccess Should update the user's password
   * @onFailure Should show a snackbar with an error message
   */
  const handleUpdatePasswordClick = async () => {
    setIsLoading(true);
    hidePasswordModal();
    const result = await updateUserPasswordUC(newPassword, currentPassword);
    setIsLoading(false);

    setSnackbarText(result.message);
    return result.status;
  };

  /******************************/
  /***** NAVIGATION HELPERS *****/
  /******************************/

  /** Navigates back to the login screen if no process is currently running. */
  const navigateBack = () => {
    if (!isLoading) {
      navigation.pop();
    }
  };

  /** Navigates back to the login screen if no process is currently running. */
  const updatePasswordAndNavBackIfSuccess = async () => {
    const status = await handleUpdatePasswordClick();

    setTimeout(() => {
      setShowSnackbar(showSnackbar + 1);
    }, 250);

    if (status === SUCCESS) {
      navigation.pop();
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
    navigateBack,
    updatePasswordAndNavBackIfSuccess,
  };
};

export default useEditPasswordScreen;
