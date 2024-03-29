import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LottieView from 'lottie-react-native';
import {
  AvailablePrizesArray,
  WonPrizesArray,
} from '../../../../constants/typeAliases';
import {C_TEXT_LIGHT} from '../../../../constants/Colors';
import {PresentPlaceholder} from '../../../../../assets';
import {PrizeList} from '../index';

interface Props {
  isInitialized: boolean;
  isLoading: boolean;
  isPrizeFetchFailed: boolean;
  prizeFetchFailedText: string;
  data: AvailablePrizesArray | WonPrizesArray | [];
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

const BookshelfContent: FC<Props> = props => {
  const {
    isInitialized,
    isLoading,
    isPrizeFetchFailed,
    prizeFetchFailedText,
    data,
    handleShowPrize,
  } = props;

  return (
    <View style={styles.body}>
      {isInitialized && !isLoading && isPrizeFetchFailed && (
        <View style={styles.errorView}>
          <View style={styles.placeholderView}>
            <LottieView
              style={styles.placeholderLottie}
              source={PresentPlaceholder}
              autoPlay={true}
              loop={false}
              resizeMode={'cover'}
            />
          </View>
          <View style={styles.textView}>
            <Text style={styles.text}>{prizeFetchFailedText}</Text>
          </View>
        </View>
      )}

      {isInitialized && !isLoading && !isPrizeFetchFailed && (
        <PrizeList data={data} handleShowPrize={handleShowPrize} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 13,
  },
  placeholderView: {
    flex: 1,
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  placeholderLottie: {
    width: hp('45%'),
    height: hp('45%'),
  },
  errorView: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textView: {
    flex: 1,
    width: '100%',
  },
  text: {
    fontSize: hp('3%'),
    textAlign: 'center',
    color: C_TEXT_LIGHT,
  },
});

export default BookshelfContent;
