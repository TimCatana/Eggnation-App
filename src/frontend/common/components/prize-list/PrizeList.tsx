import React, {FC} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {
  SI_FULL_SHELF,
  SI_FIRST_HALF_SHELF,
  SI_SECOND_HALF_SHELF,
} from '../../../../constants/Constants';
import {PrizeShelfCard} from '../index';
interface Props {
  data: any;
  handleShowPrize: (
    prizeId: string,
    prizeTitle: string,
    prizeDesc: string,
    prizeType: string,
    prizeTier: string,
  ) => void;
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
        let bgShelfImage = SI_FULL_SHELF;

        if (index === data.length - 1) {
          bgShelfImage = SI_FULL_SHELF;
        } else {
          if (index % 2 === 1) {
            bgShelfImage = SI_SECOND_HALF_SHELF;
          } else {
            bgShelfImage = SI_FIRST_HALF_SHELF;
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
