import React, {FC} from 'react';
import {Image, StyleSheet} from 'react-native';
import {bookShelfLeft} from '../../../../../assets';

const BookShelfLeftView: FC = () => {
  return (
    <Image style={styles.image} resizeMode="stretch" source={bookShelfLeft} />
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

export default BookShelfLeftView;
