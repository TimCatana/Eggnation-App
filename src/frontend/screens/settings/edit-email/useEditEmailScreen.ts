import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {EditEmailScreenProp} from '../../../navigation/ScreenProps';
import {SUCCESS} from '../../../../constants/ResultsConstants';
import Snackbar from 'react-native-snackbar';
import isEmailValid from '../../../common/helpers/isEmailValid';
import updateUserEmailUC from '../../../../domain/edit-email-screen-uc/updateUserEmailUC';
import {Screens} from '../../../../constants/NavigationConstants';

const useEditEmailScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/
  const navigation = useNavigation<EditEmailScreenProp>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [newEmail, setNewEmail] = useState<string>('');
  const [isNewEmailError, setIsNewEmailError] = useState<boolean>(true);

  const [password, setPassword] = useState<string>('');
  const [isPasswordError, setIsPasswordError] = useState<boolean>(true);

  const [isPasswordModalShowing, setIsPasswordModalShowing] =
    useState<boolean>(false);

  const [snackbarText, setSnackbarText] = useState<string>('');
  const [showSnackbar, setShowSnackbar] = useState<number>(0); // each time this increments, the useEffect for snackbar is triggered

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
        text: snackbarText,
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
  const handleNewEmailChange = (value: string) => {
    setNewEmail(value);
  };

  /**
   * Updates the current password state when user inputs a value into a textInput
   * @param value The value inputted into the textInput
   */
  const handlePasswordChange = (value: string) => {
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
    setPassword('');
    setIsPasswordModalShowing(false);
  };

  /**
   * Does the backend logic to update the user email address.
   * @onSuccess Should update the user's email
   * @onFailure Should show a snackbar with an error message
   */
  const handleUpdateEmailClick = async () => {
    setIsLoading(true);
    const result = await updateUserEmailUC(newEmail, password);
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
  const updateEmailAndNavBackIfSuccess = async () => {
    const status = await handleUpdateEmailClick();
    hidePasswordModal();

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
    navigateBack,
    updateEmailAndNavBackIfSuccess,
  };
};

export default useEditEmailScreen;
