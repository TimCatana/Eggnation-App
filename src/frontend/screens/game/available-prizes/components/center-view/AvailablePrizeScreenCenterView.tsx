import React, {FC} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  C_ACTIVITY_INDICATOR,
  C_BACKGROUND_BOOKSHELF,
} from '../../../../../theme/Colors';
import TopShelfImage from './TopShelfImage';
import {BookshelfContent} from '../../../../../common/components';

interface Props {
  isInitialized: boolean;
  isLoading: boolean;
  isPrizeFetchFailed: boolean;
  prizeFetchFailedText: string;
  data: any; // TODO, make specific type later (availablePrize[])
  handleShowPrize: () => void;
  handleDisplayPrizeIdChange: (value: string) => void;
  handleDisplayPrizeTitleChange: (value: string) => void;
  handleDisplayPrizeDescChange: (value: string) => void;
  handleDisplayPrizeTypeChange: (value: string) => void;
  handleDisplayPrizeTierChange: (value: string) => void;
}

const AvailablePrizeScreenCenterView: FC<Props> = props => {
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
      <TopShelfImage />

      <BookshelfContent
        isInitialized={isInitialized}
        isLoading={isLoading}
        isPrizeFetchFailed={isPrizeFetchFailed}
        prizeFetchFailedText={prizeFetchFailedText}
        data={data}
        handleShowPrize={handleShowPrize}
        handleDisplayPrizeIdChange={handleDisplayPrizeIdChange}
        handleDisplayPrizeTitleChange={handleDisplayPrizeTitleChange}
        handleDisplayPrizeDescChange={handleDisplayPrizeDescChange}
        handleDisplayPrizeTypeChange={handleDisplayPrizeTypeChange}
        handleDisplayPrizeTierChange={handleDisplayPrizeTierChange}
      />

      <ActivityIndicator
        style={styles.loading}
        animating={!isInitialized || (isInitialized && isLoading)}
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

export default AvailablePrizeScreenCenterView;
