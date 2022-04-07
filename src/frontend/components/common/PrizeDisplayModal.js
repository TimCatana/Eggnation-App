import React from 'react';
import {View, Text, Modal, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import TopLeftCornerIcon from './TopLeftCornerIcon';

const PrizeDisplayModal = props => {
  const {
    prizeTitle,
    prizeDesc,
    prizeTier,
    prizeType,
    prizeIsClaimed,
    isWonPrize,
    isModalVisible,
    handleHidePrize,
  } = props;

  return (
    <Modal
      style={styles.formView}
      animationType="fade"
      visible={isModalVisible}
      onRequestClose={() => {
        if (!isLoading) {
          hidePasswordModal();
        }
      }}>
      <View style={styles.body}>
      <TopLeftCornerIcon
        icon={'arrow-left'}
        onPress={handleHidePrize}
        viewStyle={styles.icon}
        iconStyle={{}}
        iconSize={hp('3.5%')}
      />

        <View style={styles.topView}>
          <Text style={styles.text}>{prizeTitle}</Text>
          <Text style={styles.text}>{prizeDesc}</Text>
          <Text style={styles.text}>{prizeTier}</Text>
        </View>
        <View style={styles.centerView}>
          <Text style={styles.text}>{prizeType}</Text>
          <Text style={styles.text}>{prizeIsClaimed.toString()}</Text>
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.text}>{isWonPrize.toString()}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    disply: 'flex',
  },
  topView: {
    flex: 5,
    backgroundColor: 'red',
  },
  centerView: {
    flex: 4,
    backgroundColor: 'blue',
  },
  bottomView: {
    flex: 5,
    backgroundColor: 'yellow',
  },
  icon: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: wp('1%'),
    paddingTop: hp('1%'),
  },
  text: {
    fontSize: 30,
  },
});

export default PrizeDisplayModal;
