import {useState, useEffect} from 'react';
import getUserEmailUC from '../../../../domain/settings-screen-uc/getUserEmailUC';
import getUserEmailVerificationStatusUC from '../../../../domain/settings-screen-uc/getUserEmailVerificationStatusUC';
import sendVerificationEmailUC from '../../../../domain/settings-screen-uc/sendVerificationEmailUC';
import logoutUserUC from '../../../../domain/settings-screen-uc/logoutUserUC';
import deleteUserUC from '../../../../domain/settings-screen-uc/deleteUserUC';
import {Screens} from '../../../../constants/NavigationConstants';
import {ERROR} from '../../../../constants/ResultsConstants';
import Snackbar from 'react-native-snackbar';
import {SettingsScreenProp} from '../../../navigation/ScreenProps';
import {useNavigation} from '@react-navigation/native';

// TODO - refresh token each time the user goes to settings screen. The should rarely go here so it should not be that expensive
const useSettingsScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/
  const navigation = useNavigation<SettingsScreenProp>();

  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [emailVerificationStatus, setEmailVerificationStatus] = useState(null);
  const [language, setLanguage] = useState('EN');

  const [password, setPassword] = useState('');
  const [isPasswordError, setIsPasswordError] = useState(true);

  const [isPasswordModalShowing, setIsPasswordModalShowing] = useState(false);

  const [snackbarText, setSnackbarText] = useState('');
  const [showSnackbar, setShowSnackbar] = useState(0); // each time this increments, the useEffect for snackbar is triggered

  /***********************/
  /***** USE EFFECTS *****/
  /***********************/

  /**
   * gets the user info to display to the UI.
   * @dependent onMount
   */
  useEffect(() => {
    getUserInfo();
  }, []);

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

  /******************************/
  /***** USE EFFECT HELPERS *****/
  /******************************/

  /**
   * get's the user info and populates the state variables.
   */
  const getUserInfo = () => {
    const emailResult = getUserEmailUC();
    const emailVerificationStatusResult = getUserEmailVerificationStatusUC();

    setEmail(emailResult.data);
    setEmailVerificationStatus(emailVerificationStatusResult.data);
  };

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
    setPassword('');
  };

  /**
   * Does the backend logic to send verification email.
   * @onSuccess Should show a snackbar saying email was sent
   * @onFailure Should show a snackbar with an error message
   */
  const handleSendVerificationEmailClick = async () => {
    setIsLoading(true);
    const result = await sendVerificationEmailUC();
    setIsLoading(false);

    setSnackbarText(result.message);
    setShowSnackbar(showSnackbar + 1);
  };

  /**
   * Does the backend logic to logout the user
   * @onSuccess Should navigate automatically to the auth stack
   * @onFailure Should show a snackbar with an error message
   */
  const logoutUser = async () => {
    setIsLoading(true);
    const result = await logoutUserUC();
    setIsLoading(false);

    if (result.status === ERROR) {
      setSnackbarText(result.message);
      setShowSnackbar(showSnackbar + 1);
    }
  };

  /**
   * Does the backend logic to delete the user
   * @onSuccess Should navigate automatically to the auth stack
   * @onFailure Should show a snackbar with an error message
   */
  const deleteUser = async () => {
    // console.log('delete user clicked, add functionality now...');
    setIsLoading(true);
    const result = await deleteUserUC(password);
    setIsLoading(false);

    hidePasswordModal();

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

  /** Navigates to edit email screen if no process is currently running. */
  const navToEditEmailScreen = () => {
    if (!isLoading) {
      navigation.navigate(Screens.EDIT_EMAIL_SCREEN);
    }
  };

  /** Navigates to edit password screen if no process is currently running. */
  const navToEditPasswordScreen = () => {
    if (!isLoading) {
      navigation.navigate(Screens.EDIT_PASSWORD_SCREEN);
    }
  };

  /** Navigates to privacy policy screen if no process is currently running. */
  const navToPrivacyPolicyScreen = () => {
    if (!isLoading) {
      navigation.navigate(Screens.PRIVACY_POLICY_SCREEN);
    }
  };

  /** Navigates to terms screen if no process is currently running. */
  const navToTermsScreen = () => {
    if (!isLoading) {
      navigation.navigate(Screens.TERMS_SCREEN);
    }
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    isLoading,
    email,
    emailVerificationStatus,
    language,
    password,
    handlePasswordChange,
    isPasswordError,
    isPasswordModalShowing,
    showPasswordModal,
    hidePasswordModal,
    handleSendVerificationEmailClick,
    logoutUser,
    deleteUser,
    navigateBack,
    navToEditEmailScreen,
    navToEditPasswordScreen,
    navToPrivacyPolicyScreen,
    navToTermsScreen,
  };
};

export default useSettingsScreen;
