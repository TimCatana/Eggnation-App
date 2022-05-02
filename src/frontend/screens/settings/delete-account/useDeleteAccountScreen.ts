import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {DeleteAccountScreenProp} from '../../../navigation/ScreenProps';
import {ERROR} from '../../../../constants/ResultsConstants';
import Snackbar from 'react-native-snackbar';
import deleteUserUC from '../../../../domain/settings-screen-uc/deleteUserUC';

const useDeleteAccountScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/
  const navigation = useNavigation<DeleteAccountScreenProp>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [password, setPassword] = useState<string>('');
  const [isPasswordError, setIsPasswordError] = useState<boolean>(true);

  const [snackbarText, setSnackbarText] = useState<string>('');
  const [showSnackbar, setShowSnackbar] = useState<number>(0); // each time this increments, the useEffect for snackbar is triggered

  /***********************/
  /***** USE EFFECTS *****/
  /***********************/

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
   * Does the backend logic to delete the user
   * @onSuccess Should navigate automatically to the auth stack
   * @onFailure Should show a snackbar with an error message
   */
  const handleDeleteUserClick = async () => {
    setIsLoading(true);
    const result = await deleteUserUC(password);
    setIsLoading(false);

    if (result.status === ERROR) {
      setSnackbarText(result.message);
      setTimeout(() => {
        setShowSnackbar(showSnackbar + 1);
      }, 250);
    }
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

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    isLoading,
    password,
    handlePasswordChange,
    isPasswordError,
    navigateBack,
    handleDeleteUserClick,
  };
};

export default useDeleteAccountScreen;
