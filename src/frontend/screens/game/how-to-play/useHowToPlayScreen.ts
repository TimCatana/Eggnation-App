import {useNavigation} from '@react-navigation/native';
import {PrivacyPolicyScreenProp} from '../../../navigation/ScreenProps';

const useHowToPlayScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/
  const navigation = useNavigation<PrivacyPolicyScreenProp>();

  /**
   * Navigates back to the login screen if no process is currently running.
   */
  const navigateBack = () => {
    navigation.pop();
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    navigateBack,
  };
};

export default useHowToPlayScreen;
