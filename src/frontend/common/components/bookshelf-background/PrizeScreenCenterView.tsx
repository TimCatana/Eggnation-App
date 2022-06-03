import React, {FC} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  AvailablePrizesArray,
  WonPrizesArray,
} from '../../../../constants/typeAliases';
import {
  C_ACTIVITY_INDICATOR,
  C_BACKGROUND_BOOKSHELF,
} from '../../../../constants/Colors';
import {BookshelfContent, BookShelfTopView} from '../index';

interface Props {
  isInitialized: boolean;
  isLoading: boolean;
  isRefreshing: boolean;
  isPrizeFetchFailed: boolean;
  prizeFetchFailedText: string;
  data: AvailablePrizesArray | WonPrizesArray | [];
  handleRefresh: () => void;
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
  title: string;
}

const PrizeScreenCenterView: FC<Props> = props => {
  const {
    isInitialized,
    isLoading,
    isRefreshing,
    isPrizeFetchFailed,
    prizeFetchFailedText,
    data,
    handleRefresh,
    handleShowPrize,
    title,
  } = props;

  return (
    <View style={styles.body}>
      <BookShelfTopView title={title} />

      <BookshelfContent
        isInitialized={isInitialized}
        isLoading={isLoading}
        isRefreshing={isRefreshing}
        isPrizeFetchFailed={isPrizeFetchFailed}
        prizeFetchFailedText={prizeFetchFailedText}
        data={data}
        handleRefresh={handleRefresh}
        handleShowPrize={handleShowPrize}
      />

      <ActivityIndicator
        style={styles.loading}
        animating={!isInitialized || (isInitialized && isLoading) || (isInitialized && isLoading)}
        size={hp('10%')}
        color={C_ACTIVITY_INDICATOR}
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

export default PrizeScreenCenterView;
