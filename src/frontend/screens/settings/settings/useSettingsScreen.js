import {useState, useEffect} from 'react';
import {getUserEmailUC} from '../../../../domain/getUserEmailUC';
import {getUserEmailVerificationStatusUC} from '../../../../domain/getUserEmailVerificationStatus';
import {sendVerificationEmailUC} from '../../../../domain/sendVerificationEmailUC';

// TODO - Add frontend form validation stuff heree
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

  return {
    isInitialized,
    email,
    emailVerificationStatus,
    language,
    handleSendVerificationEmailClick
  };
};

export default useSettingsScreen;
