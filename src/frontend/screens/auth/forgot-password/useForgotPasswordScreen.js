import {useState, useEffect} from 'react';
import {sendForgotPasswordEmailUC} from '../../../../domain/sendForgotPasswordEmailUC';
import isEmailValid from '../common/helpers/isEmailValid';

  // TODO - Add frontend form validation stuff heree
const useForgotPasswordScreen = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('');
  const [isEmailError, setIsEmailError] = useState(true)

  useEffect(() => {
    setIsEmailError(!isEmailValid(email))
  })

  const handleEmailChange = value => {
    setEmail(value);
  };

  const handleSendForgotPasswordEmailClick = async () => {
    setIsLoading(true)
    await sendForgotPasswordEmailUC(email);
    setIsLoading(false)
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
