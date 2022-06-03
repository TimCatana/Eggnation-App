import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LottieView from 'lottie-react-native';
import {
  AvailablePrizesArray,
  WonPrizesArray,
} from '../../../../constants/typeAliases';
import {
  C_BACKGROUND_BOOKSHELF,
  C_BUTTON_DISABLED,
  C_BUTTON_ENABLED,
  C_TEXT_LIGHT,
  C_TEXT_PRIMARY,
} from '../../../../constants/Colors';
import {PresentPlaceholder} from '../../../../../assets';
import {PrizeList} from '../index';
import CustomButton from '../custom-inputs/CustomButton';

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
}

const BookshelfContent: FC<Props> = props => {
  const {
    isInitialized,
    isLoading,
    isRefreshing,
    isPrizeFetchFailed,
    prizeFetchFailedText,
    data,
    handleRefresh,
    handleShowPrize,
  } = props;

  return (
    <View style={styles.body}>
      {isInitialized && !isLoading && isPrizeFetchFailed && (
        <>
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
          <View style={styles.refreshView}>
            <CustomButton
              label={'Refresh'}
              onPress={handleRefresh}
              disabled={isLoading || !isInitialized || isRefreshing}
              buttonEnabledColor={C_BUTTON_ENABLED}
              buttonDisabledColor={C_BUTTON_DISABLED}
              textColor={C_TEXT_PRIMARY}
              fontSize={hp('2.2%')}
            />
          </View>
        </>
      )}

      {isInitialized && !isLoading && !isPrizeFetchFailed && (
        <PrizeList
          data={data}
          isRefreshing={isRefreshing}
          handleRefresh={handleRefresh}
          handleShowPrize={handleShowPrize}
        />
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
    flex: 7,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textView: {
    flex: 1,
    width: '100%',
  },
  refreshView: {
    flex: 1,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: hp('3%'),
    textAlign: 'center',
    color: C_TEXT_LIGHT,
  },
});

export default BookshelfContent;
