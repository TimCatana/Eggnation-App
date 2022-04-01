import React from 'react';
import useAvailablePrizesScreen from './useAvailablePrizesScreen';
import {View, Text, ImageBackground, FlatList, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import PrizeShelfCard from '../../../components/common/PrizeShelfCard';
import bookshelf from '../../../../../assets/bookshelf.png';
import TEST_DATA from '../../../../../test-data/availablePrizes.json'

const AvailablePrizesScreen = () => {
  const {
    isInitialized,
    isLoading,
    isPrizeFetchFailed,
    isShowingPrize,
    availablePrizes,
    handleShowPrize,
    handleHidePrize,
  } = useAvailablePrizesScreen();

  // @NOTE in flatlist, passing 'item' passes {index: ..., item: ...}  so I can make it more effifcient by deconstructing better later on

  return (
    <View style={styles.body}>
      {!isInitialized && <Text style={styles.text}>initializing</Text>}

      {isInitialized && isLoading && <Text style={styles.text}>Loading</Text>}

      {isInitialized && !isLoading && isPrizeFetchFailed && (
        <Text style={styles.text}>Failed to fetch prizes</Text>
      )}

      {isInitialized && !isLoading && !isPrizeFetchFailed && (
        <FlatList
          style={styles.prizeList}
          data={TEST_DATA}
          numColumns={2}
          renderItem={item => <PrizeShelfCard prize={item.item} />}
          keyExtractor={item => item.prizeId}
        />
      )}

      <ImageBackground
        style={styles.backgroundContainer}
        source={bookshelf}
        resizeMode="stretch"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#29211F'
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  prizeList: {
    marginTop: hp('5%'),
    display: 'flex',
  },
  text: {
    fontSize: 100,
  },
});

export default AvailablePrizesScreen;
