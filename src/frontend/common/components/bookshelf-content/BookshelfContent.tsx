import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {C_TEXT_LIGHT} from '../../../theme/Colors';
import PrizeList from '../prize-list/PrizeList';

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
          <Text style={styles.text}>{prizeFetchFailedText}</Text>
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
  errorView: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: hp('3%'),
    width: '75%',
    textAlign: 'center',
    color: C_TEXT_LIGHT,
  },
});

export default BookshelfContent;
