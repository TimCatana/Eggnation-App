import React from 'react';
import useWonPrizesScreen from './useWonPrizesScreen';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {CLAIM_PRIZE_SCREEN} from '../../../util/NavigationConstants';
import PrizeShelfCard from '../../../components/common/PrizeShelfCard';
import bookshelf from '../../../../../assets/bookshelf.png';
import TEST_DATA from '../../../../../test-data/availablePrizes.json'
import {
  FIRST_HALF_SHELF,
  FULL_SHELF,
  SECOND_HALF_SHELF,
} from '../../../util/ShelfImageConstants';
import bookeshelfLeft from '../../../../../assets/bookshelfLeft.png';
import bookeshelfRight from '../../../../../assets/bookshelfRight.png';
import bookeshelfTop from '../../../../../assets/bookshelfTop.png';

const WonPrizesScreen = ({navigation}) => {
  const {
    isInitialized,
    isLoading,
    isPrizeFetchFailed,
    isShowingPrize,
    wonPrizes,
    handleShowPrize,
    handleHidePrize,
  } = useWonPrizesScreen();

  return (
    <View style={styles.body}>
      <Image
        style={{backgroundColor: 'red', flex: 1}}
        resizeMode="stretch"
        source={bookeshelfLeft}
      />

      <View style={{backgroundColor: 'blue', flex: 15, display: 'flex'}}>
        <View style={{backgroundColor: 'purple', flex: 1}}>
          <Image
            style={{
              width: '100%',
              height: '100%',
            }}
            resizeMode="stretch"
            source={bookeshelfTop}
          />
        </View>

        <View style={{backgroundColor: 'orange', flex: 13}}>
          {!isInitialized && <Text style={styles.text}>initializing</Text>}

          {isInitialized && isLoading && (
            <Text style={styles.text}>Loading</Text>
          )}

          {isInitialized && !isLoading && isPrizeFetchFailed && (
            <Text style={styles.text}>Failed to fetch prizes</Text>
          )}

          {isInitialized && !isLoading && !isPrizeFetchFailed && (
            <>
              <FlatList
                style={styles.prizeList}
                data={TEST_DATA}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => {
                  let bgShelfImage = FULL_SHELF;

                  if (index === TEST_DATA.length - 1) {
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
                      // handleDisplayPrizeTitleChange={
                      //   handleDisplayPrizeTitleChange
                      // }
                      // handleDisplayPrizeDescChange={
                      //   handleDisplayPrizeDescChange
                      // }
                      // handleDisplayPrizeTypeChange={
                      //   handleDisplayPrizeTypeChange
                      // }
                      // handleDisplayPrizeTierChange={
                      //   handleDisplayPrizeTierChange
                      // }
                    />
                  );
                }}
                keyExtractor={item => item.prizeId}
              />

              {/* <PrizeDisplayModal
                prizeTitle={displayPrizeTitle}
                prizeDesc={displayPrizeDesc}
                prizeTier={displayPrizeTier}
                prizeType={displayPrizeType}
                prizeIsClaimed={true} // In case something goes wrong, then this will prevent user from claiming prize they didn't win
                isWonPrize={false}
                isModalVisible={isShowingPrize}
                handleHidePrize={handleHidePrize}
              /> */}
            </>
          )}
        </View>
      </View>

      <Image
        style={{backgroundColor: 'red', flex: 1}}
        resizeMode="stretch"
        source={bookeshelfRight}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#29211F',
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  prizeList: {
    display: 'flex',
  },
  text: {
    fontSize: 100,
  },
});

export default WonPrizesScreen;
