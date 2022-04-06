import {useState, useEffect} from 'react';
import sendForgotPasswordEmailUC from '../../../../domain/forgot-password-screen-uc/sendForgotPasswordEmailUC';
import isEmailValid from '../common/helpers/isEmailValid';
import Snackbar from 'react-native-snackbar';
import { ERROR } from '../../../util/Results';

  // TODO - Add frontend form validation stuff heree
const useForgotPasswordScreen = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('');
  const [isEmailError, setIsEmailError] = useState(true)

  const [errorText, setErrorText] = useState('')
  const [showError, setShowError] = useState(0); // each time this increments, the useEffect for snackbar is triggered

  useEffect(() => {
    setIsEmailError(!isEmailValid(email))
  })

  useEffect(() => {
    if (showError != 0) {
      Snackbar.show({
        text: errorText,
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  }, [showError]);

  const handleEmailChange = value => {
    setEmail(value);
  };

  const handleSendForgotPasswordEmailClick = async () => {
    setIsLoading(true)
    const result = await sendForgotPasswordEmailUC(email);
    setIsLoading(false)

    if(result.status === ERROR) {
    setErrorText(result.message)
    setShowError(showError + 1);
    }
  };

  return {
    isLoading,
    email,
    handleEmailChange,
    isEmailError,
    handleSendForgotPasswordEmailClick,
  };
};

export default useForgotPasswordScreen;
