import {useState} from 'react';
import {updateUserPasswordUC} from '../../../../domain/updateUserPasswordUC';

// TODO - Add frontend form validation stuff heree
const useEditPasswordScreen = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');

  const handleNewPasswordChange = value => {
    setNewPassword(value);
  };

  const handleConfirmPasswordChange = value => {
    setConfirmPassword(value);
  };

  const handleCurrentPasswordChange = value => {
    setCurrentPassword(value);
  };

  const handleUpdatePasswordClick = () => {
    updateUserPasswordUC(newPassword, currentPassword);
  };

  return {
    newPassword,
    handleNewPasswordChange,
    confirmPassword,
    handleConfirmPasswordChange,
    currentPassword,
    handleCurrentPasswordChange,
    handleUpdatePasswordClick,
  };
};

export default useEditPasswordScreen;
