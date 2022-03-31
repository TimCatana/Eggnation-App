import {useState, useEffect} from 'react';
import {updateUserEmailUC} from '../../../../domain/updateUserEmailUC';
import isEmailValid from '../../auth/common/helpers/isEmailValid';

const useEditEmailScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [isEmailError, setIsEmailError] = useState(true);
  const [password, setPassword] = useState('');
  const [isPasswordError, setIsPasswordError] = useState(true);
  const [isPasswordModalShowing, setIsPasswordModalShowing] = useState(false);

  // UseEffect
  useEffect(() => {
    setIsEmailError(!isEmailValid(newEmail));
  }, [newEmail]);

  useEffect(() => {
    password.length > 1 ? setIsPasswordError(false) : setIsPasswordError(true);
  }, [password]);


  // Text Input
  const handleNewEmailChange = value => {
    setNewEmail(value);
  };

  const handlePasswordChange = value => {
    setPassword(value);
  };

  // button clicked
  const showPasswordModal = () => {
    setIsPasswordModalShowing(true);
  };

  const hidePasswordModal = () => {
    setIsPasswordModalShowing(false);
  };

  const handleUpdateEmailClick = async () => {
    setIsLoading(true);
    await updateUserEmailUC(newEmail, password);
    setIsLoading(false);
  };

  return {
    isLoading,
    newEmail,
    isEmailError,
    handleNewEmailChange,
    password,
    isPasswordError,
    handlePasswordChange,
    isPasswordModalShowing,
    showPasswordModal,
    hidePasswordModal,
    handleUpdateEmailClick,
  };
};

export default useEditEmailScreen;
