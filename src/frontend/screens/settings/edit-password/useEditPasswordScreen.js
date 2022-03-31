import {useState, useEffect} from 'react';
import {updateUserPasswordUC} from '../../../../domain/updateUserPasswordUC';
import isPasswordValid from '../../auth/common/helpers/isPasswordValid';
import isConfirmPasswordValid from '../../auth/common/helpers/isConfirmPasswordValid';

// TODO - Add frontend form validation stuff heree
const useEditPasswordScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [isNewPasswordError, setIsNewPasswordError] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isConfirmPasswordError, setIsConfirmPasswordError] = useState(true);
  const [currentPassword, setCurrentPassword] = useState('');
  const [isCurrentPasswordError, setIsCurrentPasswordError] = useState(true);
  const [isPasswordModalShowing, setIsPasswordModalShowing] = useState(false);

  // USE EFFECTS
  useEffect(() => {
    setIsNewPasswordError(!isPasswordValid(newPassword));
    setIsConfirmPasswordError(
      !isConfirmPasswordValid(newPassword, confirmPassword),
    );
  }, [newPassword]);

  useEffect(() => {
    setIsConfirmPasswordError(
      !isConfirmPasswordValid(newPassword, confirmPassword),
    );
  }, [confirmPassword]);

  useEffect(() => {
    currentPassword.length > 1
      ? setIsCurrentPasswordError(false)
      : setIsCurrentPasswordError(true);
  }, [currentPassword]);

  // TEXT INPUTS
  const handleNewPasswordChange = value => {
    setNewPassword(value);
  };

  const handleConfirmPasswordChange = value => {
    setConfirmPassword(value);
  };

  const handleCurrentPasswordChange = value => {
    setCurrentPassword(value);
  };

  // BUTTON CLICKS
  const showPasswordModal = () => {
    setIsPasswordModalShowing(true);
  };

  const hidePasswordModal = () => {
    setIsPasswordModalShowing(false);
  };

  const handleUpdatePasswordClick = async () => {
    setIsLoading(true);
    await updateUserPasswordUC(newPassword, currentPassword);
    setIsLoading(false);
  };

  return {
    newPassword,
    handleNewPasswordChange,
    isNewPasswordError,
    confirmPassword,
    handleConfirmPasswordChange,
    isConfirmPasswordError,
    currentPassword,
    handleCurrentPasswordChange,
    isCurrentPasswordError,
    showPasswordModal,
    hidePasswordModal,
    handleUpdatePasswordClick,
    isPasswordModalShowing
  };
};

export default useEditPasswordScreen;
