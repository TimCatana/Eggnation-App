import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SettingsScreenProp} from '../../../navigation/ScreenProps';
import {Screens} from '../../../../constants/NavigationConstants';
import {Linking} from 'react-native';
import {ERROR} from '../../../../constants/ResultsConstants';
import Snackbar from 'react-native-snackbar';
import getUserEmailUC from '../../../../domain/settings-screen-uc/getUserEmailUC';
import logoutUserUC from '../../../../domain/settings-screen-uc/logoutUserUC';
import reloadUserUC from '../../../../domain/settings-screen-uc/reloadUserUC';

const useSettingsScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/
  const navigation = useNavigation<SettingsScreenProp>();

  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [email, setEmail] = useState<string>('');
  const [language, setLanguage] = useState<string>('EN');

  const [snackbarText, setSnackbarText] = useState<string>('');
  const [showSnackbar, setShowSnackbar] = useState<number>(0); // each time this increments, the useEffect for snackbar is triggered

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

  /**
   * Refreshes the page each time this screen comes into focus.
   * When the email and passwords are changed, it navigates back, but this
   * component never remounts so we don't get updated profile info.
   * This function solves that
   */
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getUserInfo();
    });
    return unsubscribe;
  }, [navigation]);

  /******************************/
  /***** USE EFFECT HELPERS *****/
  /******************************/

  /**
   * get's the user info and populates the state variables.
   */
  const getUserInfo = async () => {
    await reloadUserUC();
    const emailResult = getUserEmailUC();

    setEmail(emailResult.data);
    setIsInitialized(true);
  };

  /*************************/
  /***** BUTTON CLICKS *****/
  /*************************/

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

  /******************************/
  /***** NAVIGATION HELPERS *****/
  /******************************/

  /** Navigates back to the login screen if no process is currently running. */
  const navigateBack = () => {
    if (!isLoading) {
      navigation.pop();
    }
  };

  /** Navigates to edit password screen if no process is currently running. */
  const navToEggnationFacebook = () => {
    if (!isLoading) {
      const url = 'https://www.facebook.com/eggnationapp';
      Linking.openURL(url);
    }
  };

  /** Navigates to edit password screen if no process is currently running. */
  const navToEggnationInstagram = () => {
    if (!isLoading) {
      const url = 'https://instagram.com/eggnationapp';
      Linking.openURL(url);
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

  /** Navigates to edit password screen if no process is currently running. */
  const navToEggnationShop = () => {
    if (!isLoading) {
      const url = 'https://mynzaclothing.com/password';
      Linking.openURL(url);
    }
  };

  /** Navigates to edit password screen if no process is currently running. */
  const navToContactUs = () => {
    if (!isLoading) {
      const url =
        'mailto:contactapplicnation@gmail.com?subject=Enter your subject here&body=Enter your message here';
      Linking.openURL(url);
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

  /** Navigates to edit password screen if no process is currently running. */
  const navToDeleteAccountScreenScreen = () => {
    if (!isLoading) {
      navigation.navigate(Screens.DELETE_ACCOUNT_SCREEN);
    }
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    isInitialized,
    isLoading,
    email,
    language,
    logoutUser,
    navigateBack,
    navToEggnationFacebook,
    navToEggnationInstagram,
    navToEditEmailScreen,
    navToEditPasswordScreen,
    navToDeleteAccountScreenScreen,
    navToEggnationShop,
    navToContactUs,
    navToPrivacyPolicyScreen,
    navToTermsScreen,
  };
};

export default useSettingsScreen;
