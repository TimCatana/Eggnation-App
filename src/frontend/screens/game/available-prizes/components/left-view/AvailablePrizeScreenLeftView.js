import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {C_BACKGROUND_BOOKSHELF} from '../../../../../theme/Colors';
import bookShelfLeft from '../../../../../../../assets/backgrounds/bookshelf/book-shelf-left.png';

const AvailablePrizeScreenLeftView = () => {
  return (
    <Image style={styles.image} resizeMode="stretch" source={bookShelfLeft} />
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    backgroundColor: C_BACKGROUND_BOOKSHELF,
  },
});

export default AvailablePrizeScreenLeftView;
