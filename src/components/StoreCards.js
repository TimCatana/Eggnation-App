import React, {useState, useRef} from 'react';
import {Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Animated, { useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, interpolate, interpolateNode, Extrapolate, JumpingTransition } from 'react-native-reanimated';



/**
 * Represents a single card in the NavCards component
 * @param navigation The navigation object
 * @param {string} name The name and navigation string of the card    
 * @importantNote The name MUST be equal to a Stack.Screen name in App.js or else it will fail when pressed
 */
const SingleSkin = ({img, translateX, index, scrollRef}) =>{ 
  console.log(translateX);
  console.log(index);

  
  const [ref, setRef] = useState(null);
  
  const width = 120 // TODO - get the cards alignment right and this should be the width of one full skin card




  const skinStyle = useAnimatedStyle(() => {    
    // const scale = interpolate(
    //   translateX.value, 
    //   [(index-1)*width-100, (index-1)*width, (index)*width, (index+1)*width,  (index+1)*width+100], 
    //   [0, 0.4, 1, 0.4, 0],
    //   Extrapolate.CLAMP
    // )

    const opacity = interpolate(
      translateX.value, 
      [(index-1)*width-100, (index-1)*width, (index)*width, (index+1)*width,  (index+1)*width+100], 
      [0, 0.5, 1, 0.5, 0],
      Extrapolate.CLAMP
    )
    return {
      // transform: [{scale}],
      opacity
    }
  })

  return (
    <Animated.View style={[styles.skin, skinStyle]} >
      <Pressable 
        onPress={() => {
          console.log("selected "+ index);
          scrollRef.current.scrollTo({
            x: index*width,
            animated: true
          });
        }}
      >
          <Image style={styles.image} source={img} />
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
  const translateX = useSharedValue(0);

  const scrollRef = useRef();


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
    console.log(event.contentOffset.x);
  })

  return (
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.itemsScrollView}
        ref={scrollRef}
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
                scrollRef={scrollRef}
              />
            );
        })}
      </Animated.ScrollView>
  );
}

/**
 * styles
 */
const styles = StyleSheet.create({ 
  itemsScrollView: {
    backgroundColor: 'red',
    marginLeft: (Dimensions.get('window').width / 3)
  },
  skin: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    width: 100
  }, 
  image: {
    height: 120,
    width: 80,
  } 
});

export default StoreCards;
