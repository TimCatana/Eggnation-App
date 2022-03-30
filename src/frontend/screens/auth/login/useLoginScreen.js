import {useState, useEffect} from 'react';
import {loginUserUC} from '../../../../domain/loginUserUC';
import isEmailValid from '../common/helpers/isEmailValid';

const useLoginScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailError, setIsEmailError] = useState(true);
  const [password, setPassword] = useState('');

  // USE EFFECTS
  useEffect(() => {
    setIsEmailError(!isEmailValid(email));
  }, [email]);

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
    await loginUserUC(email, password);
    setIsLoading(false);
  };

  return {
    isLoading,
    email,
    handleEmailChange,
    isEmailError,
    password,
    handlePasswordChange,
    handleLoginClick,
  };
};

export default useLoginScreen;
