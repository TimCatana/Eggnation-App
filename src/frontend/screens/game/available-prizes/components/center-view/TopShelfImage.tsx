import React, {FC} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {C_BACKGROUND_BOOKSHELF} from '../../../../../theme/Colors';
import {bookShelfTop} from '../../../../../../../assets';

const TopShelfImage: FC = () => {
  return (
    <View style={styles.body}>
      <Image style={styles.image} resizeMode="stretch" source={bookShelfTop} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: C_BACKGROUND_BOOKSHELF,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default TopShelfImage;
