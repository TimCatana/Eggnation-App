import React, { useEffect, useState, useContext } from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import PrizeHistoryCards from '../../components/PrizeHistoryCards';
import {useSelector} from 'react-redux'
import FirestoreInterface from '../../FirestoreInterface';

// TODO - add 'you have not won anything yet!' text if  array of prizes is empty 

const fsi = new FirestoreInterface();

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
    return console.log("history " + history);
  }, [history]);

  const getHistory = async() => {
    setRefreshing(true);
    try {
      let result = await fsi.getPrizeHistory(user.uid) 
      result = await result.map((res) => res); 
      result === null ? console.log("res is null") : setHistory(result); 
    } catch (err) {
      console.log('Something went wrong fetching prize to firestore: ', err);
    } finally {
      setRefreshing(false);
    }
  } 

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.text}>Prize History</Text>
      </View>
      <View style={styles.body}>
        <PrizeHistoryCards
          data={history}
          getHistoryFunc={getHistory}
          refreshing={refreshing}
        />
      </View>
    </View>
  );
}

/**
 * Styles
 */
const styles = StyleSheet.create({
  page: {
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, // TODO - add this to global style
    flex: 1,
    flexDirection: "column",
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red"
  },
  body: {
    flex: 7,
    // backgroundColor: "yellow"
  },
  text: {
    fontSize: 50,
    color: 'black'
  }
});

export default PrizeHistoryScreen;
