import React from 'react';
import {Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';

/**
 * Represents a single card in the NavCards component
 * @param navigation The navigation object
 * @param {string} name The name and navigation string of the card    
 * @importantNote The name MUST be equal to a Stack.Screen name in App.js or else it will fail when pressed
 */
const SingleStoreCard = ({ name, img, price }) => (
  <Pressable 
    style={styles.card}
    onPress={() => console.log("go to buy page")}
  >
    <View style={styles.header}>
      <Text style={styles.text}>{name}</Text>
    </View>
    <View style={styles.body}>
      <Image style={styles.image} source={img} />
    </View>
    <View style={styles.footer}>
      <Text style={styles.text}>${price}</Text>
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

  const renderItem = ({ item }) => (
    <SingleStoreCard 
      name={item.name} 
      img={item.img}
      price={item.price}
    />
  );

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
    borderRadius: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: (Dimensions.get('window').width / 2) - 20, // Should be margin * 2 
    height: 200,
    margin: 10,
    backgroundColor: '#7F00FF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black'
  },
  image: {
    width: 125,
    height: 150
  },
});

export default StoreCards;
