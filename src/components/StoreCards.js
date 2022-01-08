import React from 'react';
import {Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';

/**
 * Represents a single card in the NavCards component
 * @param navigation The navigation object
 * @param {string} name The name and navigation string of the card    
 * @importantNote The name MUST be equal to a Stack.Screen name in App.js or else it will fail when pressed
 */
const RewardSkinCard = ({ name, img, price }) => (
  <Pressable 
    style={styles.card}
    onPress={() => console.log("go to buy page")}
  >
    <View style={styles.cardBody}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.body}>
        <Image style={styles.image} source={img} />
      </View>
      <Text style={styles.desc}>${price}</Text>
    </View>
  </Pressable>
);


const PurchaseSkinCard = ({ name, img, taps }) => (
  <Pressable 
    style={styles.card}
    onPress={() => {
      // if()
      console.log("go to buy page")}}
  >
    <View style={styles.cardBody}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.body}>
        <Image style={styles.image} source={img} />
      </View>
      <Text style={styles.desc}>taps: {taps}</Text>
    </View>
  </Pressable>
);

/**
 * Takes an array of objects representing screens that can be navigated 
 * @param { {name: string}[] } props.data A manually created object that should be passed from the screen component that these cards will be rendered on 
 * @param props.navigation The navigation object
 * @returns A 2*n array of cards each of which navigates to its specified screen
 */
const StoreCards = ( props ) => {
  const {data} = props;

  const renderItem = ({ item }) => {
    if (item.purchasable === false) {
      return(
      <PurchaseSkinCard 
      name={item.name} 
      img={item.img}
      taps={item.taps}
    />
      );
    } else {
      return (
        <RewardSkinCard 
          name={item.name} 
          img={item.img}
          price={item.price}
        />
      )};
    }


  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.name}
        numColumns={2}
      />
    </View> 
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
  cardBody: {
    // backgroundColor: 'orange',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  body: {
    flex: 6,
    // backgroundColor: 'yellow',
  },  
  image: {
    marginTop: 20,
    width: 80,
    height: 100,
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontFamily: 'Exo',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black'
    // backgroundColor: 'red',
  },
  desc: {
    flex:1,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Exo',
    textAlign: 'center',
    color: 'black'
    // backgroundColor: 'blue',
  },
});

export default StoreCards;
