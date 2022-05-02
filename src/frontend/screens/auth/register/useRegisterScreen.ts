import {useState, useEffect} from 'react';
import {Linking} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RegisterScreenProp} from '../../../navigation/ScreenProps';
import {Screens} from '../../../../constants/NavigationConstants';
import {ERROR} from '../../../../constants/ResultsConstants';
import Snackbar from 'react-native-snackbar';
import isEmailValid from '../../../common/helpers/isEmailValid';
import isPasswordValid from '../../../common/helpers/isPasswordValid';
import isConfirmPasswordValid from '../../../common/helpers/isConfirmPasswordValid';
import registerUserUC from '../../../../domain/register-screen-uc/registerUserUC';

// TODO - need to find a way to disable native back button on isLoading
const useRegisterScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/

  const navigation = useNavigation<RegisterScreenProp>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [email, setEmail] = useState<string>('');
  const [isEmailError, setIsEmailError] = useState<boolean>(true);

  const [password, setPassword] = useState<string>('');
  const [isPasswordError, setIsPasswordError] = useState<boolean>(true);

  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isConfirmPasswordError, setIsConfirmPasswordError] =
    useState<boolean>(true);

  const [isSubbedToMailingList, setIsSubbedToMailingList] =
    useState<boolean>(true);

  const [snackbarText, setSnackbarText] = useState<string>('');
  const [showSnackbar, setShowSnackbar] = useState<number>(0); // each time this increments, the useEffect for snackbar is triggered

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
   * Checks to see if current password input is a valid password.
   * Also checks to see if confirm password password matches new inputted password.
   * @dependent password
   */
  useEffect(() => {
    setIsPasswordError(!isPasswordValid(password));
    setIsConfirmPasswordError(
      !isConfirmPasswordValid(password, confirmPassword),
    );
  }, [password]);

  /**
   * Checks to see if confirm password password matches password.
   * @dependent confirmPassword
   */
  useEffect(() => {
    setIsConfirmPasswordError(
      !isConfirmPasswordValid(password, confirmPassword),
    );
  }, [confirmPassword]);

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

  /**
   * Updates the current password state when user inputs a value into a textInput
   * @param value The value inputted into the textInput
   */
  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  /**
   * Updates the current confirm password state when user inputs a value into a textInput
   * @param value The value inputted into the textInput
   */
  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
  };

  /**
   * Clears all text inputs.
   * Due to the fact that the register screen never unmounts when navigating to the Privacy Policy screen or Terms of
   * Service screen and popping back to this screen, I will need to clear the text before navigating to the other auth
   * screens to make it look like the screen reset when they come back. This is more efficient than manually unmounting and
   * remounting or than navigating using popUpTo() builders.
   */
  const clearTextInputs = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  /*************************/
  /***** BUTTON CLICKS *****/
  /*************************/

  /**
   * Updates the current password state when user inputs a value into a textInput
   * @param value The value inputted into the textInput
   */
  const handleIsSubbedToMailingListChange = () => {
    setIsSubbedToMailingList(!isSubbedToMailingList);
  };

  /**
   *
   */
  const handleEggnationShopLinkClick = () => {
    const url = 'https://mynzaclothing.com/password';
    Linking.openURL(url);
  };

  /**
   * Does the backend logic to register the new user account.
   * @onSuccess Should navigate to the game screens stack
   * @onFailure Should show a snackbar with an error message
   */
  const handleRegisterClick = async () => {
    setIsLoading(true);
    const result = await registerUserUC(email, password, isSubbedToMailingList);
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

  /**
   * Navigates to privacy policy screen if no process is currently running.
   */
  const navToPrivacyPolicyScreen = () => {
    if (!isLoading) {
      navigation.navigate(Screens.PRIVACY_POLICY_SCREEN);
      clearTextInputs();
    }
  };

  /**
   * Navigates to terms of service screen if no process is currently running.
   */
  const navToTermsScreen = () => {
    if (!isLoading) {
      navigation.navigate(Screens.TERMS_SCREEN);
      clearTextInputs();
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
    password,
    handlePasswordChange,
    isPasswordError,
    confirmPassword,
    handleConfirmPasswordChange,
    isConfirmPasswordError,
    isSubbedToMailingList,
    handleIsSubbedToMailingListChange,
    handleRegisterClick,
    handleEggnationShopLinkClick,
    navigateBack,
    navToPrivacyPolicyScreen,
    navToTermsScreen,
  };
};

export default useRegisterScreen;
