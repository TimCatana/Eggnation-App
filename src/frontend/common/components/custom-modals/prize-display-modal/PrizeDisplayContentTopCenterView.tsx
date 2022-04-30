import React, {FC} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {bookShelfTop} from '../../../../../../assets';
import {C_TEXT_BOOKSHELF_TITLE} from '../../../../theme/Colors';

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
      <ScrollView
        style={styles.titleView}
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal>
        <Text style={styles.titleText}>{prizeTitle}</Text>
      </ScrollView>
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
    display: 'flex',
    position: 'absolute',
  },
  titleText: {
    fontSize: hp('4.4%'),
    marginBottom: hp('2%'),
    color: C_TEXT_BOOKSHELF_TITLE,
  },
});

export default PrizeDisplayContentTopCenterView;
