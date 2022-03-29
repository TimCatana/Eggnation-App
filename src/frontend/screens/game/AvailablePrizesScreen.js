import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getAvailablePrizesUC} from '../../../domain/getAvailablePrizesUC';
import {SUCCESS} from '../../util/Results';
import PrizeShelfCard from '../../components/common/PrizeShelfCard';


const AvailablePrizesScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPrizeFetchFailed, setIsPrizeFetchFailed] = useState(true);
  const [availablePrizes, setAvailablePrizes] = useState([]);
  const [isShowingPrize, setIsShowingPrize] = useState(false);

  useEffect(() => {
    initialPrizeFetch();
  }, []);

  const initialPrizeFetch = async () => {
    await getAvailablePrizes();
    setIsLoading(false);
  };

  const getAvailablePrizes = async () => {
    const result = await getAvailablePrizesUC();

    setAvailablePrizes(result.data);

    if (result.status === SUCCESS) {
      setIsPrizeFetchFailed(false);
    }
  };

  const handleShowPrize = (value) => {
    setIsShowingPrize(value)
  }

  return (
    <View style={styles.body}>
      {isLoading && <Text>Loading</Text>}
      {!isLoading && isPrizeFetchFailed && <Text>Failed to fetch prizes</Text>}
      {!isLoading && !isPrizeFetchFailed && (
        <>
          {availablePrizes.map(availablePrize => (
            <PrizeShelfCard
              key={availablePrize.prizeId}
              prize={availablePrize}
              handleShowPrize={handleShowPrize}
            />
          ))}
          <Text style={styles.text}>ssdd</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
  },
});

export default AvailablePrizesScreen;
