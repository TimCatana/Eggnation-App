import React, {FC} from 'react';
import {View, Modal, StyleSheet} from 'react-native';
import {C_BACKGROUND_DARK} from '../../../../theme/Colors';
import PrizeClaimedModalCenterView from './PrizeClaimedModalCenterView';
import PrizeClaimedModalBottomView from './PrizeColaimedModalBottomView';
import PrizeClaimedModalTopView from './PrizeClaimedModalTopView';

interface Props {
  isLoading: boolean;
  isModalVisible: boolean;
  navigateBack: () => void;
}

const PrizeClaimedModal: FC<Props> = props => {
  const {isLoading, isModalVisible, navigateBack} = props;

  return (
    <Modal
      style={{}}
      animationType="fade"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => {
        if (!isLoading) {
          navigateBack();
        }
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <PrizeClaimedModalTopView />
          <PrizeClaimedModalCenterView />
          <PrizeClaimedModalBottomView navigateBack={navigateBack} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    flex: 1,
    display: 'flex',
    height: '100%',
    width: '100%',
    backgroundColor: C_BACKGROUND_DARK,
  },
});

export default PrizeClaimedModal;
