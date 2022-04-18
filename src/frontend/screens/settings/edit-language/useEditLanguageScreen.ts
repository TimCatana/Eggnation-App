import {useState} from 'react';

const useEditLanguageScreen = () => {
  const [language, setLanguage] = useState('EN');

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
  };

  return {
    language,
    handleLanguageChange,
  };
};

export default useEditLanguageScreen;
