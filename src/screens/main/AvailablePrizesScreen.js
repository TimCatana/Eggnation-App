import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import RealtimeInterface from '../../RealtimeInterface';
import PrizeHistoryCards from '../../components/PrizeHistoryCards';

const rti = new RealtimeInterface();

const AvailablaPrizesScreen = () =>  {
  const [availablePrizes, setAvailablePrizes] = useState([]);
  const [refreshing, setRefreshing] = useState(true);

  useEffect(() => {
    getAvailablePrizes();
  }, []);

  useEffect(() => {
    // console.log("available prizes " + availablePrizes);
  }, [availablePrizes]);

  /**
   * @note please read the documentation to see a potential problem that can occur performance wise. 
   * TODO - link the documentation to the potential list interpretation problem
   */
  const getAvailablePrizes = async() => {
    setRefreshing(true);
    try {
      let result = await rti.getAvailablePrizes() 
      const totalPrizes = [];
      for(let prize in result) {
        totalPrizes.push(result[prize])
      }
      setAvailablePrizes(totalPrizes);
    } catch (err) {
      console.log('Something went wrong fetching prize to firestore: ', err);
    } finally {
      setRefreshing(false);
    }
  } 

  return (
    <View style={styles.body}>
    <Text style={styles.text}>Available prizes</Text>
    <PrizeHistoryCards
      data={availablePrizes}
      getHistoryFunc={getAvailablePrizes}
      refreshing={refreshing}
    />
  </View>
  );
}

const styles = StyleSheet.create({
   body: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
   },
   text: {
     fontSize: 50,
   }
});

export default AvailablaPrizesScreen;
