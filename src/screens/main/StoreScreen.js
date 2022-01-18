import React from 'react';
import {View, StyleSheet} from 'react-native';
import StoreCards from '../../components/StoreCards';

// TODO - add "availableSkins" to user data in firestore
// TODO - I was thinking I need a header, but I don't since I want to use tab stack for the appstack.

/**
 * The egg skins
 * 
 */
// TODO - add key property to each of these cause flatlist automatically looks for one
const storeCards = [
  { name: 'Egg 1', img: require('../../../assets/egg.png'), taps: 0, purchasable: false},
  { name: 'Egg 2', img: require('../../../assets/eggOne.png'),taps: 1000, purchasable: false},
  { name: 'Egg 3', img: require('../../../assets/eggTwo.png'),taps: 5000, purchasable: false},
  { name: 'Egg 4', img: require('../../../assets/eggThree.png'), taps: 10000, purchasable: false},
  { name: 'Egg 6', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 7', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 8', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 9', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 11', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 22', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 33', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 44', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 55', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 66', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 77', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 88', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 99', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 100', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  // { name: 'Egg 6', img: require('../../../assets/egg.png'),  price: 20, purchasable: true},
  // { name: 'Egg 7', img: require('../../../assets/egg.png'),  price: 1000, purchasable: true},
]

/**
 * Store Page
 * @param navigation the navigation object 
 */
const StoreScreen = ({navigation}) =>  {
  return (
    <View style={styles.body}>
      <StoreCards data={storeCards} />
    </View>
  );
}

/**
 * Styles
 */
const styles = StyleSheet.create({
   body: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
   },
   text: {
     fontSize: 50,
     color: 'black'
   }
});

export default StoreScreen;
