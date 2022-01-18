import React from 'react';
import {Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Animated, { useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, interpolate, interpolateNode, Extrapolation } from 'react-native-reanimated';



/**
 * Represents a single card in the NavCards component
 * @param navigation The navigation object
 * @param {string} name The name and navigation string of the card    
 * @importantNote The name MUST be equal to a Stack.Screen name in App.js or else it will fail when pressed
 */
// const RewardSkinCard = ({ name, img, price }) => (
//   <Pressable 
//     style={styles.card}
//     onPress={() => console.log("go to buy page")}
//   >
//     <View style={styles.cardBody}>
//       <Text style={styles.title}>{name}</Text>
//       <View style={styles.body}>
//         <Image style={styles.image} source={img} />
//       </View>
//       <Text style={styles.desc}>${price}</Text>
//     </View>
//   </Pressable>
// );


const SingleSkin = ({ name, img, taps, translateX, index }) =>{ 
  console.log(translateX);

  const width = (Dimensions.get('window').width / 2) - 20


  const skinStyle = useAnimatedStyle(() => {
    
    const scale = interpolate(
      translateX.value, 
      [(index-2)*width, (index-1)*width, (index)*width], 
      [0.6, 1, 0.6],
      )

    return {
      transform: [{scale}]
    }
  })

  return (
    <Animated.View
    style={[styles.card, skinStyle]}
    >
    <Pressable 
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
    </Animated.View>
);

      }

/**
 * Takes an array of objects representing screens that can be navigated 
 * @param { {name: string}[] } props.data A manually created object that should be passed from the screen component that these cards will be rendered on 
 * @param props.navigation The navigation object
 * @returns A 2*n array of cards each of which navigates to its specified screen
 */
const StoreCards = ( props ) => {
  const {data} = props;

  // const renderCard= ({ item }, translateX) => {
  //   console.log(item);
  //   // console.log(item);

  //   if (item.purchasable === false) {
  //     return(
  //       <PurchaseSkinCard 
  //         name={item.name} 
  //         img={item.img}
  //         taps={item.taps}
  //       />
  //     );
  //   } else {
  //     return (
  //       <RewardSkinCard 
  //         name={item.name} 
  //         img={item.img}
  //         price={item.price}
  //       />
  //     )};
  //   }



    const translateX = useSharedValue(0);


    /**
     * @param {
     *  "contentInset":{
     *     "bottom":0,
     *     "left":0,
     *     "right":0,
     *     "top":0
     *   },
     *   "contentOffset":{
     *     "x":68.36363983154297,
     *     "y":0
     *   },
     *   "contentSize":{
     *     "height":665.0908813476562,
     *     "width":1374.54541015625
     *   },
     *   "eventName":"2997onScroll",
     *   "layoutMeasurement":{
     *     "height":665.0908813476562,
     *     "width":392.7272644042969
     *   },
     *   "responderIgnoreScroll":true,
     *   "target":2997,
     *   "velocity":{
     *     "x":0.23076923191547394,
     *     "y":0
     *   }
     * } event 
     */
    const scrollHandler = useAnimatedScrollHandler((event) => {
      translateX.value = event.contentOffset.x;
    })

  return (
    <View>
      {/* <Animated.FlatList
        contentContainerStyle={styles.listView}
        scrollEventThrottle={16}
        data={data}
        renderItem={(item) => {return (renderCard(item))}}
        extraData={translateX.value}
        keyExtractor={item => item.name}
        numColumns={1}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
      />*/}

      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listView}
      >
        {data.map((skin, index) => {
            return (
              <SingleSkin
                key={skin.name}
                name={skin.name} 
                img={skin.img}
                taps={skin.taps}
                translateX={translateX}
                index={index}
              />
            );
        })}
      </Animated.ScrollView>


    </View> 
  );
}

/**
 * styles
 */
const styles = StyleSheet.create({ 
  storeView: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'flex-end'
  },
  listView: {
    alignItems: 'flex-end'
  },
  card: {
    borderRadius: 20,
    width: (Dimensions.get('window').width / 2) - 20, // Should be margin * 2 
    height: (Dimensions.get('window').height / 3.2) - 20,
    marginHorizontal: 10,
    marginVertical: 7,
    // backgroundColor: '#e6e6ea',
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
