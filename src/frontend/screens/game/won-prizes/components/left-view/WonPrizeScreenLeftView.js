import React from 'react';
import {Image, StyleSheet} from 'react-native';
import bookShelfLeft from '../../../../../../../assets/backgrounds/bookshelf/book-shelf-left.png';

const WonPrizeScreenLeftView = () => {
  return (
    <Image style={styles.image} resizeMode="stretch" source={bookShelfLeft} />
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

export default WonPrizeScreenLeftView;
