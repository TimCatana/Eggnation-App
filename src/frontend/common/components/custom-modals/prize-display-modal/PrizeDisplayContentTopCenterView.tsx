import React, {FC} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {bookShelfTop} from '../../../../../../assets';

interface Props {
  prizeTitle: string;
}

const PrizeDisplayContentTopCenterView: FC<Props> = props => {
  const {prizeTitle} = props;

  return (
    <View style={styles.body}>
      <Image
        style={styles.backgroundShelfImage}
        resizeMode="stretch"
        source={bookShelfTop}
      />
      <View style={styles.titleView}>
        <Text style={styles.titleText}>{prizeTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: hp('9%'),
  },
  backgroundShelfImage: {
    width: '100%',
    height: '100%',
  },
  titleView: {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: hp('4.4%'),
    marginBottom: hp('2%'),
  },
});

export default PrizeDisplayContentTopCenterView;
