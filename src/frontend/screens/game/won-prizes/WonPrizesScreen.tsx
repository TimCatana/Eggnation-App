import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {C_BACKGROUND_BOOKSHELF} from '../../../theme/Colors';
import WonPrizeScreenLeftView from './components/left-view/WonPrizeScreenLeftView';
import WonPrizeScreenRightView from './components/right-view/WonPrizeScreenRightView';
import PrizeDisplayModal from '../../../common/components/prize-display-modal/PrizeDisplayModal';
import WonPrizeScreenCenterView from './components/center-view/WonPrizeScreenCenterView';
import {WonPrizeScreenProp} from '../../../navigation/ScreenProps';

import TEST_DATA from '../../../../../test-data/availablePrizes.json';
import useWonPrizesScreen from './useWonPrizesScreen';

interface Props {
  isInitialized: boolean;
  isLoading: boolean;
  isPrizeFetchFailed: boolean;
  prizeFetchFailedText: string;
  isShowingPrize: boolean;
  wonPrizes: any; // todo addd proper type later
  handleShowPrize: () => void;
  handleHidePrize: () => void;
  handleDisplayPrizeIdChange: (id: string) => void;
  displayPrizeId: string;
  handleDisplayPrizeTitleChange: (title: string) => void;
  displayPrizeTitle: string;
  handleDisplayPrizeDescChange: (desc: string) => void;
  displayPrizeDesc: string;
  handleDisplayPrizeTierChange: (tier: string) => void;
  displayPrizeTier: string;
  handleDisplayPrizeTypeChange: (type: string) => void;
  displayPrizeType: string;
  navigation: WonPrizeScreenProp;
}

const WonPrizesScreen: FC<Props> = () => {
  const {
    isInitialized,
    isLoading,
    isPrizeFetchFailed,
    prizeFetchFailedText,
    isShowingPrize,
    wonPrizes,
    handleShowPrize,
    handleHidePrize,
    handleDisplayPrizeIdChange,
    displayPrizeId,
    handleDisplayPrizeTitleChange,
    displayPrizeTitle,
    handleDisplayPrizeDescChange,
    displayPrizeDesc,
    handleDisplayPrizeTierChange,
    displayPrizeTier,
    handleDisplayPrizeTypeChange,
    displayPrizeType,
    navigation,
  } = useWonPrizesScreen();

  return (
    <View style={styles.body}>
      <WonPrizeScreenLeftView />

      <WonPrizeScreenCenterView
        isInitialized={isInitialized}
        isLoading={isLoading}
        isPrizeFetchFailed={isPrizeFetchFailed}
        prizeFetchFailedText={prizeFetchFailedText}
        data={TEST_DATA}
        handleShowPrize={handleShowPrize}
        handleDisplayPrizeIdChange={handleDisplayPrizeIdChange}
        handleDisplayPrizeTitleChange={handleDisplayPrizeTitleChange}
        handleDisplayPrizeDescChange={handleDisplayPrizeDescChange}
        handleDisplayPrizeTypeChange={handleDisplayPrizeTypeChange}
        handleDisplayPrizeTierChange={handleDisplayPrizeTierChange}
      />

      <PrizeDisplayModal
        isLoading={isLoading}
        prizeId={displayPrizeId}
        prizeTitle={displayPrizeTitle}
        prizeDesc={displayPrizeDesc}
        prizeTier={displayPrizeTier}
        prizeType={displayPrizeType}
        prizeIsClaimed={true} // In case something goes wrong, then this will prevent user from claiming prize they didn't win
        isWonPrize={false}
        isModalVisible={isShowingPrize}
        handleHidePrize={handleHidePrize}
        navigation={navigation}
      />

      <WonPrizeScreenRightView />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: C_BACKGROUND_BOOKSHELF,
  },
});

export default WonPrizesScreen;
