import React from 'react';
import {Image, StyleSheet} from 'react-native';
import bookShelfRight from '../../../../../../../assets/backgrounds/bookshelf/book-shelf-right.png';

const AvailablePrizeScreenRightView = () => {
  return (
    <Image style={styles.image} resizeMode="stretch" source={bookShelfRight} />
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

export default AvailablePrizeScreenRightView;
