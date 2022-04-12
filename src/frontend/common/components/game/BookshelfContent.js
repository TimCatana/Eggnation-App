import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {C_TEXT_LIGHT} from '../../../theme/Colors';
import PrizeList from './PrizeList';

const BookshelfContent = props => {
  const {
    isInitialized,
    isLoading,
    isPrizeFetchFailed,
    data,
    handleShowPrize,
    handleDisplayPrizeTitleChange,
    handleDisplayPrizeDescChange,
    handleDisplayPrizeTypeChange,
    handleDisplayPrizeTierChange,
  } = props;

  return (
    <View style={styles.body}>
      {isInitialized && !isLoading && isPrizeFetchFailed && (
        <Text style={styles.text}>Failed to fetch prizes</Text>
      )}

      {isInitialized && !isLoading && !isPrizeFetchFailed && (
        <PrizeList
          data={data}
          handleShowPrize={handleShowPrize}
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
  text: {
    height: hp('15%'),
    color: C_TEXT_LIGHT,
  },
});

export default BookshelfContent;
