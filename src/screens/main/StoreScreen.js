import React, {useState} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import StoreCards from '../../components/StoreCards';

// TODO - add "availableSkins" to user data in firestore
// TODO - I was thinking I need a header, but I don't since I want to use tab stack for the appstack.

const placeholder = require('../../../assets/egg.png')

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
  { name: 'Egg 10weqwe230', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 11qwe1', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 2112', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 31ewe113', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 4eqwe1114', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 51qwe15', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 6we116', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 1e177', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 81qwe18', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 91ewq19', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 11wqeq100', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 2eqw232', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 3e2223', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 4wqe24', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 5qew25', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 6wqe26', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 7eqw27', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 8wqe28', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 9qwe29', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 13qwe400', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 14ewq3211', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 22qew112', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 32341113', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 42341114', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 52eweqw4324115', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 61qq42323216', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 1144277', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 8122343218', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 9123419', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  { name: 'Egg 11134400', img: require('../../../assets/eggFour.png'), taps: 15000, purchasable: false},
  // { name: 'Egg2 6', img: require('../../../assets/egg.png'),  price: 20, purchasable: true},
  // { name: 'Egg 7', img: require('../../../assets/egg.png'),  price: 1000, purchasable: true},
]

/**
 * Store Page
 * @param navigation the navigation object 
 */
const StoreScreen = ({navigation}) =>  {
  const [displayEgg, setDisplayEgg] = useState(placeholder);

  const onNewDisplay = (img) => {
    setDisplayEgg(img);
  }

  return (
    <View style={styles.body}>
      <View style={styles.largeEggView} >
        <Image style={styles.largeEggImage} source={displayEgg}/>
      </View>
      <View style={styles.slideCardsView} >
        <StoreCards 
          data={storeCards} 
          />
      </View>
    </View>
  );
}

/**
 * Styles
 */
const styles = StyleSheet.create({
   body: {
     flex: 1,
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'center',
   },
   largeEggView: {
    flex: 3,
    justifyContent: 'center'
   },
   largeEggImage: {
     width: 260,
     height: 350
   },
   slideCardsView: {
    flex: 1,
   }
});

export default StoreScreen;
