import React, {FC} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {
  FULL_SHELF,
  FIRST_HALF_SHELF,
  SECOND_HALF_SHELF,
} from '../../../util/ShelfImageConstants';
import PrizeShelfCard from '../prize-shelf-card/PrizeShelfCard';

interface Props {
  data: any;
  handleShowPrize: () => void;
  handleDisplayPrizeIdChange: (value: string) => void;
  handleDisplayPrizeTitleChange: (value: string) => void;
  handleDisplayPrizeDescChange: (value: string) => void;
  handleDisplayPrizeTypeChange: (value: string) => void;
  handleDisplayPrizeTierChange: (value: string) => void;
}

const PrizeList: FC<Props> = props => {
  const {
    data,
    handleShowPrize,
    handleDisplayPrizeIdChange,
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
            handleDisplayPrizeIdChange={handleDisplayPrizeIdChange}
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
  prizeList: {},
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
