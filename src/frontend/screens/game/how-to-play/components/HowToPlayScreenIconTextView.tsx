import React, {FC} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

interface Props {
  image: any;
  text: string;
  height: number | string;
  width: number | string;
}

const HowToPlayScreenIconTextView: FC<Props> = props => {
  const {image, text, height, width} = props;

  return (
    <View style={{height: height, width: width, marginBottom: hp('3%')}}>
      <View style={styles.imageView}>
        <Image source={image} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.textView}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageView: {
    width: '100%',
    height: '60%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textView: {
    width: '100%',
    height: '40%',
  },
  text: {
    alignSelf: 'center',
    fontSize: hp('3%'),
    color: 'white',
    paddingTop: hp('2%'),
  },
});

export default HowToPlayScreenIconTextView;
