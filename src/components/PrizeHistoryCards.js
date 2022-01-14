import React from 'react';
import {Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import { useSelector } from 'react-redux';
import auth from '@react-native-firebase/auth';


const giftCard = require("../../assets/icons/gift-card.png");

/**
 * Represents a single card in the NavCards component
 * @param navigation The navigation object
 * @param {string} name The name and navigation string of the card    
 * @importantNote The name MUST be equal to a Stack.Screen name in App.js or else it will fail when pressed
 */
// TODO - probably add a switch case for images
// TODO - maybe move to its own js file
// TODO - add "claim" button that is only clickable if the "prizeClaimed" item in the database is false.
const SinglePrizeCard = ({ name, type }) => {
  const {user} = useSelector(state => state.userReducer)
  console.log(user.emailVerified);

  let img;
  if(type === "gift card") {
    img = giftCard;
  }

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.title}>{name}</Text>
      </View>
      <View style={styles.cardBody}>
        <Image style={styles.image} source={img} />
      </View>
      <View style={styles.cardFooter}>
        <Pressable style={styles.claimButton} onPress={async () => {
          if(!user.emailVerified) {
            console.log('you need to verify your email to claim your prize! Please verify your email in settings');
          } else {
            console.log('claimed, we will update you on the status of your prize in around 1 business day') 
          }
        }}>
          <Text style={styles.claimText}>Claim</Text>
        </Pressable>
      </View>
    </View>
)};

/**
 * Takes an array of objects representing screens that can be navigated 
 * @param { {prizeName: string, prizeType: string, prizeClaimed: 0 || 1, prizeID: string}[] } props.data A manually created object that should be passed from the screen component that these cards will be rendered on
 * @param props.navigation The navigation object
 * @returns A 2*n array of cards each of which navigates to its specified screen
 */
const PrizeHistoryCards = ( props ) => {
  const {data, getHistoryFunc, refreshing} = props;

  const renderItem = ({ item }) => {
    return (
    <SinglePrizeCard 
      name={item.prizeName} 
      type={item.prizeType}
    />
  )};

  // TODO - add pull to refresh in flatlist to reload prizes
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.prizeID}
      numColumns={2}
      refreshing={refreshing}
      onRefresh={getHistoryFunc}
    /> 
  );
}

/**
 * styles
 */
const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    width: (Dimensions.get('window').width / 2) - 20, // Should be margin * 2 
    height: (Dimensions.get('window').height / 3.2) - 20,
    marginHorizontal: 10,
    marginVertical: 7,
    backgroundColor: '#e6e6ea',
  },
  cardHeader: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "blue"
  }, 
  cardBody: {
    flex: 4, 
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "green"
  },
  cardFooter: {
    flex: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black"
  },
  image: {
    width: 120,
    height: 80,
  },
  claimButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 25,
    marginVertical: 7,
    borderRadius: 17,
    backgroundColor: "blue"
  },
  claimText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  }
});

export default PrizeHistoryCards;
