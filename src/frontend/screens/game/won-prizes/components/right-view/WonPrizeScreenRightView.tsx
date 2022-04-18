import React, {FC} from 'react';
import {Image, StyleSheet} from 'react-native';
import {bookShelfRight} from '../../../../../../../assets';

const WonPrizeScreenRightView: FC = () => {
  return (
    <Image style={styles.image} resizeMode="stretch" source={bookShelfRight} />
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

export default WonPrizeScreenRightView;
