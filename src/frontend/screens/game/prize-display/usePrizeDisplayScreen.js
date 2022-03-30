import {useState, useEffect} from 'react';

// TODO - Add frontend form validation stuff heree
const usePrizeDisplayScreen = () => {
  const [isInitialized, setIsInitialized] = useState({});
  const [prize, setPrize] = useState({});

  useEffect(() => {
    // TODO - get the prize from navigation params
  });

  return {
    prize,
  };
};

export default usePrizeDisplayScreen;
