import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {C_BACKGROUND_BOOKSHELF} from '../../../../../constants/Colors';
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
  prizeClaimed: boolean;
  prizeDelivered: boolean;
  prizeWonData: string;
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
    prizeClaimed,
    prizeDelivered,
    prizeWonData,
    isWonPrize,
    navigation,
    handleHidePrize,
  } = props;

  return (
    <View style={styles.body}>
      <BookShelfTopView title="" />
      <PrizeDisplayContent
        isLoading={isLoading}
        prizeId={prizeId}
        prizeTitle={prizeTitle}
        displayImage={displayImage}
        prizeDesc={prizeDesc}
        prizeTier={prizeTier}
        prizeType={prizeType}
        prizeClaimType={prizeClaimType}
        prizeClaimed={prizeClaimed}
        prizeDelivered={prizeDelivered}
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
});

export default PrizeDisplayModalCenterView;
