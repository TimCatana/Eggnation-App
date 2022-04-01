import {useState, useEffect} from 'react';
import {getUserEmailUC} from '../../../../domain/getUserEmailUC';
import {getUserEmailVerificationStatusUC} from '../../../../domain/getUserEmailVerificationStatus';
import {sendVerificationEmailUC} from '../../../../domain/sendVerificationEmailUC';
import {logoutUserUC} from '../../../../domain/logoutUserUC';

// TODO - refresh token each time the user goes to settings screen. The should rarely go here so it should not be that expensive
const useSettingsScreen = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [email, setEmail] = useState('');
  const [emailVerificationStatus, setEmailVerificationStatus] = useState('');
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = () => {
    const email = getUserEmailUC();
    const emailVerificationStatus = getUserEmailVerificationStatusUC();

    setEmail(email);
    setEmailVerificationStatus(emailVerificationStatus);
    setIsInitialized(true);
  };

  const handleSendVerificationEmailClick = async () => {
    await sendVerificationEmailUC();
  };

  const logoutUser = () => {
    logoutUserUC();
  };

  return {
    isInitialized,
    email,
    emailVerificationStatus,
    language,
    handleSendVerificationEmailClick,
    logoutUser,
  };
};

export default useSettingsScreen;
