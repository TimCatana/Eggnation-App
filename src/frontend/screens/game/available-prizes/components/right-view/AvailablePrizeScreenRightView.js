import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {C_BACKGROUND_BOOKSHELF} from '../../../../../theme/Colors';
import bookShelfRight from '../../../../../../../assets/backgrounds/bookshelf/book-shelf-right.png';

const AvailablePrizeScreenRightView = () => {
  return (
    <Image style={styles.image} resizeMode="stretch" source={bookShelfRight} />
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    backgroundColor: C_BACKGROUND_BOOKSHELF,
  },
});

export default AvailablePrizeScreenRightView;
