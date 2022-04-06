import {useState, useEffect} from 'react';
import Snackbar from 'react-native-snackbar';
import isEmailValid from '../common/helpers/isEmailValid';
import isPasswordValid from '../common/helpers/isPasswordValid';
import isConfirmPasswordValid from '../common/helpers/isConfirmPasswordValid';
import registerUserUC from '../../../../domain/register-screen-uc/registerUserUC';
import { ERROR } from '../../../util/Results';

const useRegisterScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailError, setIsEmailError] = useState(true);
  const [password, setPassword] = useState('');
  const [isPasswordError, setIsPasswordError] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isConfirmPasswordError, setIsConfirmPasswordError] = useState(true);

  const [errorText, setErrorText] = useState('')
  const [showError, setShowError] = useState(0); // each time this increments, the useEffect for snackbar is triggered

  // UseEffects
  useEffect(() => {
    setIsEmailError(!isEmailValid(email));
  }, [email]);

  useEffect(() => {
    setIsPasswordError(!isPasswordValid(password));
    setIsConfirmPasswordError(
      !isConfirmPasswordValid(password, confirmPassword),
    );
  }, [password]);

  useEffect(() => {
    setIsConfirmPasswordError(
      !isConfirmPasswordValid(password, confirmPassword),
    );
  }, [confirmPassword]);

  useEffect(() => {
    if (showError != 0) {
      Snackbar.show({
        text: errorText,
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  }, [showError]);

  // Text Inputs
  const handleEmailChange = value => {
    setEmail(value);
  };

  const handlePasswordChange = value => {
    setPassword(value);
  };

  const handleConfirmPasswordChange = value => {
    setConfirmPassword(value);
  };

  // Button Clicks
  const handleRegisterClick = async () => {
    setIsLoading(true);
    const result = await registerUserUC(email, password);
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
    handlePasswordChange,
    isPasswordError,
    confirmPassword,
    handleConfirmPasswordChange,
    isConfirmPasswordError,
    handleRegisterClick,
  };
};

export default useRegisterScreen;
