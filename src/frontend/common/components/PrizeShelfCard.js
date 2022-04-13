import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import firstHalfShelf from '../../../../assets/firstHalfShelf.png';
import secondHalfShelf from '../../../../assets/secondHalfShelf.png';
import fullShelf from '../../../../assets/fullShelf.png';

import phoneImage from '../../../../assets/phone.png';
import earBudsImage from '../../../../assets/earbuds.png';
import hoodieImage from '../../../../assets/hoodie.png';
import laptopImage from '../../../../assets/laptop.png';
import cashImage from '../../../../assets/cash.png';
import tabletImage from '../../../../assets/tablet.png';
import shirtImage from '../../../../assets/shirt.png';
import presentImage from '../../../../assets/present.png';
import {
  FIRST_HALF_SHELF,
  FULL_SHELF,
  SECOND_HALF_SHELF,
} from '../../util/ShelfImageConstants';

const getDisplayImage = prizeType => {
  if (prizeType === 'phone') {
    return phoneImage;
  } else if (prizeType === 'tablet') {
    return tabletImage;
  } else if (prizeType === 'laptop') {
    return laptopImage;
  } else if (prizeType === 'earbuds') {
    return earBudsImage;
  } else if (prizeType === 'shirt') {
    return shirtImage;
  } else if (prizeType === 'hoodie') {
    return hoodieImage;
  } else if (prizeType === 'cash') {
    return cashImage;
  } else {
    return presentImage;
  }
};

const getShelfImage = bgShelfImage => {
  if (bgShelfImage === FIRST_HALF_SHELF) {
    return firstHalfShelf;
  } else if (bgShelfImage === SECOND_HALF_SHELF) {
    return secondHalfShelf;
  } else if (bgShelfImage === FULL_SHELF) {
    return fullShelf;
  }
};

const PrizeShelfCard = props => {
  const {
    prize,
    bgShelfImage,
    handleShowPrize,
    handleDisplayPrizeTitleChange,
    handleDisplayPrizeDescChange,
    handleDisplayPrizeTypeChange,
    handleDisplayPrizeTierChange,
  } = props;


  const displayImage = getDisplayImage(prize.prizeType);
  const shelfImage = getShelfImage(bgShelfImage);

  return (
    <View style={styles.body} >
      <ImageBackground
        style={styles.backgroundContainer}
        source={shelfImage}
        resizeMode="stretch"
      />
      <Pressable
        style={styles.pressable}
        onPress={() => {
          console.log('prize clicked!');
          handleDisplayPrizeTitleChange(prize.prizeTitle);
          handleDisplayPrizeDescChange(prize.prizeDesc);
          handleDisplayPrizeTypeChange(prize.prizeType);
          handleDisplayPrizeTierChange(prize.prizeTier);
          handleShowPrize();
        }}>
        <Image
          style={styles.image}
          source={displayImage}
          resizeMode="contain"
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    height: hp('25%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#29211F',
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  pressable: {
    elevation: 20,
    height: '50%',
    width: '50%',
    marginBottom: hp('5%'),
    // backgroundColor: 'red'
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'relative',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
});

export default PrizeShelfCard;
