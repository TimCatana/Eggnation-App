import {useNavigation} from '@react-navigation/native';
import {TermsScreenProp} from '../../../navigation/ScreenProps';

const useTermsScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/
  const navigation = useNavigation<TermsScreenProp>();

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

export default useTermsScreen;
