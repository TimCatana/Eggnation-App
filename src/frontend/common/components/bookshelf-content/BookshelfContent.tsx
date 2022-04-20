import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {C_TEXT_LIGHT} from '../../../theme/Colors';
import {PrizeList} from '../index';
import LottieView from 'lottie-react-native';
import {PresentPlaceholder} from '../../../../../assets';
// import PrizeList from '../prize-list/PrizeList';

interface Props {
  isInitialized: boolean;
  isLoading: boolean;
  isPrizeFetchFailed: boolean;
  prizeFetchFailedText: string;
  data: any; // TODO change to a specific type
  handleShowPrize: () => void;
  handleDisplayPrizeIdChange: (value: string) => void;
  handleDisplayPrizeTitleChange: (value: string) => void;
  handleDisplayPrizeDescChange: (value: string) => void;
  handleDisplayPrizeTypeChange: (value: string) => void;
  handleDisplayPrizeTierChange: (value: string) => void;
}

const BookshelfContent: FC<Props> = props => {
  const {
    isInitialized,
    isLoading,
    isPrizeFetchFailed,
    prizeFetchFailedText,
    data,
    handleShowPrize,
    handleDisplayPrizeIdChange,
    handleDisplayPrizeTitleChange,
    handleDisplayPrizeDescChange,
    handleDisplayPrizeTypeChange,
    handleDisplayPrizeTierChange,
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
        <PrizeList
          data={data}
          handleShowPrize={handleShowPrize}
          handleDisplayPrizeIdChange={handleDisplayPrizeIdChange}
          handleDisplayPrizeTitleChange={handleDisplayPrizeTitleChange}
          handleDisplayPrizeDescChange={handleDisplayPrizeDescChange}
          handleDisplayPrizeTypeChange={handleDisplayPrizeTypeChange}
          handleDisplayPrizeTierChange={handleDisplayPrizeTierChange}
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
    // flex: 1,
    // backgroundColor: 'blue',
    fontSize: hp('3%'),
    // width: '75%',
    textAlign: 'center',
    color: C_TEXT_LIGHT,
  },
});

export default BookshelfContent;