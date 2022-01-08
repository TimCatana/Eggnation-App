import React, { useEffect, useState, useContext } from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import PrizeHistoryCards from '../../components/PrizeHistoryCards';
import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux'



// TODO - add shimmering effect while prizes are loading

/**
 * PrizeHistory Page
 */
const PrizeHistoryScreen = () =>  {
  const [history, setHistory] = useState([]);
  const [refreshing, setRefreshing] = useState(true);
  const {user} = useSelector(state => state.userReducer)

  useEffect(() => {
    getHistory();
  }, []);

  useEffect(() => {
    console.log("history " + history);
  }, [history]);


  const getHistory = async() => {
    setRefreshing(true);
    try {
      let result = await firestore().collection('users').doc(user.uid)
      .get()
      .then(documentSnapshot => documentSnapshot.get('prizes'))
      result = await result.map((res) => JSON.stringify(res)); 
      result === null ? console.log("res is null") : setHistory(result); 
    } catch (err) {
      console.log('Something went wrong fetching prize to firestore: ', err);
    } finally {
      setRefreshing(false);
    }
  } 

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Prize History</Text>
      <PrizeHistoryCards
        data={history}
        getHistoryFunc={getHistory}
        refreshing={refreshing}
      />
    </View>
  );
}

/**
 * Styles
 */
const styles = StyleSheet.create({
   body: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, // TODO - add this to global style
     flex: 1,
     backgroundColor: 'white',
     justifyContent: 'center',
     alignItems: 'center',
   },
   text: {
     fontSize: 50,
     color: 'black'
   }
});

export default PrizeHistoryScreen;
