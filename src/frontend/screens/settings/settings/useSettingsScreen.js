import {useState, useEffect} from 'react';
import getUserEmailUC from '../../../../domain/settings-screen-uc/getUserEmailUC'
import getUserEmailVerificationStatusUC from '../../../../domain/settings-screen-uc/getUserEmailVerificationStatusUC'
import sendVerificationEmailUC from '../../../../domain/settings-screen-uc/sendVerificationEmailUC';
import logoutUserUC from '../../../../domain/settings-screen-uc/logoutUserUC';
import deleteUserUC from '../../../../domain/settings-screen-uc/deleteUserUC';

// TODO - refresh token each time the user goes to settings screen. The should rarely go here so it should not be that expensive
const useSettingsScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/

  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [emailVerificationStatus, setEmailVerificationStatus] = useState(null);
  const [language, setLanguage] = useState('EN');

  const [errorText, setErrorText] = useState('');
  const [showError, setShowError] = useState(0); // each time this increments, the useEffect for snackbar is triggered

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
   * Displays a Snackbar showing a message.
   * Usually used for error messages.
   * @dependent showError
   * TODO - make sure this works
   */
  useEffect(() => {
    if (showError != 0) {
      Snackbar.show({
        text: errorText,
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  }, [showError]);

  /******************************/
  /***** USE EFFECT HELPERS *****/
  /******************************/

  /**
   * get's the user info and populates the state variables.
   */
  const getUserInfo = () => {
    const email = getUserEmailUC();
    const emailVerificationStatus = getUserEmailVerificationStatusUC();

    setEmail(email);
    setEmailVerificationStatus(emailVerificationStatus);
    setIsInitialized(true);
  };

  /*************************/
  /***** BUTTON CLICKS *****/
  /*************************/

  /**
   * Does the backend logic to send verification email.
   * @onSuccess Should show a snackbar saying email was sent
   * @onFailure Should show a snackbar with an error message
   * TODO - make sure this works
   */
  const handleSendVerificationEmailClick = async () => {
    setIsLoading(true);
    await sendVerificationEmailUC();
    setIsLoading(false);

    if (result.status === ERROR) {
      setErrorText(result.message);
      setShowError(showError + 1);
    }
  };

  /**
   * Does the backend logic to logout the user
   * @onSuccess Should navigate to the auth stack
   * @onFailure Should show a snackbar with an error message
   * TODO - make sure this works
   */
  const logoutUser = async () => {
    setIsLoading(true);
    const result = await logoutUserUC();
    setIsLoading(false);

    if (result.status === ERROR) {
      setErrorText(result.message);
      setShowError(showError + 1);
    }
  };

  const deleteUser = () => {
    console.log('delete user clicked, add functionality now...');
    // setIsLoading(true);
    // const result = await deleteUserUC();
    // setIsLoading(false);

    // if (result.status === ERROR) {
    //   setErrorText(result.message);
    //   setShowError(showError + 1);
    // }
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    isLoading,
    isInitialized,
    email,
    emailVerificationStatus,
    language,
    handleSendVerificationEmailClick,
    logoutUser,
    deleteUser,
  };
};

export default useSettingsScreen;
