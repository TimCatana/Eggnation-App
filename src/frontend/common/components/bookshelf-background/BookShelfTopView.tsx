import React, {FC} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {bookShelfTop} from '../../../../../assets';
import {
  C_BACKGROUND_BOOKSHELF,
  C_TEXT_BOOKSHELF_TITLE,
} from '../../../theme/Colors';

interface Props {
  title: string;
}

const BookShelfTopView: FC<Props> = props => {
  const {title} = props;

  return (
    <View style={styles.body}>
      <Image style={styles.image} resizeMode="stretch" source={bookShelfTop} />
      <View style={styles.textView}>
        <Text style={styles.text}>{title}</Text>
      </View>
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
  textView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    right: 0,
    top: '10%',
    alignItems: 'center',
  },
  text: {
    fontSize: hp('3%'),
    fontWeight: '500',
    color: C_TEXT_BOOKSHELF_TITLE,
  },
});

export default BookShelfTopView;
