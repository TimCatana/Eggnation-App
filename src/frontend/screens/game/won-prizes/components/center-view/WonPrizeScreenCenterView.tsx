import React, {FC} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  C_ACTIVITY_INDICATOR,
  C_BACKGROUND_BOOKSHELF,
} from '../../../../../theme/Colors';
import {BookshelfContent} from '../../../../../common/components';
import TopShelfImage from './TopShelfImage';

interface Props {
  isInitialized: boolean;
  isLoading: boolean;
  isPrizeFetchFailed: boolean;
  prizeFetchFailedText: string;
  data: any; // todo change to proper type
  handleShowPrize: () => void;
  handleDisplayPrizeIdChange: (id: string) => void;
  handleDisplayPrizeTitleChange: (title: string) => void;
  handleDisplayPrizeDescChange: (desc: string) => void;
  handleDisplayPrizeTypeChange: (type: string) => void;
  handleDisplayPrizeTierChange: (tier: string) => void;
}

const WonPrizeScreenCenterView: FC<Props> = props => {
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

export default WonPrizeScreenCenterView;
