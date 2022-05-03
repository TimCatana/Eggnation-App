import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {PCT_TRANSFER, PCT_DELIVERABLE} from '../../../../../constants/Constants';
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
  prizeClaimed: boolean;
  prizeDelivered: boolean;
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
    prizeClaimed,
    prizeDelivered,
    isWonPrize,
    navigation,
    handleHidePrize,
  } = props;

  return (
    <View style={styles.body}>
      <ScrollView style={{flex: 1}}>
        <PrizeDisplayContentTopView displayImage={displayImage} />

        <PrizeDisplayContentTopCenterView prizeTitle={prizeTitle} />

        {/* only show button if the prize is "claimable". That is, if personal information (e.g. address) is required in order for the user to get the prize */}
        {isWonPrize &&
          (prizeClaimType === PCT_DELIVERABLE ||
            prizeClaimType === PCT_TRANSFER) && (
            <PrizeDisplayContentBottomCenterView
              isLoading={isLoading}
              navigation={navigation}
              prizeId={prizeId}
              prizeClaimType={prizeClaimType}
              handleHidePrize={handleHidePrize}
              isClaimed={
                isLoading ||
                (prizeClaimType !== PCT_DELIVERABLE &&
                  prizeClaimType !== PCT_TRANSFER) ||
                prizeClaimed ||
                prizeDelivered
              }
            />
          )}

        <PrizeDisplayContentBottomView prizeDesc={prizeDesc} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 13, // Need this because it shares space with the bookshelf top image
    display: 'flex',
  },
});

export default PrizeDisplayContent;
