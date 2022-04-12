import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {
  FULL_SHELF,
  SECOND_HALF_SHELF,
  FIRST_HALF_SHELF,
} from '../../../util/ShelfImageConstants';
import PrizeShelfCard from '../PrizeShelfCard';

const PrizeList = props => {
  const {
    data,
    handleShowPrize,
    handleDisplayPrizeTitleChange,
    handleDisplayPrizeDescChange,
    handleDisplayPrizeTypeChange,
    handleDisplayPrizeTierChange,
  } = props;

  return (
    <FlatList
      style={styles.prizeList}
      data={data}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index}) => {
        let bgShelfImage = FULL_SHELF;

        if (index === data.length - 1) {
          bgShelfImage = FULL_SHELF;
        } else {
          if (index % 2 === 1) {
            bgShelfImage = SECOND_HALF_SHELF;
          } else {
            bgShelfImage = FIRST_HALF_SHELF;
          }
        }

        return (
          <PrizeShelfCard
            prize={item}
            bgShelfImage={bgShelfImage}
            handleShowPrize={handleShowPrize}
            handleDisplayPrizeTitleChange={handleDisplayPrizeTitleChange}
            handleDisplayPrizeDescChange={handleDisplayPrizeDescChange}
            handleDisplayPrizeTypeChange={handleDisplayPrizeTypeChange}
            handleDisplayPrizeTierChange={handleDisplayPrizeTierChange}
          />
        );
      }}
      keyExtractor={item => item.prizeId}
    />
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
  },
});

export default PrizeList;
