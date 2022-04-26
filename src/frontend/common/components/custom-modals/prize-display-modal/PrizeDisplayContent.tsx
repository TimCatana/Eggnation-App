import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  PrizeDisplayContentTopView,
  PrizeDisplayContentTopCenterView,
  PrizeDisplayContentBottomCenterView,
  PrizeDisplayContentBottomView,
} from '../../index';

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

const PrizeDisplayContent: FC<Props> = props => {
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
      <ScrollView style={{flex: 1}}>
        <PrizeDisplayContentTopView displayImage={displayImage} />

        <PrizeDisplayContentTopCenterView prizeTitle={prizeTitle} />

        {isWonPrize && (
          <PrizeDisplayContentBottomCenterView
            isLoading={isLoading}
            navigation={navigation}
            prizeId={prizeId}
            prizeClaimType={prizeClaimType}
            prizeIsClaimed={prizeIsClaimed}
            handleHidePrize={handleHidePrize}
          />
        )}

        <PrizeDisplayContentBottomView prizeDesc={prizeDesc} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 13,
    display: 'flex',
  },
});

export default PrizeDisplayContent;
