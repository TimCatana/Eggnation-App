import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {C_BACKGROUND_BOOKSHELF} from '../../../../theme/Colors';
import {BookShelfTopView, PrizeDisplayContent} from '../../index';

interface Props {
  isLoading: boolean;
  prizeId: string;
  prizeTitle: string;
  displayImage: any;
  prizeDesc: string;
  prizeTier: string;
  prizeType: string;
  prizeClaimType: string;
  prizeIsClaimed: boolean;
  isWonPrize: boolean;
  navigation: any;
  handleHidePrize: () => void;
}

const PrizeDisplayModalCenterView: FC<Props> = props => {
  const {
    isLoading,
    prizeId,
    prizeTitle,
    displayImage,
    prizeDesc,
    prizeTier,
    prizeType,
    prizeClaimType,
    prizeIsClaimed,
    isWonPrize,
    navigation,
    handleHidePrize,
  } = props;

  return (
    <View style={styles.body}>
      <BookShelfTopView />
      <PrizeDisplayContent
        isLoading={isLoading}
        prizeId={prizeId}
        prizeTitle={prizeTitle}
        displayImage={displayImage}
        prizeDesc={prizeDesc}
        prizeTier={prizeTier}
        prizeType={prizeType}
        prizeClaimType={prizeClaimType}
        prizeIsClaimed={prizeIsClaimed}
        isWonPrize={isWonPrize}
        navigation={navigation}
        handleHidePrize={handleHidePrize}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 15,
    display: 'flex',
    backgroundColor: C_BACKGROUND_BOOKSHELF,
  },
  loading: {
    position: 'absolute',
    top: hp('43%'),
    right: 0,
    left: 0,
    center: 0,
  },
});

export default PrizeDisplayModalCenterView;
