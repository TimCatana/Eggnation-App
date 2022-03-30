import {useState} from 'react';
import {updateUserEmailUC} from '../../../../domain/updateUserEmailUC';

// TODO - Add frontend form validation stuff heree
const useEditEmailScreen = () => {
  const [newEmail, setNewEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNewEmailChange = value => {
    setNewEmail(value);
  };

  const handlePasswordChange = value => {
    setPassword(value);
  };

  const handleUpdateEmailClick = () => {
    updateUserEmailUC(newEmail, password);
  };

  return {
    newEmail,
    handleNewEmailChange,
    password,
    handlePasswordChange,
    handleUpdateEmailClick
  };
};

export default useEditEmailScreen;
