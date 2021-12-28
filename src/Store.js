import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import StoreCards from './StoreCards';

const storeCards = [
  { name: 'Egg 1', img: require('../assets/egg.png'),  price: 10},
  { name: 'Egg 2', img: require('../assets/egg.png'),  price: 15},
  { name: 'Egg 3', img: require('../assets/egg.png'),  price: 15},
  { name: 'Egg 4', img: require('../assets/egg.png'),  price: 15},
  { name: 'Egg 5', img: require('../assets/egg.png'),  price: 20},
  { name: 'Egg 6', img: require('../assets/egg.png'),  price: 20},
  { name: 'Egg 7', img: require('../assets/egg.png'),  price: 1000}
]
const Store = ({navigation}) =>  {
  return (
    <View style={styles.body}>
      <StoreCards data={storeCards} />
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

export default Store;
