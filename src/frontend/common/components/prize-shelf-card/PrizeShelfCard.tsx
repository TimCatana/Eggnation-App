import React, {FC} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Pressable,
  ImageBackground,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {C_BACKGROUND_BOOKSHELF} from '../../../../constants/Colors';

import usePrizeShelfCard from './usePrizeShelfCard';

interface Props {
  prize: any;
  bgShelfImage: string;
  handleShowPrize: (
    prizeId: string,
    prizeTitle: string,
    prizeDesc: string,
    prizeType: string,
    prizeTier: string,
    prizeClaimType: string,
    prizeWonDate: string,
    prizeClaimed: boolean,
    prizeDelivered: boolean,
  ) => void;
}

const PrizeShelfCard: FC<Props> = props => {
  const {prize, bgShelfImage, handleShowPrize} = props;
  const {getDisplayImage, getShelfImage} = usePrizeShelfCard();

  const displayImage = getDisplayImage(prize.prizeType);
  const shelfImage = getShelfImage(bgShelfImage);

  const handlePrizeClick = () => {
    // console.log(
    //   `${prize.prizeId} ${prize.prizeTitle} ${prize.prizeDesc} ${prize.prizeType} ${prize.prizeTier} ${prize.prizeClaimType} ${prize.prizeClaimed} ${prize.prizeDelivered} ${prize.prizeWonDate}`,
    // );

    // Type checks are done in backend, the types should be valid if the user isn't messing with the app
    handleShowPrize(
      prize.prizeId,
      prize.prizeTitle,
      prize.prizeDesc,
      prize.prizeType,
      prize.prizeTier,
      prize.prizeClaimType,
      prize.prizeWonDate,
      prize.prizeClaimed,
      prize.prizeDelivered,
    );
  };

  return (
    <View style={styles.body}>
      <ImageBackground
        style={styles.backgroundContainer}
        source={shelfImage}
        resizeMode="stretch"
      />
      <Pressable style={styles.pressable} onPress={handlePrizeClick}>
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
    backgroundColor: C_BACKGROUND_BOOKSHELF,
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
