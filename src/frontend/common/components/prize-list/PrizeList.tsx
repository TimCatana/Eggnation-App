import React, {FC} from 'react';
import {FlatList} from 'react-native';
import {
  SI_FULL_SHELF,
  SI_FIRST_HALF_SHELF,
  SI_SECOND_HALF_SHELF,
} from '../../../../constants/Constants';
import {
  AvailablePrizesArray,
  WonPrizesArray,
} from '../../../../constants/typeAliases';
import {PrizeShelfCard} from '../index';
interface Props {
  data: AvailablePrizesArray | WonPrizesArray | [];
  isRefreshing: boolean;
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

const PrizeList: FC<Props> = props => {
  const {data, isRefreshing, handleRefresh, handleShowPrize} = props;

  /**
   * The item to be rendered.
   * I put this here because react native will pre-render this object which
   * will make the flat list more efficient.
   * @param {item, index} (any, number) Item content and the index of the item
   * @returns
   */
  const renderItem = ({item, index}: {item: any; index: number}) => {
    let bgShelfImage = SI_FULL_SHELF;

    if (index % 2 === 0) {
      bgShelfImage =
        index === data.length - 1 ? SI_FULL_SHELF : SI_FIRST_HALF_SHELF;
    } else {
      bgShelfImage = SI_SECOND_HALF_SHELF;
    }

    return (
      <PrizeShelfCard
        prize={item}
        bgShelfImage={bgShelfImage}
        handleShowPrize={handleShowPrize}
      />
    );
  };

  return (
    <FlatList
      style={{}}
      data={data}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={item => item.prizeId}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
    />
  );
};

export default PrizeList;
