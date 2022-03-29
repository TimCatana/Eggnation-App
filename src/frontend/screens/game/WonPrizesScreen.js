import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {getWonPrizesUC} from '../../../domain/getWonPrizesUC';
import {SUCCESS} from '../../util/Results';
import {CLAIM_PRIZE_SCREEN} from '../../util/NavigationConstants';
import PrizeShelfCard from '../../components/common/PrizeShelfCard';

const WonPrizesScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPrizeFetchFailed, setIsPrizeFetchFailed] = useState(true);
  const [isShowingPrize, setIsShowingPrize] = useState(false);
  const [wonPrizes, setWonPrizes] = useState([]);

  useEffect(() => {
    initialPrizeFetch();
  }, []);

  const initialPrizeFetch = async () => {
    await getWonPrizes();
    setIsLoading(false);
  };

  const getWonPrizes = async () => {
    const result = await getWonPrizesUC();

    setWonPrizes(result.data);

    if (result.status === SUCCESS) {
      setIsPrizeFetchFailed(false);
    }
  };

  const handleShowPrize = value => {
    setIsShowingPrize(value);
  };

  return (
    <View style={styles.body}>
      {isLoading && <Text>Loading</Text>}
      {!isLoading && isPrizeFetchFailed && <Text>Failed to fetch prizes</Text>}
      {!isLoading && !isPrizeFetchFailed && (
        <>
          {wonPrizes.map(wonPrize => (
            <PrizeShelfCard
              key={wonPrize.prizeId}
              prize={wonPrize}
              handleShowPrize={handleShowPrize}
            />
          ))}
          <Button
            title="go to claimPrizesScreen"
            onPress={() => {
              navigation.navigate(CLAIM_PRIZE_SCREEN);
            }}
          />
        </>
      )}

      {isShowingPrize && <Text>SHOWING PRIZE</Text>}
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
    fontSize: 20,
  },
});

export default WonPrizesScreen;
