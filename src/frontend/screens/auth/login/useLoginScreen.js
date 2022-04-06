import {useState, useEffect} from 'react';
import Snackbar from 'react-native-snackbar';
import isEmailValid from '../common/helpers/isEmailValid';
import loginUserUC from '../../../../domain/login-screen-uc/loginUserUC';
import { ERROR } from '../../../util/Results';

const useLoginScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailError, setIsEmailError] = useState(true);
  const [password, setPassword] = useState('');
  const [isPasswordError, setIsPasswordError] = useState(true);

  const [errorText, setErrorText] = useState('')
  const [showError, setShowError] = useState(0); // each time this increments, the useEffect for snackbar is triggered

  // USE EFFECTS
  useEffect(() => {
    setIsEmailError(!isEmailValid(email));
  }, [email]);

  useEffect(() => {
    password.length > 0 ? setIsPasswordError(false) : setIsPasswordError(true);
  }, [password]);

  useEffect(() => {
    if (showError != 0) {
      Snackbar.show({
        text: errorText,
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  }, [showError]);

  // TEXT INPUTS
  const handleEmailChange = value => {
    setEmail(value);
  };

  const handlePasswordChange = value => {
    setPassword(value);
  };

  // BUTTON CLICKS
  const handleLoginClick = async () => {
    setIsLoading(true);
    const result = await loginUserUC(email, password);
    setIsLoading(false);

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
    password,
    isPasswordError,
    handlePasswordChange,
    handleLoginClick,
  };
};

export default useLoginScreen;
