import {useState, useEffect} from 'react';
import {registerUserUC} from '../../../../domain/registerUserUC';
import isEmailValid from '../common/helpers/isEmailValid';
import isPasswordValid from '../common/helpers/isPasswordValid';
import isConfirmPasswordValid from '../common/helpers/isConfirmPasswordValid';

const useRegisterScreen = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('');
  const [isEmailError, setIsEmailError] = useState(true);
  const [password, setPassword] = useState('');
  const [isPasswordError, setIsPasswordError] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isConfirmPasswordError, setIsConfirmPasswordError] = useState(true);

  // UseEffects
  useEffect(() => {
    setIsEmailError(!isEmailValid(email))
  }, [email]);

  useEffect(() => {
    setIsPasswordError(!isPasswordValid(password))
    setIsConfirmPasswordError(!isConfirmPasswordValid(password, confirmPassword))
  }, [password]);

  useEffect(() => {
    setIsConfirmPasswordError(!isConfirmPasswordValid(password, confirmPassword))
  }, [confirmPassword]);

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
    setIsLoading(true)
    await registerUserUC(email, password);
    setIsLoading(false)
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
