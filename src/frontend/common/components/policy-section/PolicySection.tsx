import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {C_TEXT_LIGHT} from '../../../../constants/Colors';

interface Props {
  title: string;
  content: string;
}

const PolicySection: FC<Props> = props => {
  const {title, content} = props;

  return (
    <View style={styles.body}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    marginHorizontal: wp('2%'),
  },
  title: {
    fontWeight: 'bold',
    fontSize: hp('5%'),
    color: C_TEXT_LIGHT,
    marginBottom: hp('1%'),
  },
  text: {
    fontSize: hp('2.5%'),
    textAlign: 'justify',
    color: C_TEXT_LIGHT,
    marginBottom: hp('3%'),
  },
});

export default PolicySection;
